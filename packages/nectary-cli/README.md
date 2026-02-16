# Nectary CLI

Add Nectary compositions (higher-order React components built on `@nectary/components`) directly into your project. This follows the same “copy source into your repo” approach as [Shadcn UI](https://ui.shadcn.com/), so you own the code and can edit it. It is aimed at React 16–18 apps where using these compositions as web components would require awkward serialization of objects/arrays.

## Prerequisites

- Node 18+
- A project with `@nectary/components` installed

## Usage

### List compositions

```bash
npx nectary@latest list
```

Prints each available composition name and its one-line description.

### Add a composition

From your project root:

```bash
npx nectary@latest add <name>
```

Examples:

```bash
npx nectary@latest add select
npx nectary@latest add phone-input
```

Files are written under `src/components/nectary/` by default (see [Configuration](#configuration)). The CLI will also install any npm dependencies required by the composition (e.g. `countries-phone-masks` for `phone-input`).

### Options

- **`--path <path>`** – Override the output directory (default: `src/components/nectary`).
- **`--overwrite`** – Replace existing files. Without this, existing files are skipped.

### Configuration

Optional: create a `nectary.json` file at your project root to set the default components path:

```json
{
  "componentsPath": "src/components/nectary"
}
```

If `nectary.json` is missing, the CLI uses `src/components/nectary`.

## Available compositions

Compositions live in this package under `registry/` and can be customized (e.g. add props) without touching the docs.

| Name | Description | Dependencies |
|------|-------------|--------------|
| `select` | Select with search. Props: `options`, `placeholder`, `searchPlaceholder`, `value`, `onChange`, `style`, `ariaLabel`. | — |
| `phone-input` | Phone input with country code selector. Props: `placeholder`, `value`, `onChange`, `style`, `ariaLabel`. | countries-phone-masks |

## Running locally (development)

From the monorepo root or from `packages/nectary-cli`:

```bash
pnpm --filter nectary build
```

Then from the project where you want to add a composition:

```bash
node /path/to/nectary/packages/nectary-cli/dist/index.js add select
```

Or from `packages/nectary-cli`:

```bash
node dist/index.js add select
```

## Adding a new composition to the registry

1. **Add the composition source** in this package under `registry/<name>/` (e.g. `registry/select/Search.tsx`). You can add whatever props you want; these files are the single source of truth for the CLI and are independent of the docs.
2. **Edit `registry.json`** in this package. Add an item with:
   - `name` – Kebab-case id used in `nectary add <name>`.
   - `description` – Short description.
   - `dependencies` – Array of npm package names (e.g. `"zod"`, `"@hookform/resolvers"`).
   - `files` – Array of `{ "path": "OutputPath/File.tsx", "source": "registry/<name>/File.tsx" }`.  
     `path` is where the file will be written in the user's project (relative to their components path). `source` is relative to **this package root** (e.g. `registry/select/Search.tsx`).
3. **Rebuild the registry**: from `packages/nectary-cli`, run `pnpm run build` (or `pnpm run build:registry` after `tsc`). This reads the manifest and writes `dist/registry/<name>.json`.
4. **Publish** the `nectary` package so users can run `npx nectary@latest add <name>`.
