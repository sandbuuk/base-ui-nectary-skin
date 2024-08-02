import { customElement } from "solid-element";
import {
  createComputed,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import html from "solid-js/html";
import pkg from "./package.json";
import { defineCustomElement } from "./utils";

const style = `
:where(*, *::before, *::after) {
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin: 0;
  font: inherit;
}

:host {
  --base-size: 288px; /* 18rem */
  --aspect-ratio: 1 / 2.1;
  --scale: 1;
  inline-size: min(100%, var(--base-size));
  aspect-ratio: var(--aspect-ratio);
  overflow: hidden;
  display: block;
}

section {
  position: relative;
  inline-size: var(--base-size);
  aspect-ratio: var(--aspect-ratio);
  scale: var(--scale);
  transform-origin: top left;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  padding: 12px;
  border: 1px solid var(--sinch-sys-color-border-strong);
  border-radius: 32px;
  background: var(--sinch-sys-color-surface-primary-default);

  & > header {
    position: sticky;
    inset-block-start: 0;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background: var(--sinch-sys-color-surface-primary-default);
    font: var(--sinch-sys-font-body-xxs);

    & > svg {
      inline-size: 48px;
    }
  }

  & > div {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: none;
    border-end-start-radius: 16px;
    border-end-end-radius: 16px;
  }
}
`;

/**
 * Container for channel previews in a phone skeleton.
 * This container uses a custom scaling where the internal elements are scaled to fit the container from a fixed size.
 * Because of the fixed size, absolute units (px) are preferred over relative units (rem, em) for the internal elements.
 *
 * @param props.locale Clock locale.
 * @param props.clock Clock `Intl.DateTimeFormat` options.
 * @param props.children Content to display in the phone container.
 */
const PhonePreviewSkeleton = (
  props: { locale: string; clock: Intl.DateTimeFormatOptions },
  options: { element: any }
) => {
  const host = options.element as HTMLElement;
  const observer = new ResizeObserver(() => {
    const style = getComputedStyle(host);
    const baseSize = parseFloat(style.getPropertyValue("--base-size"));
    const currentSize = host.getBoundingClientRect().width;
    host.style.setProperty("--scale", `${currentSize / baseSize}`);
  });
  onMount(() => {
    const section = host.shadowRoot!.querySelector("section")!;
    observer.observe(host);
    observer.observe(section);
  });
  onCleanup(() => observer.disconnect());

  const fmt = createMemo(() => Intl.DateTimeFormat(props.locale, props.clock));
  const [clock, setClock] = createSignal();
  const interval = setInterval(() => setClock(fmt().format()), 60000);
  createComputed(() => setClock(fmt().format()));
  onCleanup(() => clearInterval(interval));

  return html`
    <style>
      ${style}
    </style>
    <section>
      <header>
        <span>${clock}</span>
        <${StatusSvg} />
      </header>
      <div>
        <slot />
      </div>
    </section>
  `;
};

const StatusSvg = () => html`
  <svg viewBox="0 0 50 12">
    <path
      d="M13.2 2.4h-.7c-.4 0-.7.3-.7.7v6.2c0 .4.3.8.7.8h.7c.4 0 .7-.4.7-.8V3.1c0-.4-.3-.7-.7-.7ZM9.4 4.2h.6c.4 0 .7.3.7.7v4.5c0 .3-.3.7-.7.7h-.6c-.4 0-.7-.4-.7-.7V4.9c0-.4.3-.7.7-.7ZM6.9 6h-.7c-.4 0-.7.3-.7.7v2.7c0 .4.3.7.7.7h.7c.4 0 .7-.3.7-.7V6.7c0-.4-.3-.7-.7-.7ZM3.7 7.3H3c-.3 0-.6.4-.6.7v1.4c0 .4.3.7.6.7h.7c.4 0 .7-.3.7-.7V8c0-.3-.3-.7-.7-.7Zm19.4-3.7c1.7 0 3.3.7 4.5 1.8h.3l.8-.9.1-.1-.1-.2a8 8 0 0 0-11.1 0l-.1.2.1.1.8.9h.3a6.7 6.7 0 0 1 4.4-1.8Zm0 2.8a4 4 0 0 1 2.5 1h.3l.9-.9v-.3a5.4 5.4 0 0 0-7.3 0v.3l.9.9h.3c.7-.6 1.5-1 2.4-1Zm1.8 1.9-.1.2-1.5 1.5-.2.1-.1-.1-1.5-1.5-.1-.2.1-.1c1-.8 2.3-.8 3.3 0l.1.1Z"
    />
    <rect width="12.6" height="5.4" x="33.3" y="3.5" rx=".9" />
    <path fill="#999" d="M48 4.9v2.7c.5-.3.9-.8.9-1.4 0-.6-.4-1.1-.9-1.3Z" />
    <path
      fill="none"
      stroke="#999"
      stroke-width=".7"
      d="M32.3 4.4a2 2 0 0 1 1.9-1.9H45c1.1 0 2 .9 2 1.9V8c0 1.1-.9 1.9-2 1.9H34.2c-1 0-1.9-.8-1.9-1.9V4.4Z"
    />
  </svg>
`;

defineCustomElement(
  "sinch-labs-phone-preview-skeleton",
  customElement(
    `sinch-labs-phone-preview-skeleton-${pkg.version}`,
    { locale: "en-US", clock: { hour: "2-digit", minute: "2-digit" } },
    PhonePreviewSkeleton
  )
);

type Props = Partial<Parameters<typeof PhonePreviewSkeleton>[0]>;
type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>;

declare global {
  interface HTMLElementTagNameMap {
    "sinch-labs-phone-preview-skeleton": ElementProps & HTMLElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "sinch-labs-phone-preview-skeleton": ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>;
    }
  }
}
