import { Component, Input } from "@angular/core";
import "@nectary/components/textarea";
import "@nectary/components/button";
import "@nectary/components/tag";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";
import { useComponentSearchParams } from "src/utils";
@Component({
  selector: "textarea-component",
  templateUrl: "./Textarea.component.html",
  styles: [":host{ display: contents; }"],
})
export class TextareaComponent {
  @Input() searchPrefix: string = 'textarea';
  name: string | null = null;
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
    const search = useComponentSearchParams(this.route.snapshot.queryParamMap, this.searchPrefix);

    this.name = search.get("name")
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
