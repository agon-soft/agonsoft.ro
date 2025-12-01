# Design System

**Brutalist Bold** - A high-contrast, technically precise design emphasizing brutalist principles.

## Color Palette

- **Primary**: Black (`#000`) and White (`#fff`)
- **Accent Red**: `red-500` - Used for corner decorations (64x64px squares)
- **Accent Cyan**: `cyan-400` - Horizontal bars, labels, interactive states
- **Grays**: `gray-300`, `gray-400`, `gray-600`, `gray-800` - Subtle text variations

## Typography Scale

All type uses system monospace font (`font-mono`), all caps where noted:

- **Hero (H1)**: 12rem mobile / 20rem desktop, `font-black`, `tracking-tighter`, `leading-[0.8]`
- **Section Headings (H2)**: 8rem mobile / 9rem desktop, `font-black`, `tracking-tighter`, `leading-none`
- **Subsection Headings (H3)**: 8rem, `font-black`, `tracking-tighter`, `leading-none`
- **Emoji Icons**: 9rem (`text-9xl`), `leading-none`
- **Labels**: 1rem-1.25rem, `uppercase`, `tracking-widest` or `tracking-[1em]`, `font-bold`
- **Body Text**: 1rem-1.125rem, `leading-relaxed`
- **Small Text**: 0.875rem (`leading-loose`) to 8px (footer)
- **Large CTA**: 3rem mobile / 4rem desktop, `font-black`

## Border System

- **Major Divisions**: 8px borders (`border-8`) - header bottom, main sections
- **Medium Divisions**: 4px borders (`border-4`) - subsections, responsive splits
- **Minor Divisions**: 2px borders (`border-2`) - list items
- **All uppercase element borders**: White on black, black on white for contrast

## Layout Structure

**Overall**: Full-height flexbox column (`min-h-screen flex flex-col`)

### Header (black background)
- Padding: 3rem mobile / 6rem desktop
- Red corner brackets: 64x64px absolute-positioned squares (top-right, bottom-left)
- Content max-width: 80rem (`max-w-7xl`)
- White horizontal bar: 8px height, 32rem width
- Bottom border: 8px white

### Main (2-column grid on desktop)
- Grid: Stacks mobile, `grid-cols-2` on md+ breakpoints
- Flex-grow to fill viewport (`flex-1`)
- Bottom border: 8px white

### Left Column - About (black background)
- Padding: 3rem mobile / 6rem desktop
- Right border: 4px white (desktop only)
- Bottom border: 4px white (mobile only)
- Red accent bars: 4px x 32rem (top-right, bottom-left)
- Content blocks separated by 6rem margin
- Cyan horizontal bars: 8px height, 24rem width

### Right Column (split into Contact and Legal)
- Flexbox column to distribute space

### Contact Section (white background, black text)
- Padding: 3rem mobile / 6rem desktop
- Red accent bars: 32rem x 4px (top-left, bottom-right)
- Content blocks: 8px left border (black/gray-300), 2rem padding-left
- Email CTA: Black box with hover effect (cyan bg scales from 0 to 100% on hover)
- Bottom border: 4px white

### Legal Section (black background)
- Padding: 3rem mobile / 6rem desktop
- Red accent bars: 4px x 24rem (top-right, bottom-left)
- List items: 2px white bottom borders, 1.5rem padding-bottom
- Top border: 4px white

### Footer (black background)
- Padding: 3rem, centered text
- Top border: 4px white
- Text: 8px, `tracking-[0.8em]`, gray-800

## Spacing System

Based on 0.25rem (4px) increments:

- **Micro**: 0.5rem (2px borders), 0.75rem (3px)
- **Small**: 1rem-1.5rem (gaps, small margins)
- **Medium**: 2rem-4rem (section padding mobile, content spacing)
- **Large**: 6rem (section padding desktop, content blocks)
- **XL**: 8rem (major section separation), 16rem (top-level spacing)
- **XXL**: 24rem (block separation)

## Interactive Elements

**Email Link Hover**:
- Background: Cyan fills from bottom-right (scale 0 to 100%)
- Text color: Changes to cyan on hover
- Transition: `transition-colors` and `transition-transform`

**All interactions**: Maintain brutalist aesthetic, no rounded corners or shadows

## Responsive Breakpoints

- **Mobile-first**: Single column, smaller text, stacked layout
- **md (48rem/768px)+**: 2-column grid, larger typography, horizontal splits
- Key responsive classes: `md:text-[20rem]`, `md:text-9xl`, `md:text-4xl`, `md:text-xl`, `md:grid-cols-2`, `md:p-24`, `md:border-r-4`, `md:border-b-0`

## Design Principles

1. **Maximum contrast**: Pure black/white with strategic color
2. **Heavy borders**: 8px for major, 4px for minor, 2px for lists
3. **Geometric precision**: Corner brackets, bars as visual punctuation
4. **Oversized type**: 12-20rem headings for dramatic impact
5. **Monospace consistency**: System font throughout, no external fonts
6. **Minimal decoration**: Red/cyan accents used sparingly
7. **Technical aesthetic**: Code-like precision, brutalist rawness
8. **Information density**: Large headings, compact body, clear hierarchy
