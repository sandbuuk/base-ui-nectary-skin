# Migration

## v1 → v2

### 💥 extract theme into `@sinch-engage/nectary-theme-base` package

Theme has been extracted into its own package to make Nectary “white-labeled”:

```diff
-import '@sinch-engage/nectary/theme'
+import '@sinch-engage/nectary-theme-base'
```

Documentation on how to make a custom or extend existing theme will be available on our documentation website.

### 💥 extract logo components to `@sinch-engage/assets` package

```diff
-import '@sinch-engage/nectary/logo/sinch-icon-wordmark'
+import '@sinch-engage/nectary-assets/logo/sinch-icon-wordmark'
```

### 💥 extract `sinch-color-menu-option` component

```diff
import '@sinch-engage/nectary/color-menu'
+import '@sinch-engage/nectary/color-menu-option'
```

```diff
<sinch-color-menu
  value={value}
- colors="red,green,blue"
  aria-label="Color menu"
  on-change={onChange}
-/>
+>
+  <sinch-color-menu-option value="red"/>
+  <sinch-color-menu-option value="green"/>
+  <sinch-color-menu-option value="blue"/>
+</sinch-color-menu>
```

### 💥 remove `inverted` attribute from `sinch-tooltip`

```diff
<sinch-tooltip
  orientation="top"
  text="Tooltip"
- inverted
>
```

### 💥 remove `color` attribute from `sinch-badge`

```diff
<sinch-badge
  text="9"
- color="red"
  size="l"
  mode="circle"
>
```