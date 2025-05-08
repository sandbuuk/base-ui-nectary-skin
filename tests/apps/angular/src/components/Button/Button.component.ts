import { Component, Input, OnInit } from "@angular/core";
import "@nectary/components/button";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";
import { useComponentSearchParams } from "src/utils";
@Component({
  selector: "button-component",
  templateUrl: "./Button.component.html",
  styles: [":host{ display: contents; }"],
})
export class ButtonComponent implements OnInit {
  @Input() searchPrefix: string = "button";
  type: string | null = null;
  formType: string | null = null;
  text: string | null = null;
  size: string | null = null;
  isDisabled: boolean = false;
  isToggled: boolean = false;
  hasRightIcon: boolean = false;
  hasIcon: boolean = false;
  hasSpinner: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const search = useComponentSearchParams(this.route.snapshot.queryParamMap, this.searchPrefix);

    this.type = search.get("type");
    this.formType = search.get("form-type");
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
