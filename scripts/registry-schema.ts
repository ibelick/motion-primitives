export type RegistryType =
  | 'registry:ui'
  | 'registry:hook'
  | 'registry:block'
  | 'registry:component'
  | 'registry:lib'
  | 'registry:page'
  | 'registry:file';

export interface RegistryFile {
  path: string;
  content: string;
  type: RegistryType;
}

export interface TailwindConfig {
  config?: Record<string, object>;
}

export interface CssVars {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface Schema {
  name: string;
  type: RegistryType;
  registryDependencies?: string[];
  dependencies?: string[];
  devDependencies?: string[];
  tailwind?: TailwindConfig;
  cssVars?: CssVars;
  files: RegistryFile[];
  componentName?: string;
  description?: string;
}
