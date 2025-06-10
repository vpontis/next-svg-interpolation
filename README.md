# Next.js Styled JSX SVG Interpolation Issue

This project demonstrates an issue with SVG interpolation in styled-jsx when using dynamic values.

## The Problem

When using styled-jsx with SVG data URIs in CSS properties (like `mask-image`), string interpolation with dynamic values fails to work properly. The interpolated values are not correctly inserted into the SVG string.

## Example

The project shows two implementations:

1. **Good (Working)**: Static SVG values hardcoded in the CSS
2. **Bad (Broken)**: SVG values using template literal interpolation with JavaScript variables

```jsx
// This doesn't work - the variables are not interpolated
mask-image: url('data:image/svg+xml,<svg>...<circle r="${dynamicValue}"/></svg>');
```

## Running the Demo

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to see the comparison between working and broken implementations.

## Configuration

The project uses styled-jsx with Lightning CSS compiler:

```js
// next.config.ts
compiler: {
  styledJsx: {
    useLightningcss: true,
  },
}
```