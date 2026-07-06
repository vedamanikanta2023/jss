# React.js Interview Prep — Vedamanikanta Vanga

**Tailored to your resume:** 4 years of experience (PurpleTalk → Kofuku Idea Labs → Sahasya Global/Copart), Next.js, React, Redux, Webpack 4→5 migration + Module Federation, NextAuth/JWT, SSE real-time dashboards, D3.js visualizations. This means interviewers will likely target you as a **mid-to-senior React/Next.js developer** — expect fundamentals to be quick, and the bulk of the interview to probe architecture, performance, and the specific systems on your resume.

This guide has 3 parts:
1. **Foundations → Advanced React/Next.js concepts** (with concise, interview-ready answers)
2. **Resume-specific deep dives** — likely questions on Copart, HYD CC, LPL, and how to answer them using STAR
3. **Mock question bank** — rapid-fire practice, organized by difficulty

---

## PART 1: CONCEPTS — FOUNDATIONS TO ADVANCED

### 1. JavaScript/ES6+ Fundamentals (rapid warm-up round)

**Q: var vs let vs const?**
`var` is function-scoped and hoisted with `undefined`; `let`/`const` are block-scoped and live in the "temporal dead zone" until initialized. `const` prevents reassignment (not deep immutability — objects/arrays can still mutate internally).

**Q: What is a closure, and where have you used one in React?**
A closure is a function that retains access to its lexical scope even after the outer function returns. In React, every hook relies on closures — e.g., a `useEffect` callback "closes over" the props/state values from the render it was created in. This is *why* stale closures happen (see Q in Hooks section).

**Q: Explain `this` in arrow functions vs regular functions.**
Arrow functions don't have their own `this` — they inherit it from the enclosing lexical scope. This is why class components historically needed `.bind(this)` in constructors, or arrow-function class properties, for event handlers.

**Q: Promises vs async/await vs callbacks?**
Callbacks → callback hell. Promises → `.then()` chaining, still can nest. `async/await` → syntactic sugar over promises, reads synchronously, easiest to handle errors with `try/catch`. You'd use this daily when calling REST APIs from `useEffect` or Next.js `getServerSideProps`/route handlers.

**Q: Debounce vs throttle — where would you use each?**
Debounce delays execution until a pause in events (e.g., search-as-you-type filters — like the product search filters you built at Copart). Throttle limits execution to once per interval (e.g., scroll/resize handlers, infinite scroll on a product listing page).

---

### 2. React Core

**Q: What is the Virtual DOM and why does it help performance?**
React keeps an in-memory tree representation of the UI. On state change, it builds a new tree, diffs it against the previous one (reconciliation), and computes the minimal set of real DOM mutations. This avoids expensive layout/paint operations on every change. Note: the VDOM isn't "always faster than the DOM" — it's about *batching and minimizing* direct DOM writes, which are the actual bottleneck.

**Q: Reconciliation and keys — why do keys matter, and why is index-as-key dangerous?**
React uses keys to match elements between renders. Without stable keys, or with index-as-key on a reorderable list, React can misattribute state/DOM nodes to the wrong item — e.g., an input's typed value "jumping" to a different row after a list reorder. On something like your product listing/search filters, item IDs (not index) should always be the key.

