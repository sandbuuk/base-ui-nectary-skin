import { Component } from "@angular/core";
import "@nectary/components/tile-control";
import "@nectary/components/tile-control-option";
import "@nectary/components/icon";
import "@nectary/assets/icons-branded/contact";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "tile-control-component",
  templateUrl: "./TileControl.component.html",
  styles: [":host{ display: contents; }"],
})
export class TileControlComponent {
  value: string;
  isControlled: boolean;
  isSingleOption: boolean;
  isSmall: boolean;
  isMultiple: boolean;
  numCols: number;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    this.isControlled = search.get("uncontrolled") === null;
    this.isSingleOption = search.get("single") !== null;
    this.isSmall = search.get("small") !== null;
    this.isMultiple = search.get("multiple") !== null;
    this.value = search.get("value") ?? "";

    const numCols = search.get("cols");

    this.numCols = numCols !== null ? parseInt(numCols) : 1;
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail;
      window.dispatchEvent(
        new CustomEvent("sinch-tile-control-change", {
          detail: (e as CustomEvent).detail,
        })
      );
    }
  }

  onFocus() {
    window.dispatchEvent(new CustomEvent("sinch-tile-control-focus"));
  }

  onBlur() {
    window.dispatchEvent(new CustomEvent("sinch-tile-control-blur"));
  }
}
