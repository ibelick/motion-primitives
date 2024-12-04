import fs from 'fs';
import path from 'path';

export interface Schema {
  name: string;
  type: 'registry:ui';
  registryDependencies: string[];
  dependencies: string[];
  devDependencies: string[];
  tailwind: {
    config?: Record<string, object>;
  };
  cssVars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  files: Array<{
    path: string;
    content: string;
    type: 'registry:ui';
  }>;
}

type ComponentDefinition = Partial<
  Pick<
    Schema,
    | 'dependencies'
    | 'devDependencies'
    | 'registryDependencies'
    | 'cssVars'
    | 'tailwind'
  >
> & {
  name: string;
  path: string;
};

const components: ComponentDefinition[] = [
  {
    name: 'text-scramble',
    path: path.join(__dirname, '../components/core/text-scramble.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    cssVars: {
      light: {},
      dark: {},
    },
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {},
          },
        },
      },
    },
  },
];

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
