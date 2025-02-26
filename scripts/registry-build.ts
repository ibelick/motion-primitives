import fs from 'fs';
import path from 'path';
import { Schema } from './registry-schema';
import { components } from './registry-components';
import { hooks } from './registry-hooks';
import { examples } from './registry-examples';

const registryComponents = path.join(__dirname, '../public/c');
const registryHooks = path.join(__dirname, '../public/h');
const registryExamples = path.join(__dirname, '../public/e');

if (!fs.existsSync(registryComponents)) {
  fs.mkdirSync(registryComponents);
}

if (!fs.existsSync(registryHooks)) {
  fs.mkdirSync(registryHooks);
}

if (!fs.existsSync(registryExamples)) {
  fs.mkdirSync(registryExamples);
}

for (const component of components) {
  const content = fs.readFileSync(component.path, 'utf8');

  const schema = {
    name: component.name,
    type: 'registry:ui',
    registryDependencies: component.registryDependencies || [],
    dependencies: component.dependencies || [],
    devDependencies: component.devDependencies || [],
    tailwind: component.tailwind || {},
    cssVars: component.cssVars || {
      light: {},
      dark: {},
    },
    files: [
      {
        path: `${component.name}.tsx`,
        content,
        type: 'registry:ui',
      },
    ],
  } satisfies Schema;

  fs.writeFileSync(
    path.join(registryComponents, `${component.name}.json`),
    JSON.stringify(schema, null, 2)
  );
}

for (const hook of hooks) {
  const content = fs.readFileSync(hook.path, 'utf8');

  const schema = {
    name: hook.name,
    type: 'registry:hook',
    files: [
      {
        path: `${hook.name}.ts`,
        content,
        type: 'registry:hook',
      },
    ],
  } satisfies Schema;

  fs.writeFileSync(
    path.join(registryHooks, `${hook.name}.json`),
    JSON.stringify(schema, null, 2)
  );
}

for (const example of examples) {
  const content = fs.readFileSync(example.path, 'utf8');
  
  // Prepare the files array - start with the main example file
  const files = [
    {
      path: `${example.name}.tsx`,
      content,
      type: 'registry:example' as const,
    }
  ];
  
  // Add files from the files property (core components)
  if (example.files && example.files.length > 0) {
    for (const depFile of example.files) {
      try {
        const depContent = fs.readFileSync(depFile.path, 'utf8');
        files.push({
          path: `components/core/${depFile.name}`,
          content: depContent,
          type: 'registry:example' as const,
        });
      } catch (error) {
        console.error(`Error reading dependent file ${depFile.path}:`, error);
      }
    }
  }
  
  // Also add files from the dependentFiles property (UI components)
  if (example.dependentFiles && example.dependentFiles.length > 0) {
    for (const depFile of example.dependentFiles) {
      try {
        const depContent = fs.readFileSync(depFile.path, 'utf8');
        files.push({
          path: `components/ui/${depFile.name}`,
          content: depContent,
          type: 'registry:example' as const,
        });
      } catch (error) {
        console.error(`Error reading dependent file ${depFile.path}:`, error);
      }
    }
  }

  const schema = {
    name: example.name,
    type: 'registry:example',
    componentName: example.componentName,
    description: example.description,
    files,
  } satisfies Schema;

  fs.writeFileSync(
    path.join(registryExamples, `${example.name}.json`),
    JSON.stringify(schema, null, 2)
  );
}
