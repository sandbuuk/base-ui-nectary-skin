<template>
  <div v-if="pathname === '/alert'">
    <Alert width="300"/>
  </div>
  <div v-if="pathname === '/button'">
    <sinch-button type="cta" text="Button" @click="() => {}"></sinch-button>
  </div>
  <div v-if="pathname === '/radio'">
    <Radio width="200"/>
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
import Alert from './components/Alert.vue'
import Radio from './components/Radio.vue'
import Select from './components/Select.vue'

export default {
  data() {
    return {
      pathname: window.location.pathname
    };
  },
  components: {
    Alert,
    Radio,
    Select
  }
};
</script>