**Q: Controlled vs uncontrolled components?**
Controlled: form value lives in React state, updated via `onChange` — single source of truth, easy validation. Uncontrolled: value lives in the DOM, accessed via `ref` — less re-rendering, useful for simple forms or integrating non-React widgets. Interactive forms (like the Garage feature's vehicle-detail form) are usually controlled for validation.

**Q: What are React Fragments and why use them?**
`<>...</>` lets you group elements without adding an extra DOM node — avoids "div soup" and keeps CSS grid/flex layouts from breaking due to unexpected wrapper divs.

**Q: Class components vs function components — is one "better"?**
Function components + hooks are now the standard (simpler, better logic reuse via custom hooks, no `this` binding issues). Class components still exist for `componentDidCatch` (error boundaries) since there's no hook equivalent yet.

---

### 3. Hooks — Deep Dive (this is where interviews get serious)

**Q: useState vs useReducer — when do you choose one over the other?**
`useState` for simple, independent state values. `useReducer` when the next state depends on the previous state in complex ways, or multiple sub-values update together (e.g., a multi-step form or a dashboard with filters + sort + pagination all interacting) — it centralizes the update logic and is easier to test.

**Q: Explain the useEffect dependency array — and the "stale closure" bug.**
The effect re-runs when any dependency changes. If you omit a dependency that's used inside the effect, the effect "closes over" the old value — a classic bug in interval/subscription code (e.g., an SSE listener that references a stale piece of state). Fix: include all dependencies, use the functional update form `setState(prev => ...)`, or use `useRef` for values that shouldn't trigger re-subscription.

**Q: useMemo vs useCallback — concretely, what's the difference?**
`useMemo(fn, deps)` memoizes a *computed value* (e.g., an expensive filtered/sorted product list). `useCallback(fn, deps)` memoizes a *function reference* itself — mainly useful so that a memoized child component (`React.memo`) doesn't re-render just because a new function instance was passed as a prop.

**Q: When does memoization actually help vs. add overhead?**
Memoization has a cost (storing previous deps + value, comparing on every render). It helps when: the computation is expensive, or the memoized value/function is passed to a `React.memo`-wrapped child to prevent unnecessary re-renders. It does *not* help for cheap computations — premature memoization can make code harder to read for no measurable gain.

**Q: What's the Rules of Hooks and why do they exist?**
Only call hooks at the top level (not in loops/conditions/nested functions), and only from React functions. React tracks hooks by *call order* per render (a linked list internally) — conditional hooks would shift that order and corrupt state between renders.

**Q: Write a custom hook you'd realistically use on a dashboard.**
```js
function useSSE(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const es = new EventSource(url);
    es.onmessage = (e) => setData(JSON.parse(e.data));
    es.onerror = () => es.close();
    return () => es.close(); // cleanup — critical to avoid leaked connections
  }, [url]);
  return data;
}
```
This mirrors what you likely built for the HYD CC real-time investigation dashboards.

**Q: useRef — beyond DOM refs, what else is it used for?**
A mutable "box" that persists across renders *without* triggering a re-render when changed. Common uses: storing an interval/timeout ID, tracking previous prop values, holding a WebSocket/EventSource instance, or a "isMounted" flag to guard against setting state after unmount.

---

### 4. State Management — Context API vs Redux (directly on your resume)

**Q: When would you reach for Context API vs Redux?**
Context API: low-frequency updates, small-to-medium apps, avoiding prop drilling for things like theme/auth/locale. Redux: complex, frequently-updated, cross-cutting state (cart, filters, multi-step workflows) where you need time-travel debugging, middleware (thunk/saga for async), and predictable, testable state transitions across a large team. A known pitfall: Context triggers a re-render of *every* consumer on any value change (no built-in selector optimization) — this is a common reason large apps still use Redux/Zustand over plain Context.

**Q: How do you prevent unnecessary re-renders with Context?**
Split contexts by concern (don't put unrelated state in one giant provider), memoize the provider's `value` object with `useMemo`, or use a selector-based library (Redux with `useSelector`, Zustand, Jotai) instead of Context for high-frequency state.

**Q: Redux data flow — walk through it.**
UI dispatches an action → reducer (pure function) computes new state from `(prevState, action)` → store updates → subscribed components re-render via `useSelector`. Async logic (API calls) lives in middleware — `redux-thunk` (simple) or `redux-saga`/RTK Query (complex flows, retries, caching).

**Q: Redux Toolkit (RTK) vs "classic" Redux — why does it matter for interviews?**
RTK is now the recommended standard: `createSlice` removes boilerplate (action types/creators auto-generated), uses Immer internally so you can "mutate" state in reducers safely, and RTK Query handles data-fetching/caching declaratively. If your resume says Redux, be ready to clarify whether you used RTK or legacy Redux — interviewers will probe this.

---

### 5. Routing

**Q: React Router — dynamic routes, nested routes, protected routes.**
```jsx
<Route path="/product/:id" element={<ProductDetail />} />
```
`useParams()` reads `:id`. Nested routes use `<Outlet />` for shared layouts (e.g., a seller dashboard shell with nested sub-pages). Protected routes wrap the element in a component that checks auth state and redirects via `<Navigate />` if unauthenticated.

**Q: Next.js file-based routing vs React Router — what changes architecturally?**
File-based routing (App Router or Pages Router) ties URL structure directly to the file system — no manual route config. Dynamic segments: `[id].js` or `app/product/[id]/page.js`. This is what you used for product pages, seller listings, and vehicle-specific filtering at Copart. Trade-off: less flexible for highly dynamic route generation at runtime, but far less boilerplate and pairs naturally with SSR/SSG per-route.

---

### 6. Next.js — Advanced (heavy resume focus: Copart migration, SEO, SSR)

**Q: SSR vs SSG vs ISR vs CSR — explain the differences and when to use each.**
- **CSR** (plain React): blank HTML shell, JS renders everything client-side. Bad for SEO/first paint.
- **SSR** (`getServerSideProps` / server components): HTML generated per-request on the server — good for frequently-changing, personalized data (e.g., seller dashboards, live inventory).
- **SSG** (`getStaticProps`): HTML generated at *build time* — fastest, best for content that doesn't change per-request (marketing pages, category pages).
- **ISR** (Incremental Static Regeneration): static pages that regenerate in the background after a `revalidate` window — good middle ground for product listing pages that change occasionally but don't need per-request freshness.

**Q: You migrated a CRA (React) app to Next.js at Copart — walk me through why and how.**
Frame this as: (1) *why* — SEO was impossible with pure CSR since crawlers saw an empty shell; page load was slow because everything, including data fetching, happened after JS hydration. (2) *how* — moved routing to file-based routes, converted data-fetching to `getServerSideProps`/server components so HTML arrives pre-populated, added dynamic `<Head>` metadata per product page, and used `next/image` and `next/link` for automatic optimization. (3) *result* — faster Time-to-First-Byte/LCP, indexable product pages, smaller client JS via automatic code-splitting per route.

**Q: What is hydration, and what's a "hydration mismatch" error?**
Hydration is React attaching event listeners/state to server-rendered HTML on the client instead of re-rendering from scratch. A mismatch happens when server-rendered markup differs from the client's first render (e.g., using `window`/`Date.now()`/`Math.random()` during SSR, or browser-extension-injected DOM). Fix: guard browser-only code with `useEffect` or `typeof window !== 'undefined'`, or use `next/dynamic` with `ssr: false`.

**Q: How does Next.js code-splitting work, and how did you use dynamic imports?**
Next.js automatically splits by route/page. For further splitting, `next/dynamic(() => import('./Component'), { ssr: false, loading: () => <Spinner/> })` lazy-loads heavy components (e.g., a D3.js chart or a modal) only when needed — directly relevant to the "code splitting, dynamic imports, and lazy loading" you list for the Copart project.

**Q: API routes / route handlers in Next.js — when do you use them vs a separate backend?**
Good for lightweight BFF (backend-for-frontend) needs: proxying a third-party API to hide secrets, aggregating multiple backend calls into one response for the client, or auth callbacks (NextAuth uses this pattern). Not a replacement for a real backend service handling business logic/data at scale.

---

### 7. Performance Optimization (senior-level differentiator)

**Q: Given a slow-rendering dashboard with many widgets, how do you diagnose and fix it?**
1. Profile first — React DevTools Profiler to find which components re-render and why (flame graph, "why did this render" flags).
2. Common fixes: `React.memo` on pure presentational components, `useMemo`/`useCallback` for expensive computations/stable references, windowing/virtualization (`react-window`) for long lists, moving state down (colocate state near where it's used instead of a shared parent that re-renders everything), splitting contexts.
3. For data-heavy visualizations (D3.js/Recharts) — avoid re-computing/re-binding D3 selections on every React render; sync D3's imperative DOM manipulation with React's render cycle carefully (usually via `useRef` + `useEffect`, not letting D3 and React both own the same DOM nodes).

**Q: What's code splitting and how does it reduce bundle size?**
Splitting the JS bundle into smaller chunks loaded on demand (per route, or `React.lazy(() => import(...))` + `<Suspense>`) instead of one large bundle upfront. Reduces initial load time — directly what you did during the Webpack 4→5 migration and Next.js dynamic imports.

**Q: Explain Webpack Module Federation — why did you migrate to it, and what problem does it solve?**
Module Federation (Webpack 5) lets independently-built and deployed apps share code at runtime — e.g., a shared component library or a micro-frontend consuming another app's exposed module without bundling it at build time. This decouples deployment (teams ship independently) and avoids duplicate dependency bundling. Be ready to describe: what you exposed/consumed, how you handled shared dependency versioning (`shared: { react: { singleton: true } }` to avoid duplicate React instances — a very common interview follow-up), and what broke during the migration (usually: version mismatches, or shared singleton conflicts).

**Q: Webpack 4 → 5 migration — what actually changes under the hood?**
Node.js polyfills removed by default (must add explicitly if used), persistent caching improvements (faster rebuilds), tree-shaking improvements for nested modules, and Module Federation itself is new in v5. Expect a question like "what broke during your migration" — have a real answer ready (polyfill removal is the most common gotcha).

**Q: How do you optimize images/assets in a React/Next.js app?**
`next/image` (automatic resizing, lazy loading, modern formats like WebP/AVIF, prevents layout shift via width/height). For non-Next.js apps: manual lazy loading (`loading="lazy"`), responsive `srcset`, and a CDN.

---

### 8. Authentication (NextAuth/JWT — on your resume)

**Q: Walk through how NextAuth.js session management works with the Credentials Provider.**
Credentials Provider lets you authenticate against your own backend (username/password) instead of OAuth. On successful `authorize()`, NextAuth issues a **JWT** (stored in an httpOnly cookie by default) rather than a database session — stateless, scales without a session store. The `jwt` callback lets you attach custom claims (roles, user ID); the `session` callback exposes that JWT data to the client via `useSession()`. Role-based access (buyer vs seller flows at Copart) would be implemented by checking a `role` claim in middleware or per-page checks.

**Q: JWT vs session cookies — trade-offs?**
JWT: stateless, scales horizontally without a shared session store, but harder to revoke before expiry (need a blocklist) and can grow large if you stuff in too many claims. Session cookies: server holds the source of truth (easy revocation), but needs a shared store (Redis) in a multi-server deployment.

**Q: How do you protect routes / implement role-based access in Next.js?**
Next.js middleware (`middleware.js`) checks the JWT/session before the request even reaches the page, redirecting unauthenticated or wrong-role users early — more efficient than checking auth inside each page component after render.

---

### 9. Real-Time Data (SSE — on your resume)

**Q: SSE vs WebSockets — why did you choose SSE for the investigation dashboards?**
SSE is unidirectional (server → client), built on plain HTTP, auto-reconnects natively via `EventSource`, and is simpler to implement/scale than WebSockets when the client only needs to *receive* live updates (not send data back over the same channel) — a good fit for dashboards streaming case/transaction updates. WebSockets are full-duplex and better suited for chat-like, bidirectional needs. Trade-off: SSE is HTTP/1.1-limited to ~6 concurrent connections per browser/domain (mitigated in HTTP/2), and it's text-only (no binary).

**Q: How do you handle SSE reconnection and cleanup in React to avoid memory leaks?**
Always close the `EventSource` in the `useEffect` cleanup function (`return () => es.close()`), and guard state updates after unmount. `EventSource` auto-retries on drop, but you should still handle `onerror` explicitly for UX (e.g., a "reconnecting..." indicator).

---

### 10. Data Visualization (D3.js — on your resume)

**Q: How do you integrate D3.js with React without them fighting over the DOM?**
Two approaches: (1) Let D3 handle *only* calculations (scales, layouts, force simulation) and let React render the actual SVG elements declaratively from that computed data — safest, most "React-idiomatic." (2) Give D3 a ref to an empty container and let it fully own that subtree imperatively (common for complex force-directed graphs like relationship visualizations between bank accounts/transactions) — faster to build but you lose React's diffing benefits inside that subtree, so cleanup (`d3.select(ref).selectAll('*').remove()`) in `useEffect`'s cleanup is essential to avoid duplicated nodes on re-render.

**Q: For the bank-account/transaction relationship graphs at HYD CC — how would you handle performance with hundreds of nodes?**
Force-directed graphs get expensive fast. Approaches: throttle the simulation's `tick` re-renders, use canvas instead of SVG once node count is high (SVG has per-element DOM overhead; canvas is a single bitmap), cluster/aggregate nodes and let users drill in, and memoize/avoid recomputation of layout unless the underlying data actually changed.

---

### 11. TypeScript with React (on your resume)

**Q: How do you type component props, and why prefer `interface` or `type`?**
```tsx
interface ProductCardProps {
  id: string;
  price: number;
  onAddToCart: (id: string) => void;
  children?: React.ReactNode;
}
const ProductCard: React.FC<ProductCardProps> = ({ id, price, onAddToCart }) => { ... }
```
`interface` vs `type` is largely stylistic now (interfaces are extendable/mergeable, types are more flexible for unions) — many teams standardize on one for consistency.

**Q: How do you type `useState` and `useReducer` for non-obvious cases?**
```ts
const [user, setUser] = useState<User | null>(null); // explicit generic when initial value doesn't convey the full type
```
For `useReducer`, type the action as a discriminated union (`{ type: 'ADD'; payload: Item } | { type: 'REMOVE'; id: string }`) so the reducer's `switch` gets exhaustive type-checking.

---

### 12. Testing (ecosystem — be ready even if resume is light here)

**Q: What would you test in a component like your Garage/vehicle-compatibility feature, and with what tools?**
Jest + React Testing Library, testing *behavior* not implementation: render the form, simulate user input (`userEvent.type`), assert the compatibility result renders correctly for valid/invalid vehicle+part combinations, and mock the API layer (MSW or `jest.mock`) rather than hitting real endpoints.

---

## PART 2: RESUME-SPECIFIC DEEP DIVES — BE READY TO TELL THESE AS STORIES

Interviewers love asking "walk me through a project" — prep these using STAR (Situation, Task, Action, Result). Draft answers below; personalize with real numbers/details where you can.

### A. Copart — CRA → Next.js Migration
- **Likely questions:** "Why migrate to Next.js specifically?" / "What was hardest about the migration?" / "How did you measure the SEO/performance improvement?"
- **Prep:** Have a concrete before/after (even approximate) — e.g., LCP or bundle size improvement, or "product pages became crawlable/indexable which they weren't before." If you don't have hard metrics, be honest and describe the *mechanism* (SSR delivering populated HTML vs blank CSR shell) — interviewers respect technical clarity over vague numbers.

### B. Garage Feature (vehicle compatibility checker)
- **Likely questions:** "How did you design the compatibility-check logic/UI?" / "How would you scale this if the parts catalog had millions of SKUs?"
- **Prep:** Talk through the UX flow (buyer enters vehicle → system filters compatible parts), the API integration for compatibility lookups, and be ready for a follow-up on debouncing/caching if the lookup is expensive, or pagination/virtualization if results are large.

### C. Webpack 4 → 5 + Module Federation (LPL Project)
- **Likely questions:** "What broke during the migration?" / "How do multiple micro-frontends avoid shipping duplicate React?" / "How did you measure the build/bundle improvement?"
- **Prep:** This is your strongest differentiator — most React devs never touch Module Federation. Be ready with specifics: what modules were federated/shared, how `shared: { react: { singleton: true, requiredVersion: ... } }` prevented duplicate React copies, and what the caching/build-time improvement looked like.

### D. Duplicate Patient Profile Merge Logic (LPL Project)
- **Likely questions:** "How did you detect duplicates?" / "What if two 'duplicate' profiles had conflicting data?"
- **Prep:** Explain the matching heuristic used (e.g., name + DOB + partial ID matching), how conflicts were resolved (manual review UI vs automatic precedence rules), and how you avoided false-positive merges — a great chance to show product judgment, not just code.

### E. HYD CC — Real-Time Investigation Dashboard (SSE + D3.js + NextAuth)
- **Likely questions:** "Why SSE over polling or WebSockets?" / "How did you keep the D3 graph performant with live updates?" / "How did you secure case documents in R2 storage?"
- **Prep:** Tie together: SSE for live case/transaction updates → D3 force graph to visualize relationships → auth (NextAuth/JWT) gating access to sensitive investigation data → R2 for scalable document storage instead of local server storage (explain *why* that migration mattered: server disk limits, scalability, and separation of concerns).

---

## PART 3: MOCK QUESTION BANK (practice out loud, 60–90 seconds per answer)

### Foundational (should be instant recall)
1. What happens when you call `setState` — is it synchronous?
2. What's the difference between `React.memo` and `useMemo`?
3. What are React's synthetic events, and why do they exist?
4. Explain the component lifecycle in terms of hooks (mount/update/unmount equivalents).
5. What's prop drilling and two ways to avoid it?

### Intermediate
6. How would you implement infinite scroll for a product listing page?
7. Explain error boundaries — why can't they be function components (yet)?
8. What's the difference between `useLayoutEffect` and `useEffect`?
9. How do you share logic between components without prop drilling or HOCs? (custom hooks)
10. What is React's Strict Mode actually checking for in development?

### Advanced / Senior
11. Design the state management approach for a seller dashboard with product listing, filters, cart, and real-time order updates — Redux, Context, or something else? Justify it.
12. How would you implement optimistic UI updates for adding a product to a seller's inventory, and how do you roll back on failure?
13. Walk through how you'd debug a memory leak in a dashboard that keeps SSE connections open.
14. How do React Server Components differ from traditional SSR, and would you use them in a Next.js app you're maintaining today?
15. How would you architect a micro-frontend setup for a marketplace with independently-deployed buyer and seller apps? (tie to your Module Federation experience)
16. Given a slow list of 10,000 rows, what are three different techniques to fix it, and what are the trade-offs of each?
17. How do you decide what state belongs in the URL (query params) vs component state vs global store?

### System-Design-Style (expect at least one for a senior role)
18. Design the frontend architecture for the Copart parts marketplace from scratch — routing, data-fetching strategy per page type, state management, and how buyer/seller roles diverge.
19. How would you design a caching strategy across SSR pages, client-side data fetching, and API responses to keep a product catalog fast and fresh?

---

## Quick Self-Check Before the Interview

- [ ] Can you explain the Copart Next.js migration in under 2 minutes, with a clear "why"?
- [ ] Can you explain Module Federation to someone who's never heard of it?
- [ ] Do you know whether you used RTK or legacy Redux, and can justify the choice?
- [ ] Can you sketch (verbally) how NextAuth's JWT flow works end-to-end?
- [ ] Can you explain SSE vs WebSockets confidently, with a real trade-off?
- [ ] Do you have one concrete performance number (bundle size, load time, build time) from any project, even approximate?

Good luck — your resume already has genuinely senior-level material (Module Federation, SSR migration, real-time dashboards). The main risk is under-selling these in generic terms instead of walking through the *why* behind each decision — lean into that.
