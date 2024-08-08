import "@nectary/assets/icons/circle-info";
import "@nectary/assets/icons/triangle-exclamation";
import "@nectary/assets/icons/octagon-exclamation";
import "@nectary/assets/icons/circle-check";
import "../rich-text";
import "../text";
import "../title";
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
} from "../utils";
import templateHTML from "./template.html";
import { typeValues } from "./utils";
import type {
  TSinchInlineAlertElement,
  TSinchInlineAlertReact,
  TSinchInlineAlertType,
} from "./types";

const template = document.createElement("template");

template.innerHTML = templateHTML;

defineCustomElement(
  "sinch-inline-alert",
  class extends NectaryElement {
    #$text: HTMLElement;
    #$caption: HTMLElement;
    #$closeWrapper: HTMLElement;
    #$closeSlot: HTMLSlotElement;
    #$actionWrapper: HTMLElement;
    #$actionSlot: HTMLSlotElement;

    constructor() {
      super();

      const shadowRoot = this.attachShadow();

      shadowRoot.appendChild(template.content.cloneNode(true));

      this.#$text = shadowRoot.querySelector("#text")!;
      this.#$caption = shadowRoot.querySelector("#caption")!;
      this.#$closeWrapper = shadowRoot.querySelector("#close")!;
      this.#$closeSlot = shadowRoot.querySelector('slot[name="close"]')!;
      this.#$actionWrapper = shadowRoot.querySelector("#action")!;
      this.#$actionSlot = shadowRoot.querySelector('slot[name="action"]')!;
    }

    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("aria-atomic", "true");
      this.setAttribute("aria-live", "polite");
      this.#$closeSlot.addEventListener("slotchange", this.#onCloseSlotChange);
      this.#$actionSlot.addEventListener(
        "slotchange",
        this.#onActionSlotChange
      );

      this.#onCloseSlotChange();
      this.#onActionSlotChange();
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.#$closeSlot.removeEventListener(
        "slotchange",
        this.#onCloseSlotChange
      );
      this.#$actionSlot.removeEventListener(
        "slotchange",
        this.#onActionSlotChange
      );
    }

    static get observedAttributes() {
      return ["text", "caption"];
    }

    attributeChangedCallback(
      name: string,
      _: string | null,
      newVal: string | null
    ) {
      switch (name) {
        case "text": {
          updateAttribute(this.#$text, "text", newVal);

          break;
        }

        case "caption": {
          updateAttribute(this.#$caption, "text", newVal);

          break;
        }
      }
    }

    get type(): TSinchInlineAlertType {
      return getLiteralAttribute(this, typeValues, "type");
    }

    set type(value: TSinchInlineAlertType) {
      updateLiteralAttribute(this, typeValues, "type", value);
    }

    get text() {
      return getAttribute(this, "text", "");
    }

    set text(value: string) {
      updateAttribute(this, "text", value);
    }

    get caption() {
      return getAttribute(this, "caption", "");
    }

    set caption(value: string) {
      updateAttribute(this, "caption", value);
    }

    #onCloseSlotChange = () => {
      setClass(
        this.#$closeWrapper,
        "empty",
        this.#$closeSlot.assignedElements().length === 0
      );
    };

    #onActionSlotChange = () => {
      setClass(
        this.#$actionWrapper,
        "empty",
        this.#$actionSlot.assignedElements().length === 0
      );
    };
  }
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "sinch-inline-alert": TSinchInlineAlertReact;
    }
  }

  interface HTMLElementTagNameMap {
    "sinch-inline-alert": TSinchInlineAlertElement;
  }
}
