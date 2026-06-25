# Plan: Create a Separate Compare Page

## Goal
Extract the `Compare` section from `client/pages/Index.tsx` into a standalone page at route `/compare`, with a proper header and footer, and link to it from the homepage nav.

---

## What Changes

### 1. Extract shared data — `client/data/strokes.ts` (new file)
Move the `Stroke` type and `STROKES` array out of `Index.tsx` into a shared module so both pages can import them without duplication.

### 2. Extract shared layout — `client/components/SiteHeader.tsx` + `client/components/SiteFooter.tsx` (new files)
The `Header` and `Footer` functions are currently defined inline inside `Index.tsx`. Extract them into standalone shared components so both `Index` and the new `Compare` page can use them identically.

- `SiteHeader` gets an updated nav link: **Compare** → `/compare` (instead of the anchor `#compare` that currently appears in the nav)
- `SiteFooter` is unchanged in behavior

### 3. Update `client/pages/Index.tsx`
- Remove the inline `Stroke` type and `STROKES` array; import from `client/data/strokes.ts`
- Remove the inline `Header` and `Footer` functions; import `SiteHeader` / `SiteFooter`
- Remove the inline `Compare` component (it moves to the new page)
- Remove the `<Compare />` call from the page body
- The `#compare` anchor in the nav becomes a `/compare` route link

### 4. Create `client/pages/Compare.tsx` (new file)
A full page component at route `/compare`:
- Renders `<SiteHeader />` and `<SiteFooter />`
- Contains the full `Compare` section UI (the speed-bar chart table), imported data from `client/data/strokes.ts`
- Can optionally also show calorie burn and difficulty columns for a richer comparison (staying close to the existing design)

### 5. Add route in `client/App.tsx`
```tsx
import Compare from "./pages/Compare";
// ...
<Route path="/compare" element={<Compare />} />
```

---

## File Summary

| Action | File |
|--------|------|
| Create | `client/data/strokes.ts` |
| Create | `client/components/SiteHeader.tsx` |
| Create | `client/components/SiteFooter.tsx` |
| Create | `client/pages/Compare.tsx` |
| Modify | `client/pages/Index.tsx` |
| Modify | `client/App.tsx` |

### 6. Add per-stroke reviews data — `client/data/strokes.ts`
Add a `Review` type and a `REVIEWS` record (keyed by stroke id) with 2–3 static reviews per stroke:

```ts
type Review = {
  author: string;
  rating: number; // 1–5
  comment: string;
};

const REVIEWS: Record<string, Review[]> = {
  freestyle: [ /* 2–3 reviews */ ],
  butterfly: [ /* 2–3 reviews */ ],
  // ...
};
```

### 7. Reviews section in `client/pages/Compare.tsx`
Below the speed-bar comparison table, add a **Per-Stroke Reviews** section:
- One card per stroke
- Each card shows the stroke name, emoji, and its 2–3 review tiles
- Each review tile shows: reviewer name, star rating (filled/unfilled ★), and a short comment
- Styling stays consistent with the existing page design (white cards, `shadow-xl`, `rounded-3xl`, Tailwind tokens)

---

## Notes
- No backend changes needed — all data is static.
- The Compare page will have the same visual shell (header/footer) as the homepage.
- The existing `#compare` anchor link in the hero section will become a `/compare` route link.
- No new dependencies required.
