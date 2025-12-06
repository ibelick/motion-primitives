# Motion Primitives - Claude Context

## Project Overview

Motion Primitives is a collection of beautifully designed, easy-to-integrate motion components built with [Motion](https://motion.dev/) and [Tailwind CSS](https://tailwindcss.com/). This is a Next.js-based project that provides a component library and documentation site.

**Status:** Beta - Expect regular new components and significant updates.

**Documentation:** https://motion-primitives.com/docs

## Architecture

### Tech Stack
- **Framework:** Next.js 14+ with App Router
- **Animation:** Motion (v11.12.0) - framer-motion successor
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI primitives
- **Language:** TypeScript
- **Content:** MDX for documentation
- **Package Manager:** npm

### Project Structure

```
motion-primitives/
├── app/                    # Next.js app directory
│   └── docs/              # Documentation and examples for each component
├── components/
│   ├── core/              # Core motion components (32+ components)
│   ├── ui/                # UI utility components
│   └── website/           # Website-specific components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and helpers
├── scripts/               # Build scripts (registry-build.ts)
├── cli/                   # CLI tools
└── public/                # Static assets
```

### Core Components

The `components/core/` directory contains 32+ motion components:
- **Text Effects:** text-effect, text-loop, text-morph, text-roll, text-scramble, text-shimmer, text-shimmer-wave, spinning-text
- **Interactive:** accordion, animated-background, animated-group, cursor, magnetic, tilt
- **Transitions:** morphing-dialog, morphing-popover, transition-panel
- **UI Elements:** carousel, dialog, disclosure, dock, toolbar-dynamic, toolbar-expandable
- **Effects:** border-trail, glow-effect, progressive-blur, scroll-progress, spotlight
- **Utilities:** animated-number, sliding-number, in-view, infinite-slider, image-comparison

## Development Workflow

### Setup
```bash
npm install
npm run dev              # Start development server
npm run build           # Build for production
npm run lint            # Run ESLint
npm run build:registry  # Build component registry
```

### Creating New Components

1. **Component Location:** Add to `components/core/[component-name].tsx`
2. **Documentation:** Create examples in `app/docs/[component-name]/`
3. **Naming Convention:** Use kebab-case for files, PascalCase for components
4. **Dependencies:**
   - Use Motion for animations
   - Use Tailwind for styling
   - Use Radix UI for interactive primitives when needed

### Component Structure

```tsx
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ComponentProps {
  // Props with clear documentation
}

export function Component({ prop1, prop2, ...props }: ComponentProps) {
  return (
    <motion.div
      className={cn("base-classes", className)}
      {...props}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

### Code Conventions

**Commit Messages:** Follow conventional commits
- Format: `category(scope): message`
- Categories: `feat`, `fix`, `refactor`, `docs`, `build`, `test`, `ci`, `chore`
- Example: `feat(components): add new prop to the avatar component`

**Code Style:**
- Use TypeScript with strict typing
- Use Tailwind CSS utility classes
- Prefer composition over inheritance
- Keep components focused and single-purpose
- Export named components (not default exports for core components)

**Styling:**
- Use `cn()` utility from `@/lib/utils` for className merging
- Use Tailwind CSS v4 conventions
- Support dark mode via `next-themes`
- Use CSS variables for theming

### Key Files

- **`mdx-components.tsx`** - MDX component mappings for documentation
- **`components.json`** - Component configuration for CLI
- **`scripts/registry-build.ts`** - Registry build script
- **`tailwind.config.js`** - Tailwind configuration
- **`next.config.mjs`** - Next.js configuration

## Common Tasks

### Adding a New Motion Component

1. Create component file in `components/core/[name].tsx`
2. Implement component using Motion primitives
3. Add TypeScript types for all props
4. Create examples in `app/docs/[name]/`
5. Add variants (basic, advanced, custom) as separate example files
6. Update registry if needed
7. Test responsive behavior and accessibility

### Working with Motion

- Import from `motion/react` (not framer-motion)
- Use `motion.*` components for animations
- Leverage Motion's animation presets and variants
- Consider performance with `layout` animations
- Use `initial`, `animate`, and `exit` props for transitions

### Working with MDX Documentation

- Documentation lives in `app/docs/`
- Each component has its own directory with examples
- Use Code Hike for syntax highlighting
- Examples are actual TSX files that can be imported

### Styling Guidelines

- Use Tailwind utility classes
- Avoid inline styles unless necessary for dynamic values
- Use CSS variables for theme values
- Support both light and dark modes
- Use `clsx` or `cn()` for conditional classes
- Follow mobile-first responsive design

## Testing & Building

```bash
npm run lint           # Check for linting errors
npm run build          # Test production build
npm run build:registry # Build component registry
```

## Important Notes

- **Motion vs Framer Motion:** This project uses Motion (v11+), which is the successor to framer-motion
- **Tailwind v4:** Project uses Tailwind CSS v4 (latest)
- **Beta Status:** Expect breaking changes and regular updates
- **Documentation First:** All components should have working examples
- **Performance:** Consider animation performance and reduced motion preferences
- **Accessibility:** Ensure components are keyboard navigable and screen reader friendly

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

Key points:
- Fork and create a feature branch
- Follow commit conventions
- Test your changes thoroughly
- Open discussions for new component requests
- Reference issues in commits when applicable

## Resources

- **Website:** https://motion-primitives.com
- **Docs:** https://motion-primitives.com/docs
- **Motion Docs:** https://motion.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Radix UI:** https://www.radix-ui.com
- **Contact:** [@ibelick](https://x.com/Ibelick)

## Quick Reference

### Import Paths
```typescript
import { Component } from "@/components/core/component";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
```

### Common Utilities
- `cn()` - className merging utility
- `react-use-measure` - Component measurement
- `next-themes` - Theme management

### File Naming
- Components: `component-name.tsx` (kebab-case)
- Examples: `component-name-variant.tsx`
- Types: Define inline or in component file
