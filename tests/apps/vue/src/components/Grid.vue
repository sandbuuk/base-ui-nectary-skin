<template>
  <div style="position: relative">
    <sinch-grid>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="4">
        <sinch-card slot="content" caption="Card" :text="text">
          <sinch-illustration-phone-and-cat slot="illustration"></sinch-illustration-phone-and-cat>
        </sinch-card>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="4">
        <sinch-card slot="content" caption="Card" :text="text">
          <sinch-icon-branded-chatbot slot="icon"></sinch-icon-branded-chatbot>
        </sinch-card>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="2">
        <sinch-card slot="content" caption="Card" :text="text">
          <sinch-card-link href="#" text="Link" slot="action"></sinch-card-link>
        </sinch-card>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="2">
        <sinch-card slot="content" caption="Card" :text="text">
          <sinch-card-button text="Button" slot="action"></sinch-card-button>
        </sinch-card>
      </sinch-grid-item>
    </sinch-grid>
    <sinch-grid-debug/>
  </div>
</template>

<script>
import '../../../utils/grid-debug'
import '@sinch-engage/nectary/grid'
import '@sinch-engage/nectary/grid-item'
import '@sinch-engage/nectary/illustration/phone-and-cat'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/card-link'
import '@sinch-engage/nectary/card-button'

export default {
  props: {
    search: URLSearchParams
  },
  data() {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }
  }
}
</script>
