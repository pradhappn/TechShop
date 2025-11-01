# E-Commerce Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Shopify's clean, product-focused aesthetic and modern e-commerce best practices. This design prioritizes visual product presentation, seamless browsing experience, and conversion-optimized checkout flows.

## Core Design Principles
1. **Product-First**: Visual hierarchy emphasizes product imagery and clear pricing
2. **Friction-Free Shopping**: Streamlined cart and checkout with minimal steps
3. **Trust & Credibility**: Professional presentation builds confidence in purchasing
4. **Mobile-Optimized**: Touch-friendly interactions and responsive layouts

---

## Typography System

**Font Selection**: Google Fonts via CDN
- **Primary (Headings)**: Inter (weights: 600, 700)
- **Secondary (Body)**: Inter (weights: 400, 500)

**Hierarchy**:
- Hero Headline: text-5xl lg:text-6xl font-bold
- Section Headers: text-3xl lg:text-4xl font-bold
- Product Names: text-xl lg:text-2xl font-semibold
- Prices: text-2xl lg:text-3xl font-bold
- Body Text: text-base lg:text-lg
- Captions/Labels: text-sm font-medium
- Buttons: text-base font-semibold uppercase tracking-wide

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-20
- Element gaps: gap-4 to gap-8
- Container margins: mx-4 to mx-8

**Grid Systems**:
- Product Grid: grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6
- Feature Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Cart Layout: Single column (mobile), two-column split (desktop)
- Admin Panel: Sidebar + main content area

**Container Widths**:
- Max content: max-w-7xl mx-auto
- Product cards: w-full within grid
- Forms: max-w-2xl for optimal readability

---

## Component Library

### Navigation
**Header**: Sticky top navigation with glass morphism effect (backdrop-blur-lg)
- Logo (left), centered search bar, account/cart icons (right)
- Desktop: Horizontal category menu below header
- Mobile: Hamburger menu with slide-in panel
- Cart icon with badge showing item count

### Hero Section
**Large hero image**: Full-width, 70vh on desktop, 50vh on mobile
- Overlay with centered content container
- Headline + subheadline + CTA button with blurred background (backdrop-blur-md)
- Buttons should NOT have hover/active states on blurred backgrounds

### Product Cards
**Structure**: Vertical cards with hover elevation effect
- Square aspect ratio product image (1:1)
- Image placeholder: Subtle gradient with centered icon if no image
- Product name (2 lines max, truncate)
- Price display (prominent, right-aligned)
- Quick-add button appears on hover (desktop only)
- Rating stars (5-star system with partial fills)
- "New" or "Sale" badges (absolute positioned, top-right)

### Product Detail Page
**Layout**: Two-column on desktop (60/40 split), stacked on mobile
- Left: Image gallery with main image + thumbnail strip
- Right: Product info (name, price, description, variants, add-to-cart)
- Sticky add-to-cart section on mobile
- Accordion sections for shipping, returns, reviews

### Shopping Cart
**Mini Cart**: Slide-out panel from right (350px width)
- Header with "Cart" title and close button
- Scrollable product list with thumbnails, names, quantities
- Each item: thumbnail (60x60), name, price, quantity selector, remove button
- Footer: Subtotal, "View Cart" and "Checkout" buttons

**Full Cart Page**: Two-column desktop, stacked mobile
- Left (70%): Product list with larger thumbnails (100x100), full controls
- Right (30%): Sticky order summary card with subtotal, shipping, total, checkout button

### Checkout Flow
**Single-Page Checkout**: Progressive disclosure sections
- Shipping information form (2-column grid for name, address fields)
- Payment method (Stripe card input with clean styling)
- Order summary sidebar (desktop) or collapsible (mobile)
- Form validation with inline error messages
- Progress indicator: Steps (Shipping → Payment → Review)

### Admin Panel
**Layout**: Sidebar navigation + main content area
- Sidebar (240px): Logo, menu items with icons, logout
- Main: Data table with product listings
- Action buttons: Add Product (prominent), Edit/Delete per row
- Modal overlays for add/edit forms
- Responsive: Sidebar collapses to hamburger on mobile

### Form Elements
**Consistent Styling**:
- Input fields: Rounded borders (rounded-lg), generous padding (px-4 py-3)
- Labels: Positioned above inputs, font-medium
- Buttons: Rounded (rounded-lg), padding (px-6 py-3), full-width on mobile
- Select dropdowns: Custom styled to match inputs
- Checkboxes/Radio: Larger touch targets (24x24px minimum)

### Data Display
**Product Table** (Admin):
- Headers: Sticky, semi-bold
- Rows: Alternating subtle backgrounds, hover state
- Actions column: Icon buttons (Edit, Delete)
- Pagination: Centered below table

### Overlays
**Modals**: Centered, max-w-2xl, backdrop with blur
- Close button (top-right)
- Padding: p-6 to p-8
- Smooth fade-in animation (200ms)

**Toast Notifications**: Fixed position (top-right, below header)
- Success/error variants with icons
- Auto-dismiss after 4 seconds
- Slide-in from right animation

---

## Icons
**Library**: Heroicons via CDN (outline style for navigation, solid for actions)
- Shopping cart, user account, search, menu, close
- Star (ratings), heart (wishlist), plus/minus (quantity)
- Trash (delete), pencil (edit), check (success)

---

## Images

**Hero Section**:
- Large lifestyle image showing products in use or curated collection
- High-quality, professional photography
- 1920x1080 minimum resolution
- Aspect ratio: 16:9 or wider

**Product Images**:
- Clean, white or neutral backgrounds
- Square format (800x800px minimum)
- Multiple angles in product gallery (front, side, detail shots)
- Lifestyle shots showing product in context

**Category/Feature Sections**:
- 3-4 featured category images in grid
- 600x400px minimum
- Consistent styling across all category images

**Trust Indicators**:
- Payment method logos (Stripe, credit cards)
- Security badges
- Shipping partner logos

---

## Animations
**Minimal and Purposeful**:
- Product card hover: Scale (1.02) + elevation shadow (200ms ease)
- Button interactions: Scale (0.98) on click (100ms)
- Cart item add: Brief pulse animation on cart icon
- Modal/overlay: Fade-in backdrop + scale content (200ms)
- Page transitions: Smooth scroll behavior only

---

## Accessibility
- All form inputs have associated labels
- Sufficient contrast ratios throughout
- Focus states clearly visible with outline rings
- Alt text for all product images
- Keyboard navigation support for all interactive elements
- ARIA labels for icon-only buttons

---

## Page-Specific Layouts

**Homepage**:
1. Hero with large image and CTA
2. Featured products grid (8-12 products)
3. Category showcase (3-column grid with images)
4. Trust indicators section (shipping, returns, secure payment)
5. Newsletter signup with form

**Product Listing**:
- Filters sidebar (desktop) or dropdown (mobile)
- Sorting options (price, newest, popular)
- Product grid (responsive columns)
- Load more or pagination

**Order Confirmation**:
- Success message with order number
- Order summary with items, pricing, shipping address
- Next steps (email confirmation, tracking)
- Continue shopping CTA

This design creates a modern, professional e-commerce experience that prioritizes product discovery, builds trust, and streamlines the purchase journey.