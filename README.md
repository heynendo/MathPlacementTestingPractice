# React Template

React starter template, clone this repo for new web projects.

## Stack

- React 19 with TypeScript
- React Router
- Motion (Framer)
- Tailwind CSS
- ESLint + Prettier

## Setup

```bash
git clone https://github.com/heynendo/react-template.git my-project
cd my-project
npm install
npm run dev
```

## Scripts

| Script            | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start local dev server (available on network via `host: true`) |
| `npm run build`   | Type-check and build for production                            |
| `npm run preview` | Preview the production build locally                           |
| `npm run lint`    | Run ESLint across all files                                    |
| `npm run format`  | Run Prettier across all files                                  |

## More Notes

- Absolute imports are configured via `@/`:

```ts
import Layout from "@/components/Layout";
```

- Environment variables should be prefixed with `VITE_` to be exposed to the client
- Mobile network access is enabled by default via `server: { host: true }` in `vite.config.ts`
