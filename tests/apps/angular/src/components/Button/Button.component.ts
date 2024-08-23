import { Component } from "@angular/core";
import "@nectary/components/button";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "button-component",
  templateUrl: "./Button.component.html",
  styles: [":host{ display: contents; }"],
})
export class ButtonComponent {
  type: string | null;
  text: string | null;
  size: string | null;
  isDisabled: boolean;
  isToggled: boolean;
  hasRightIcon: boolean;
  hasIcon: boolean;
  hasSpinner: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    this.type = search.get("type");
    this.text = search.get("text");
    this.size = search.get("size");
    this.isDisabled = search.get("disabled") !== null;
    this.isToggled = search.get("toggled") !== null;
    this.hasRightIcon = search.get("icon-right") !== null;
    this.hasIcon = search.get("icon") !== null;
    this.hasSpinner = search.get("spinner") !== null;
  }

  onClick() {
    window.dispatchEvent(new CustomEvent("sinch-button-click"));
  }

  onFocus() {
    window.dispatchEvent(new CustomEvent("sinch-button-focus"));
  }

  onBlur() {
    window.dispatchEvent(new CustomEvent("sinch-button-blur"));
  }
}
