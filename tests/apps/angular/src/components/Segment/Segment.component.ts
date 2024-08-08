import { Component } from "@angular/core";
import "@nectary/components/segment";
import "@nectary/components/segment-collapse";
import "@nectary/components/field";
import "@nectary/components/input";
import "@nectary/components/checkbox";
import "@nectary/assets/icons-branded/chatbot";
import "@nectary/assets/icons/fa-grid";
import "@nectary/components/tag";
import "@nectary/components/button";
import "@nectary/components/text";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "segment-component",
  templateUrl: "./Segment.component.html",
  styles: [
    `
      :host {
        display: contents;
      }
      .preview-content {
        display: flex;
        flex-direction: column;
        background-color: #f1f3f4;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    `,
  ],
})
export class SegmentComponent {
  caption: string;
  hasContent: boolean;
  hasIcon: boolean;
  hasInfo: boolean;
  hasCollapse: boolean;
  isCollapsed: boolean = false;
  hasAction: boolean;
  hasPreview: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;
    this.caption = search.get("caption") ?? "";
    this.hasContent = search.get("content") !== null;
    this.hasIcon = search.get("icon") !== null;
    this.hasInfo = search.get("info") !== null;
    this.hasCollapse = search.get("collapse") !== null;
    this.hasAction = search.get("action") !== null;
    this.hasPreview = search.get("preview") !== null;
  }

  onCollapse(e: Event) {
    this.isCollapsed = (e as CustomEvent).detail;
    window.dispatchEvent(
      new CustomEvent("sinch-segment-collapse-change", {
        detail: (e as CustomEvent).detail,
      })
    );
  }

  onCollapseFocus() {
    window.dispatchEvent(new CustomEvent("sinch-segment-collapse-focus"));
  }

  onCollapseBlur() {
    window.dispatchEvent(new CustomEvent("sinch-segment-collapse-blur"));
  }
}

export default SegmentComponent;
