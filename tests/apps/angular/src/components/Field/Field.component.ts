import { Component } from "@angular/core";
import "@nectary/components/input";
import "@nectary/components/help-tooltip";
import "@nectary/components/tag";
import "@nectary/assets/icons/fa-magnifying-glass";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "field-component",
  templateUrl: "./Field.component.html",
  styles: [":host{ display: contents; }"],
})
export class FieldComponent {
  value: string;
  labelText: string | null;
  optionalText: string | null;
  additionalText: string | null;
  invalidText: string | null;
  placeholderText: string | null;
  tooltipText: string | null;
  isDisabled: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;
    this.value = search.get("value") ?? "";
    this.labelText = search.get("label");
    this.optionalText = search.get("optional");
    this.additionalText = search.get("additional");
    this.invalidText = search.get("invalid");
    this.placeholderText = search.get("placeholder");
    this.tooltipText = search.get("tooltip");
    this.isDisabled = search.get("disabled") != null;
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail;
    window.dispatchEvent(
      new CustomEvent("sinch-input-change", {
        detail: (e as CustomEvent).detail,
      })
    );
  }
}
