import { Component, Input, OnInit } from "@angular/core";
import "@nectary/components/select-menu";
import "@nectary/components/select-menu-option";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";
import { useComponentSearchParams } from "src/utils";
const optionsLong: Record<string, TMenuValue> = {
  1: { text: "Option 1 value long long long", icon: "1" },
  2: { text: "Option 2", icon: "1", isDisabled: true },
  3: { text: "Option 3", icon: null },
  4: { text: "Option 4", icon: null },
  5: { text: "Option 1 value long long long", icon: "1" },
  6: { text: "Option 2", icon: "1", isDisabled: true },
  7: { text: "Option 3", icon: null },
  8: { text: "Option 4", icon: null },
};

const optionsShort: Record<string, TMenuValue> = {
  1: { text: "Option 1 value long long long", icon: "1" },
  2: { text: "Option 2", icon: "1", isDisabled: true },
  3: { text: "Option 3", icon: null },
  4: { text: "Option 4", icon: null },
};

const sectionedOptions: Record<string, TMenuValue[]> = {
  'Section 1': [{ text: 'Option 1 value long long long', icon: '1' }, { text: 'Option 2', icon: '1', isDisabled: true }],
  'Section 2': [{ text: 'Option 3', icon: null }],
  'Section 3': [{ text: 'Option 4', icon: null }, { text: 'Option 5', icon: '1' }],
  'Section 4': [{ text: 'Option 6', icon: '1', isDisabled: true }, { text: 'Option 7', icon: null }],
}

type TMenuValue = {
  text: string;
  icon: string | null;
  isDisabled?: boolean;
};

@Component({
  selector: "select-menu-component",
  templateUrl: "./SelectMenu.component.html",
  styles: [":host{ display: contents; }"],
})
export class SelectMenuComponent implements OnInit {
  @Input() searchPrefix: string = 'select-menu';
  name: string | null = null;
  value: string | null = null;
  rows: number | null = null;
  isMultiple: boolean = false;
  withSection: boolean = false;
  options: Record<string, TMenuValue> = {};
  sectionedOptions: Record<string, TMenuValue[]> = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const search = useComponentSearchParams(this.route.snapshot.queryParamMap, this.searchPrefix);
    this.name = search.get("name")
    this.value = search.get("value") ?? "";

    const numVisibleValue = search.get("rows");
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null;
    this.isMultiple = search.get("multiple") !== null;

    this.withSection = search.get("section") === "true";

    this.options = search.get("example") === "lots" ? optionsLong : optionsShort;
    this.sectionedOptions = sectionedOptions
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail;

    window.dispatchEvent(
      new CustomEvent("sinch-select-menu-change", {
        detail: (e as CustomEvent).detail,
      })
    );
    this.value = value;
  }
}
