# 🚀 Tailwind CSS Quick Reference

## Spacing Cheat Sheet

| Class  | Value   | Pixels |
| ------ | ------- | ------ |
| `p-0`  | 0       | 0px    |
| `p-1`  | 0.25rem | 4px    |
| `p-2`  | 0.5rem  | 8px    |
| `p-3`  | 0.75rem | 12px   |
| `p-4`  | 1rem    | 16px   |
| `p-6`  | 1.5rem  | 24px   |
| `p-8`  | 2rem    | 32px   |
| `p-12` | 3rem    | 48px   |
| `p-16` | 4rem    | 64px   |

Replace `p` with:

- `m` for margin
- `px`/`mx` for horizontal
- `py`/`my` for vertical
- `pt`/`mt` for top
- `pb`/`mb` for bottom
- `pl`/`ml` for left
- `pr`/`mr` for right

## Colors

### Most Common Colors

```
slate, gray, zinc, neutral, stone
red, orange, amber, yellow, lime, green
emerald, teal, cyan, sky, blue, indigo
violet, purple, fuchsia, pink, rose
```

### Shades

50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

### Usage

- `text-{color}-{shade}` - Text color
- `bg-{color}-{shade}` - Background color
- `border-{color}-{shade}` - Border color

## Typography

```jsx
// Size
text-xs, text-sm, text-base, text-lg, text-xl
text-2xl, text-3xl, text-4xl, text-5xl, text-6xl

// Weight
font-thin, font-light, font-normal, font-medium
font-semibold, font-bold, font-extrabold

// Alignment
text-left, text-center, text-right, text-justify

// Line Height
leading-tight, leading-normal, leading-loose

// Letter Spacing
tracking-tight, tracking-normal, tracking-wide
```

## Flexbox

```jsx
// Container
flex, inline - flex;

// Direction
flex - row, flex - col, flex - row - reverse, flex - col - reverse;

// Justify (Main Axis)
justify - start, justify - center, justify - end;
justify - between, justify - around, justify - evenly;

// Align Items (Cross Axis)
items - start, items - center, items - end, items - stretch;

// Wrap
flex - wrap, flex - nowrap;

// Gap
gap - { size }, gap - x - { size }, gap - y - { size };
```

## Grid

```jsx
// Columns
grid-cols-1 to grid-cols-12

// Rows
grid-rows-1 to grid-rows-6

// Gap
gap-{size}

// Span
col-span-{1-12}, row-span-{1-6}
```

## Sizing

```jsx
// Width
w-auto, w-full, w-screen, w-min, w-max
w-{size} (1-96)
w-1/2, w-1/3, w-2/3, w-1/4, w-3/4

// Height
h-auto, h-full, h-screen, h-min, h-max
h-{size} (1-96)

// Max Width
max-w-xs, max-w-sm, max-w-md, max-w-lg
max-w-xl, max-w-2xl, max-w-full
```

## Borders

```jsx
// Width
border, border-{0-8}
border-t, border-r, border-b, border-l

// Radius
rounded-none, rounded-sm, rounded, rounded-md
rounded-lg, rounded-xl, rounded-2xl, rounded-full

// Style
border-solid, border-dashed, border-dotted
```

## Responsive Breakpoints

```jsx
sm:  // 640px
md:  // 768px
lg:  // 1024px
xl:  // 1280px
2xl: // 1536px

// Usage: sm:text-lg md:text-xl lg:text-2xl
```

## States

```jsx
hover:     // On hover
focus:     // On focus
active:    // On click
disabled:  // When disabled
group-hover: // Hover on parent
```

## Common Combinations

### Center Everything

```jsx
className = "flex items-center justify-center min-h-screen";
```

### Responsive Container

```jsx
className = "container mx-auto px-4";
```

### Button

```jsx
className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700";
```

### Card

```jsx
className = "p-6 bg-white rounded-lg shadow-lg";
```

### Input

```jsx
className =
  "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
```
