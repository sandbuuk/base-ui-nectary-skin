import { Component } from "@angular/core";
import "@nectary/components/tag";
import { TSinchTagColor } from "@nectary/components/tag/colors";
import "@nectary/components/icon";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "tag-component",
  templateUrl: "./Tag.component.html",
  styles: [":host{ display: contents; }"],
})
export class TagComponent {
  color: TSinchTagColor;
  text?: string;
  isSmall: boolean;
  hasIcon: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;
    this.color = search.get("color") as TSinchTagColor ?? "default";
    this.text = search.get("text") ?? "";
    this.isSmall = search.get("small") != null;
    this.hasIcon = search.get("icon") != null;
  }
}
