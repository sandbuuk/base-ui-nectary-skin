<template>
  <div style="position: relative">
    <sinch-grid>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="4">
        <sinch-card-v2 slot="content">
          <sinch-illustration-phone-and-cat slot="media"></sinch-illustration-phone-and-cat>
          <sinch-card-v2-title slot="title" text="Card"></sinch-card-v2-title>
          <sinch-text slot="content" type="m">{{text}}</sinch-text>
        </sinch-card-v2>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="4">
        <sinch-card-v2 slot="content">
          <sinch-card-v2-title slot="title" text="Card">
            <sinch-icon-branded-chatbot slot="icon"></sinch-icon-branded-chatbot>
          </sinch-card-v2-title>
          <sinch-text slot="content" type="m">{{text}}</sinch-text>
        </sinch-card-v2>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="2">
        <sinch-card-v2 slot="content">
          <sinch-card-v2-title slot="title" text="Card"/>
          <sinch-text slot="content" type="m">{{text}}</sinch-text>
          <sinch-link slot="footer" href="#" preventdefault standalone text="Link" aria-label="Link"></sinch-link>
        </sinch-card-v2>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl="3" l="4" m="4" s="2">
        <sinch-card-v2 slot="content">
          <sinch-card-v2-title slot="title" text="Card"/>
          <sinch-text slot="content" type="m">{{text}}</sinch-text>
          <sinch-button slot="footer" type="primary" text="Button" aria-label="Button"></sinch-button>
        </sinch-card-v2>
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
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
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
