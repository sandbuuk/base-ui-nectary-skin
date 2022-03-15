# Quick Starts

This folder is where we add new `Quick Starts`, from now on we will call them `QS`. One folder for each `QS`.

Each `QS` consists of
* a `QS Card` to present on the `QS`´s home page
* and a `QS Page` that the `QS Card` will link to.

When having created a new `QS`, to have it appear on the home page you add it to the `quick-start-list.ts` file. Here is an explanation of that list:

```ts
export const quickStartList: Record<string, QuickStart> = {
  'quick-leads-converter': quickLeadsConverter,
  // ^^^ This is the path that will be used in the URI for this QS.
  //                       ^^^ This is the `QuickStart`.
  //                          `QuickStartCard` and `QuickStartPage`.
}
```

Linking between pages and steps needs to be done with `relative` links. An example of why this is important is described below.

The stand alone version of the `QS` homepage is mounted at the root (`/`). When run inside the shell application `QS` is mounted at `/quickstarts`. To make sure links work in both of these conditions they always have to link relative to the page they are on. If the user for example is on `/quickstarts/quick-leads-converter/step-1`, going forward to step-2 should have a link like `"./step-2"`. This will result in the browser going to `/quickstarts/quick-leads-converter/step-2`. Linking to this page with an absolute path would break either the stand alone version or the shell mounted version. How would the absolute link even look like? `/quickstarts/quick-leads-converter/step-2` or `/quick-leads-converter/step-2`?

This folder also has two components that are used to display and handle the routing for all the `QS` across the page.
* `QuickStartCards.tsx` renders all the Cards to and is used on the Home page.
* `QuickStartsPages.tsx` renders the currently addressed `QS Page`. Which one is rendered is dependent on the current route.

Components, files, metadata and other stuff relating to only a specific `QS` should be contained within its `QS` folder. Reusable components and pages should be added in `src/components` and `src/pages`.

We have typings for `QS Pages` and `QS Cards` in the `types.d.ts` file in this folder. These can potentially be extended in the future if we need to. Currently they are quite minimal.

`QS Pages` must be loaded lazily. So the exported `QuickStart` object should contain a `QuickStartCard` that is not lazily loaded. And a `QuickStartPage` that is lazily loaded. For an example of this see below:

```ts
import { lazy } from 'react'
import { QuickLeadsConverterCard } from './QuickLeadsConverterCard'

export const quickLeadsConverter = {
  card: QuickLeadsConverterCard,
  page: lazy(() => import('./QuickLeadsConverterPage')
    .then(({ QuickLeadsConverterPage }) => ({ default: QuickLeadsConverterPage }))),
}
```

The `QS Page` is then rendered within a `React.Suspense` component to make sure to wait for its load. This way, we are not bundling and loading all the `QS Pages` when the user visits the `QS` home page. We can decide when the `QS Page` is loaded dynamically instead. A good time is probably when the user clicks the card and is shown the Modal.