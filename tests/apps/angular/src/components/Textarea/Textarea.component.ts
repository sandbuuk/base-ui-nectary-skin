import { Component } from "@angular/core";
import "@nectary/components/textarea";
import "@nectary/components/button";
import "@nectary/components/tag";
import "@nectary/assets/icons/fa-ellipsis";
import "@nectary/assets/icons/fa-paperclip-vertical";
import "@nectary/assets/icons/fa-face-laugh";
import "@nectary/assets/icons/fa-comment-plus";
import "@nectary/assets/icons/fa-paper-plane-top";
import "@nectary/assets/icons/fa-magnifying-glass";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "textarea-component",
  templateUrl: "./Textarea.component.html",
  styles: [":host{ display: contents; }"],
})
export class TextareaComponent {
  value: string;
  isControlled: boolean;
  isInvalid: boolean;
  placeholderText: string | null;
  isDisabled: boolean;
  isResizable: boolean;
  rows: string | null;
  minrows: string | null;
  hasBottom: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    this.value = search.get("value") ?? "";
    this.isControlled = search.get("uncontrolled") === null;
    this.isInvalid = search.get("invalid") !== null;
    this.placeholderText = search.get("placeholder");
    this.isDisabled = search.get("disabled") != null;
    this.isResizable = search.get("resizable") != null;
    this.rows = search.get("rows");
    this.minrows = search.get("minrows");
    this.hasBottom = search.get("bottom") !== null;
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail;
      window.dispatchEvent(
        new CustomEvent("sinch-textarea-change", {
          detail: (e as CustomEvent).detail,
        })
      );
    }
  }

  onFocus() {
    window.dispatchEvent(new CustomEvent("sinch-textarea-focus"));
  }

  onBlur() {
    window.dispatchEvent(new CustomEvent("sinch-textarea-blur"));
  }
}
