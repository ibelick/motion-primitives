# Motion Primitives CLI

A command-line interface for easily adding beautiful, animated components to your React project.

## Installation

You can use the CLI directly with npx:

```bash
npx motion-primitives <command>
```

Or install it globally:

```bash
npm install -g motion-primitives
motion-primitives <command>
```

## Usage

### List available components

To see all available animated components:

```bash
npx motion-primitives list
```

This will display a list of all available components along with descriptions and required dependencies.

### Add a component

To add a specific component to your project:

```bash
npx motion-primitives add <component-name>
```

For example:

```bash
npx motion-primitives add text-morph
```

This will:

1. Create a `components/motion-primitives` directory in your project (if it doesn't exist)
2. Download and add the component files
3. Show any additional dependencies that need to be installed

## Available Components

Motion Primitives offers a variety of beautiful and performant animated components, including:

- **Animated UI Elements**: Accordion, Dialog, Text Effects, Carousels
- **Interactive Animations**: Magnetic elements, Spotlights, Tilt effects
- **Text Animations**: Text morphing, Text loops, Text scramble effects, Spinning text
- **And many more!**

For the complete list, run `npx motion-primitives list`.

## Dependencies

Most components require the `motion` library. When you add a component, the CLI will tell you which dependencies you need to install.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)
