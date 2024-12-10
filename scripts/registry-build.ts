import fs from 'fs';
import path from 'path';
import { Schema } from './registry-schema';
import { components } from './registry-components';
import { hooks } from './registry-hooks';

const registryComponents = path.join(__dirname, '../public/c');
const registryHooks = path.join(__dirname, '../public/h');

if (!fs.existsSync(registryComponents)) {
  fs.mkdirSync(registryComponents);
}

if (!fs.existsSync(registryHooks)) {
  fs.mkdirSync(registryHooks);
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
