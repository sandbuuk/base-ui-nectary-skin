import { Component } from "@angular/core";
import "@nectary/components/segmented-icon-control";
import "@nectary/components/segmented-icon-control-option";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "segmented-icon-control-component",
  templateUrl: "./SegmentedIconControl.component.html",
  styles: [":host{ display: contents; }"],
})
export class SegmentedIconControlComponent {
  value: string;
  isControlled: boolean;
  isMultiple: boolean;
  isSingleOption: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    this.isControlled = search.get("uncontrolled") === null;
    this.isMultiple = search.get("multiple") !== null;
    this.isSingleOption = search.get("single-option") !== null;
    this.value = search.get("value") ?? "";
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail;
      window.dispatchEvent(
        new CustomEvent("sinch-segmented-icon-control-change", {
          detail: (e as CustomEvent).detail,
        })
      );
    }
  }
}
