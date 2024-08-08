import { Component } from "@angular/core";
import "@nectary/components/file-picker";
import "@nectary/components/button";
import "@nectary/assets/icons/fa-arrow-up-from-line";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "file-picker-component",
  templateUrl: "./FilePicker.component.html",
  styles: [":host{ display: contents; }"],
})
export class FilePickerComponent {
  isMultiple: boolean;
  accept: string | null;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    this.isMultiple = search.get("multiple") !== null;
    this.accept = search.get("accept");
  }

  onChange(e: CustomEvent) {
    window.dispatchEvent(
      new CustomEvent("sinch-file-picker-change", { detail: e.detail })
    );
  }
  onInvalid(e: CustomEvent<string>) {
    window.dispatchEvent(
      new CustomEvent("sinch-file-picker-invalid", { detail: e.detail })
    );
  }
}
