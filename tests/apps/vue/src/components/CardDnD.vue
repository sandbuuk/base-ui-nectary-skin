<template>
<div
  id="dnd-wrapper"
  style="display: flex; gap: 8px;"
  @dragstart="onDragStart"
  @dragend="onDragEnd"
  @dragover="onDragOver"
>
  <sinch-card
    v-for="item in items"
    :key="item.key"
    :data-id="item.key"
    :caption="item.caption"
    :draggable="item.draggable"
    text="Lorem ipsum"
    label="Label"
  ></sinch-card>
</div>

</template>

<script>
import '@sinch-engage/nectary/card'

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

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onDragStart(e) {
      if (e.target.matches('sinch-card')) {
        this.dragTarget = e.target
        this.dragTarget.style.setProperty('opacity', '0.3')
      }
    },
    onDragEnd (){
      this.dragTarget.style.removeProperty('opacity')
      this.dragTarget = null
      this.dragOverTarget = null
    },
    onDragOver(e) {
      e.preventDefault()

      if(e.target === this.dragOverTarget || !e.target.matches('sinch-card')) {
        return
      }

      this.dragOverTarget = e.target

      if(this.dragOverTarget === this.dragTarget) {
        return
      }

      const dragKey = this.dragTarget.getAttribute('data-id')
      const dragOverKey = this.dragOverTarget.getAttribute('data-id')
      const dragIndex = this.items.findIndex((item) => item.key === dragKey)
      const dragOverIndex = this.items.findIndex((item) => item.key === dragOverKey)
      const nextItems = this.items.slice()

      nextItems.splice(dragIndex, 1)
      nextItems.splice(dragOverIndex, 0, this.items[dragIndex])

      this.items = nextItems
    }
  },
  data() {
    return {
      items: items
    }
  }
}
</script>

