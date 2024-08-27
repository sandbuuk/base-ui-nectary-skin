# Migration

## v2

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

### 💥 remove clear button from `sinch-input`

Clear button has been extracted from the Input to support different patterns, just like it was before:

```diff
export const Input: FC = () => {
  const [state, setState] = useState('')
  const onChange = (e: CustomEvent<string>) => setState(e.detail)
+ const onClear = () => setState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
      on-change={onChange}
-   />
+   >
+     <sinch-icon-button
+       slot="right"
+       aria-label="Clear"
+       on-click={onClear}
+     >
+       <sinch-icon icons-version="2" slot="icon" name="close"/>
+     </sinch-icon-button>
+   </sinch-input>
  )
}
```

### 💥 remove deprecated React handlers

The long deprecated “old” handlers have been finally removed: 

```diff
export const Input: FC = () => {
  const [state, setState] = useState('')
- const onChange = (e: SyntheticEvent<TSinchInputElement, CustomEvent<string>>) => setState(e.nativeEvent.detail)
+ const onChange = (e: CustomEvent<string>) => setState(e.detail)

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
-     onChange={onChange}
+     on-change={onChange}
    />
  )
}
```

See [Why it's on-change instead of onChange handler in React?](https://sinch.gitlab.io/sinch-projects/applications/teams/nectary/components/docs/?version=1.4.x&path=/faq#why-it-s-on-change-instead-of-on-change-handler-in-react) for more details.
