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
          <sinch-link href="#" text="Link" slot="action" preventdefault standalone></sinch-link>
        </sinch-card>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="2">
        <sinch-card slot="content" caption="Card" :text="text">
          <sinch-button type="primary" text="Button" slot="action"></sinch-button>
        </sinch-card>
      </sinch-grid-item>
    </sinch-grid>
    <test-grid-debug></test-grid-debug>
  </div>
</template>

<script>
import '../../../utils/grid-debug'
import '@nectary/components/grid'
import '@nectary/components/grid-item'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/components/card'
import '@nectary/components/link'
import '@nectary/components/button'

export default {
    data() {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }
  }
}
</script>
