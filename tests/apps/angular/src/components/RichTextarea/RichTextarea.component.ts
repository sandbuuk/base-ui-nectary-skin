import { Component } from "@angular/core";
import "@nectary/components/rich-textarea";
import "@nectary/components/button";
import '@nectary/components/icon';







import { ActivatedRoute } from "@angular/router";

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~😆 account __manager__ or {{JohnDoe}}.

* list item 1
  1. inner item 1
  1. inner _item 2_
     * list \`LINE\` item 2
     * list __item 3__
  1. inner ___item 2___
* list ~~item 2~~
  * list item 3

1. level 0
   2. level 1
      3. level 2
      3. inner item 2
   2. inner item 2
`;

@Component({
  selector: "rich-textarea-component",
  templateUrl: "./RichTextarea.component.html",
  styles: [":host{ display: contents; }"],
})
export class RichTextareaComponent {
  value: string;
  placeholderText: string | null;
  hasTop: boolean;
  hasBottom: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;

    this.value =
      search.get("example") === "md" ? mdText : search.get("value") ?? "";
    this.placeholderText = search.get("placeholder");
    this.hasTop = search.get("top") !== null;
    this.hasBottom = search.get("bottom") !== null;
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail;
    window.dispatchEvent(
      new CustomEvent("sinch-rich-textarea-change", {
        detail: (e as CustomEvent).detail,
      })
    );
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent("sinch-rich-textarea-focus"));
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent("sinch-rich-textarea-blur"));
  }
  onFormatItalic() {}
  onFormatBold() {}
  onFormatStrikethrough() {}
  onFormatCodeTag() {}
  onFormatListBulleted() {}
  onFormatListNumbered() {}
}
