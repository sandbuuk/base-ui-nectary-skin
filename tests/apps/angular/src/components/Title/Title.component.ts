import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/title'

@Component({
  selector: 'title-component',
  templateUrl: './Title.component.html',
  styles: [':host{ display: contents; }']
})

export class TitleComponent {
  text: string | null
  type: string | null
  level: string | null

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.text = search.get('text')
    this.type = search.get('type')
    this.level = search.get('level')
  }
}
