#!/usr/bin/env node

import { program } from 'commander';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import ora from 'ora';
import fetch from 'node-fetch';

const MOTION_PRIMITIVES_REGISTRY_URL =
  'https://raw.githubusercontent.com/ibelick/motion-primitives/main/public/c/registry.json';
const MOTION_PRIMITIVES_BASE_URL =
  'https://raw.githubusercontent.com/ibelick/motion-primitives/main/';
const TARGET_DIR = 'components/motion-primitives';

interface FileEntry {
  path: string;
  type: string;
  content?: string;
}

interface RegistryItem {
  name: string;
  dependencies?: string[];
  registryDependencies?: string[]; // Kept for reference, not used here
  files: FileEntry[];
}

interface Registry {
  items: RegistryItem[];
}

async function fetchRegistry(url: string): Promise<Registry> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch registry from ${url}: ${response.status}`);
  }
  return response.json();
}

async function fetchFile(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch file from ${url}: ${response.status}`);
  }
  return response.text();
}

program
  .command('add')
  .argument('<component>', 'The component to add (e.g., scroll-button)')
  .description('Add a prompt-kit component to your project')
  .action(async (component: string) => {
    const spinner = ora(`Adding ${component}...`).start();

    try {
      // Fetch the motion-primitives registry
      const motionPrimitivesRegistry = await fetchRegistry(
        MOTION_PRIMITIVES_REGISTRY_URL
      );
      const componentEntry = motionPrimitivesRegistry.items.find(
        (item) => item.name === component
      );
      if (!componentEntry) {
        spinner.fail(
          `Component "${component}" not found in motion-primitives registry`
        );
        process.exit(1);
      }

      // Collect all files and dependencies
      const allFiles: { path: string; content: string }[] = [];
      const allDependencies: Set<string> = new Set(
        componentEntry.dependencies || []
      );

      // Process all files from registry.json
      for (const file of componentEntry.files) {
        const content =
          file.content ||
          (await fetchFile(`${MOTION_PRIMITIVES_BASE_URL}${file.path}`));
        const fileName = file.path.split('/').pop()!;
        allFiles.push({ path: fileName, content });
      }

      // Create target directory if it doesn't exist
      if (!existsSync(TARGET_DIR)) {
        mkdirSync(TARGET_DIR, { recursive: true });
      }

      // Write all files to components/prompt-kit/
      for (const { path, content } of allFiles) {
        const filePath = join(TARGET_DIR, path);
        writeFileSync(filePath, content);
        console.log(`✓ Added ${path} to ${filePath}`);
      }

      // Log dependencies for manual installation
      const depsArray = Array.from(allDependencies);
      if (depsArray.length > 0) {
        spinner.succeed(`Component "${component}" added successfully!`);
        console.log('\nInstall the following dependencies:');
        console.log(`npm i ${depsArray.join(' ')}`);
      } else {
        spinner.succeed(
          `Component "${component}" added successfully! No additional dependencies needed.`
        );
      }
    } catch (error: any) {
      spinner.fail(`Error: ${error.message || error}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
