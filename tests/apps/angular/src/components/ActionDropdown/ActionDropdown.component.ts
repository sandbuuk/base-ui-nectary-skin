import { Component } from "@angular/core";
import "@nectary/components/action-menu";
import "@nectary/components/action-menu-option";
import "@nectary/components/button";
import "@nectary/components/popover";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";

type TMenuValue = {
  text: string;
  icon: string | null;
  isDisabled?: boolean;
};

@Component({
  selector: "action-dropdown-component",
  templateUrl: "./ActionDropdown.component.html",
  styles: [":host{ display: contents; }"],
})
export class ActionDropdownComponent {
  isOpen = false;
  rows: number | null;
  options: Record<string, TMenuValue> = {
    1: { text: "Option 1 value long long long", icon: "1" },
    2: { text: "Option 2", icon: "1", isDisabled: true },
    3: { text: "Option 3", icon: null },
    4: { text: "Option 4", icon: null },
  };

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    const numVisibleValue = search.get("rows");
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null;
  }

  onClick(value: string) {
    window.dispatchEvent(
      new CustomEvent("sinch-action-dropdown-click", { detail: value })
    );
    this.isOpen = false;
  }

  onOpen() {
    this.isOpen = !this.isOpen;
  }
  onClose() {
    this.isOpen = false;
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent("sinch-action-dropdown-focus"));
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent("sinch-action-dropdown-blur"));
  }
}
