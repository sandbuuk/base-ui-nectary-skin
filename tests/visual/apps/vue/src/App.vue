<template>
  <div v-if="pathname === '/button'">
    <sinch-button type="cta" text="Button" @click="() => {}"></sinch-button>
  </div>
  <div v-if="pathname === '/select'">
    <Select width="200"/>
  </div>
</template>

<style>
  body {
    padding: 100px;
  }
</style>

<script>
import '@nectary/components'
import Select from './components/Select.vue'

export default {
  data() {
    return {
      pathname: window.location.pathname
    };
  },
  components: {
    Select
  }
};
</script>
