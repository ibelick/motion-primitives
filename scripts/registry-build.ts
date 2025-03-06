import fs from 'fs';
import path from 'path';
import { Schema, RegistryType } from './registry-schema';
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

  // Start with the main component file
  const files = [
    {
      path: `${component.name}.tsx`,
      content,
      type: 'registry:ui' as RegistryType,
    },
  ];

  // Add any additional files specified in the component definition
  if (component.files && component.files.length > 0) {
    for (const depFile of component.files) {
      try {
        const depContent = fs.readFileSync(depFile.path, 'utf8');
        files.push({
          path: depFile.name, // Use the specified filename
          content: depContent,
          type: (depFile.type || 'registry:ui') as RegistryType, // Use specified type or default to registry:ui
        });
      } catch (error) {
        console.error(`Error reading dependent file ${depFile.path}:`, error);
      }
    }
  }

  const schema = {
    name: component.name,
    type: 'registry:ui' as RegistryType,
    registryDependencies: component.registryDependencies || [],
    dependencies: component.dependencies || [],
    devDependencies: component.devDependencies || [],
    tailwind: component.tailwind || {},
    cssVars: component.cssVars || {
      light: {},
      dark: {},
    },
    files,
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
    type: 'registry:hook' as RegistryType,
    files: [
      {
        path: `${hook.name}.ts`,
        content,
        type: 'registry:hook' as RegistryType,
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
      type: 'registry:component' as RegistryType,
    },
  ];

  // Add files from the files property (core components)
  if (example.files && example.files.length > 0) {
    for (const depFile of example.files) {
      try {
        const depContent = fs.readFileSync(depFile.path, 'utf8');
        files.push({
          path: `components/core/${depFile.name}`,
          content: depContent,
          type: (depFile.type || 'registry:ui') as RegistryType, // Use specified type or default to registry:ui
        });
      } catch (error) {
        console.error(`Error reading dependent file ${depFile.path}:`, error);
      }
    }
  }

  const schema = {
    name: example.name,
    type: 'registry:ui' as RegistryType,
    componentName: example.componentName,
    description: example.description,
    files,
  } satisfies Schema;

  fs.writeFileSync(
    path.join(registryExamples, `${example.name}.json`),
    JSON.stringify(schema, null, 2)
  );
}

// Generate consolidated registry.json file in shadcn/ui format
const registryItems = components.map((component) => {
  // Generate component path relative to the registry
  const componentPath = component.path.replace(path.join(__dirname, '..'), '');
  const relativeComponentPath = componentPath.startsWith('/')
    ? componentPath.substring(1)
    : componentPath;

  const componentFiles = [
    {
      path: relativeComponentPath,
      type: 'registry:component',
    },
  ];

  // Add additional files if specified
  if (component.files && component.files.length > 0) {
    for (const file of component.files) {
      const filePath = file.path.replace(path.join(__dirname, '..'), '');
      const relativeFilePath = filePath.startsWith('/')
        ? filePath.substring(1)
        : filePath;

      componentFiles.push({
        path: relativeFilePath,
        type: file.type || 'registry:component',
      });
    }
  }

  return {
    name: component.name,
    type: 'registry:ui',
    title: component.name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: component.description,
    dependencies: component.dependencies || [],
    devDependencies: component.devDependencies || [],
    registryDependencies: component.registryDependencies || [],
    files: componentFiles,
    categories: ['ui', 'motion-primitives'],
  };
});

const registry = {
  $schema: 'https://ui.shadcn.com/schema/registry.json',
  name: 'motion-primitives',
  homepage: 'https://motion-primitives.com',
  items: registryItems,
};

// Write the registry.json file
fs.writeFileSync(
  path.join(registryComponents, 'registry.json'),
  JSON.stringify(registry, null, 2)
);

console.log('Registry files generated successfully!');
