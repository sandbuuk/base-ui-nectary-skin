import { Component } from "@angular/core";
import "@nectary/components/file-status";
import "@nectary/components/text";
import "@nectary/components/progress";
import "@nectary/assets/icons/fa-xmark";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "file-status-component",
  templateUrl: "./FileStatus.component.html",
  styles: [":host{ display: contents; }"],
})
export class FileStatusComponent {
  type: string | null;
  filename: string | null;
  hasDescription: boolean;
  hasProgress: boolean;
  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    this.type = search.get("type");
    this.filename = search.get("filename");
    this.hasDescription = search.get("description") !== null;
    this.hasProgress = search.get("progress") !== null;
  }
}
