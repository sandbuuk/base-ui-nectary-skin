import { Component } from '@angular/core'
import '@nectary/components/card'

const items = [{
  key: '1',
  caption: 'Card 1',
  draggable: true,
}, {
  key: '2',
  caption: 'Card 2',
  draggable: true,
}, {
  key: '3',
  caption: 'Card 3',
  draggable: false,
}]

@Component({
  selector: 'card-dnd-component',
  templateUrl: './CardDnD.component.html',
  styles: [':host{ display: contents; }']
})

export class CardDnDComponent {
  items = items
  dragTarget: HTMLElement | null = null
  dragOverTarget: HTMLElement | null = null

  constructor() {}

  onDragStart(e: Event) {
    if ((e.target as HTMLElement).matches('sinch-card')) {
      this.dragTarget = e.target as HTMLElement
      this.dragTarget.style.setProperty('opacity', '0.3')
    }
  }

  onDragEnd (){
    this.dragTarget!.style.removeProperty('opacity')
    this.dragTarget = null
    this.dragOverTarget = null
  }

  onDragOver(e: Event) {
    e.preventDefault()

    if(e.target === this.dragOverTarget || !(e.target as Element).matches('sinch-card')) {
      return
    }

    this.dragOverTarget = e.target as HTMLElement

    if(this.dragOverTarget === this.dragTarget) {
      return
    }

    const dragKey = this.dragTarget!.getAttribute('data-id')
    const dragOverKey = this.dragOverTarget!.getAttribute('data-id')
    const dragIndex = this.items.findIndex((item) => item.key === dragKey)
    const dragOverIndex = this.items.findIndex((item) => item.key === dragOverKey)
    const nextItems = this.items.slice()

    nextItems.splice(dragIndex, 1)
    nextItems.splice(dragOverIndex, 0, this.items[dragIndex])

    this.items = nextItems
  }
}
