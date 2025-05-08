import { Component, Input, OnInit } from "@angular/core";
import "@nectary/components/input";
import "@nectary/components/select-button";
import "@nectary/components/tag";
import "@nectary/components/chip";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";
import { useComponentSearchParams } from "src/utils";

@Component({
  selector: "input-component",
  templateUrl: "./Input.component.html",
  styles: [":host{ display: contents; }"],
})
export class InputComponent implements OnInit {
  @Input() searchPrefix: string = 'input';
  name: string | null = null;
  value: string | null = null;
  isControlled: boolean = false;
  type: string | null = null;
  size: string | null = null;
  isInvalid: boolean = false;
  placeholderText: string | null = null;
  mask: string | null = null;
  tooltipText: string | null = null;
  isDisabled: boolean = false;
  hasLeft: boolean = false;
  hasRight: boolean = false;
  hasIcon: boolean = false;
  hasCopy: boolean = false;
  hasCut: boolean = false;
  hasPaste: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const search = useComponentSearchParams(this.route.snapshot.queryParamMap, this.searchPrefix);
    this.name = search.get("name")
    this.value = search.get("value") ?? "";
    this.isControlled = search.get("uncontrolled") === null;
    this.type = search.get("type");
    this.size = search.get("size");
    this.isInvalid = search.get("invalid") !== null;
    this.placeholderText = search.get("placeholder");
    this.mask = search.get("mask");
    this.tooltipText = search.get("tooltip");
    this.isDisabled = search.get("disabled") != null;
    this.hasRight = search.get("right") != null;
    this.hasLeft = search.get("left") != null;
    this.hasIcon = search.get("icon") != null;
    this.hasCopy = search.get("copy") != null;
    this.hasCut = search.get("cut") != null;
    this.hasPaste = search.get("paste") != null;
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail;
      window.dispatchEvent(
        new CustomEvent("sinch-input-change", {
          detail: (e as CustomEvent).detail,
        })
      );
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent("sinch-input-focus"));
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent("sinch-input-blur"));
  }
  onCopy(e: Event) {
    if (!this.hasCopy) return;

    const { value, replaceWith } = (e as CustomEvent).detail;

    replaceWith("REPLACED");

    window.dispatchEvent(
      new CustomEvent("sinch-input-copy", { detail: value })
    );
  }
  onCut(e: Event) {
    if (!this.hasCut) return;

    const { value, replaceWith } = (e as CustomEvent).detail;

    replaceWith("REPLACED");

    window.dispatchEvent(new CustomEvent("sinch-input-cut", { detail: value }));
  }
  onPaste(e: Event) {
    if (!this.hasPaste) return;

    const { value, replaceWith } = (e as CustomEvent).detail;

    replaceWith("REPLACED");

    window.dispatchEvent(
      new CustomEvent("sinch-input-paste", { detail: value })
    );
  }
}
