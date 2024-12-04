import fs from 'fs';
import path from 'path';
import { Schema } from './registry-components';
import { components } from './registry-components';

const registry = path.join(__dirname, '../public/c');
if (!fs.existsSync(registry)) {
  fs.mkdirSync(registry);
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
    path.join(registry, `${component.name}.json`),
    JSON.stringify(schema, null, 2)
  );
}
