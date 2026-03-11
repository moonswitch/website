---
name: new-component
description: Scaffold a new React component with consistent file structure
disable-model-invocation: true
---

# New Component

Create a new React component in the Next.js project.

## Arguments

- `name` (required): Component name in PascalCase (e.g., `Hero`, `PricingCard`)
- `path` (optional): Subdirectory under `src/components/` (e.g., `ui`, `layout`). Defaults to root of `src/components/`.

## Instructions

1. Create the component directory at `src/components/{path}/{name}/`
2. Create the following files:

### `{name}.tsx`

```tsx
interface {name}Props {
  // Define props here
}

export function {name}({ }: {name}Props) {
  return (
    <div>
      {name}
    </div>
  );
}
```

### `index.ts`

```ts
export { {name} } from "./{name}";
```

3. Use Tailwind CSS classes for styling (no CSS modules or styled-components)
4. Use named exports, not default exports
5. Keep props interface in the same file as the component
6. If the user describes what the component should do, implement it fully — don't just scaffold
