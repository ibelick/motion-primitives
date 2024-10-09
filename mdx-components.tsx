import type { MDXComponents } from 'mdx/types';

const generateId = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props: any) => {
      const id = generateId(props.children);
      return (
        <h1 id={id} {...props}>
          {props.children}
        </h1>
      );
    },
    h2: (props: any) => {
      const id = generateId(props.children);
      return (
        <h2 id={id} {...props}>
          {props.children}
        </h2>
      );
    },
    h3: (props: any) => {
      const id = generateId(props.children);
      return (
        <h3 id={id} {...props}>
          {props.children}
        </h3>
      );
    },
    h4: (props: any) => {
      const id = generateId(props.children);
      return (
        <h4 id={id} {...props}>
          {props.children}
        </h4>
      );
    },
  };
}
