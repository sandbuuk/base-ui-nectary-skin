<template>
  <sinch-alert :style="style" type="info" text="Alert text"></sinch-alert>
</template>

<script>
export default {
  props: {
    width: Number
  },
  computed: {
    style () {
      return {
        width: this.width != null ? `${this.width}px` : 'unset'
      };
    }
  }
}
</script>

