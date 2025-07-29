# 🎯 TypeScript

This page explains how the Nectary typing system works and provides examples of how you can integrate Nectary types with various frameworks to get type inference for your components.

## Built-in Type Support

Nectary provides out-of-the-box TypeScript support for **VanillaJS** elements and **React** components through global namespace declarations. This means you get full type inference and autocompletion without any additional setup 🚀.

## The NectaryComponentMap

At the heart of Nectary's type system is the `NectaryComponentMap` interface. This global type declaration maps each component to its **props**, **events**, and **style** definitions, making it the single source of truth for all component types:

```ts
declare global {
  interface NectaryComponentMap {
    'sinch-button': {
      props: {
        text?: string,
        disabled?: boolean;
        // ...
      };
      events: {
        '-click'?: (e: CustomEvent<void>) => void,
        // ...
      };
      style?: {
        '--sinch-comp-button-font-size-m-text'?: string,
        // ...
      };
    };
    // ... other components
  }
}
```

This map is the foundation for all type adapters. When creating a custom adapter for your framework, you can use this map to ensure type safety. For example, Nectary internally manages a **VanillaJS** adapter and **React** adapter for you. Here's how the React adapter looks like:

```ts
type NectaryComponentReactByType<T extends object> =
  WebComponentReactBaseProp<NectaryComponentVanillaByType<T>> &
  ReactifyEvents<SafeSelect<T, 'events'>> &
  RemoveReadonly<SafeSelect<T, 'props'>> &
  { style?: Partial<T["style"]> & CSSProperties }
```
And its added to the React JSX namespace like this by Nectary:
```ts
namespace JSX {
  interface IntrinsicElements {
    'sinch-button': NectaryComponentReact<'sinch-button'>,
  }
}
```


## Custom Adapters

While Nectary provides built-in support for **VanillaJS** elements and **React** components, you can create custom TypeScript adapters if you're using a different framework. Here's how to do it for some popular frameworks:

### Vue Templates

For more information on how this works, visit [Vue documentation](https://vuejs.org/guide/extras/web-components#non-vue-web-components-and-typescript):

```ts
import type { StyleValue } from "vue"

type EmitFn<T> = (event: keyof T, ...args: any[]) => void
type EventMap = { [event: string]: Event }

type HTMLAttributes = Omit<Partial<HTMLElement>, 'style'>
type VueEmit<T extends EventMap> = EmitFn<{
  [K in keyof T as `-${string & K}`]: (event: T[K]) => void
}>

type NectaryComponentVue<Component extends { props: any; events: any; style?: any }> = new () => HTMLElement & {
  $props: HTMLAttributes & Component['props'] & { style?: StyleValue & Component['style'] }
  $emit: VueEmit<Component['events']>
}

// Extend Vue's global components
declare module 'vue' {
  type GlobalComponents = {
    [K in keyof NectaryComponentMap]: NectaryComponentVue<NectaryComponentMap[K]>
  }
}
```

## Using types explicitly
* If you ever need to get the type for a specific Nectary component, you can simply use the `HTMLElementTagNameMap` to index a element, e.g. `HTMLElementTagNameMap['sinch-button']`. Or if you're using React, you can do `JSX.IntrinsicElements['sinch-button']`. This works because these types live in the global namespace, making them accessible anywhere in your TypeScript code without needing to import anything.
* Alternatively, you can manually import a specific type in your project like this `import { TSinchButtonElement, TSinchButtonReact } from "@nectary/components/button/types"`. The `types` file also exports the framework-agnostic type (e.g. `TSinchButton`)
