import { Component } from "@angular/core";
import "@nectary/components/list";
import "@nectary/components/list-item";
import "@nectary/components/text";
import "@nectary/components/icon";
import "@nectary/assets/icons-branded/chatbot";

@Component({
  selector: "list-component",
  templateUrl: "./List.component.html",
  styles: [":host{ display: contents; }"],
})
export class ListComponent {
  constructor() {}
}
