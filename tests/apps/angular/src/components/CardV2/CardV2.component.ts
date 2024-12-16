import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import '@nectary/assets/icons-branded/chatbot';
import '@nectary/assets/illustrations/cat-texting';
import '@nectary/components/button';
import '@nectary/components/link';
import '@nectary/components/card-v2';
import '@nectary/components/card-v2-title';
import '@nectary/components/text';

@Component({
  selector: 'card-v2-component',
  templateUrl: './CardV2.component.html',
  styles: [':host { display: contents; }']
})
export class CardV2Component {
  content: string | null;
  title: string | null;
  hasIllustration: boolean;
  hasIcon: boolean;
  buttonText: string | null;
  linkText: string | null;
  background: string | null;
  disabled: boolean;
  clickable: boolean;
  selected: boolean;

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap;
    this.content = search.get('content');
    this.title = search.get('title');
    this.hasIllustration = search.has('illustration');
    this.hasIcon = search.has('icon');
    this.buttonText = search.get('button');
    this.linkText = search.get('link');
    this.background = search.get('bg');
    this.disabled = search.has('disabled');
    this.clickable = search.has('clickable');
    this.selected = search.has('selected');
  }

  handleCardClick(): void {}
  handleButtonClick(): void {}
}
