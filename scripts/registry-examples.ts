import path from 'path';
import fs from 'fs';
import { glob } from 'glob';

type ExampleDefinition = {
  name: string;
  path: string;
  componentName: string;
};

// Find all example files in the docs directory
const findExamples = (): ExampleDefinition[] => {
  const examples: ExampleDefinition[] = [];

  // Get all .tsx files in the docs directory (excluding page.tsx files)
  const exampleFiles = glob.sync('app/docs/**/*.tsx', {
    ignore: ['app/docs/**/page.tsx', 'app/docs/**/layout.tsx'],
  });

  exampleFiles.forEach((filePath) => {
    // Extract the file name without extension as the name
    const fileName = path.basename(filePath, '.tsx');

    // Extract the component name (parent directory)
    const pathParts = filePath.split('/');
    const componentName = pathParts[2]; // app/docs/[componentName]/file.tsx

    examples.push({
      name: fileName,
      path: path.join(__dirname, '..', filePath),
      componentName,
    });
  });

  return examples;
};

export const examples = findExamples();
