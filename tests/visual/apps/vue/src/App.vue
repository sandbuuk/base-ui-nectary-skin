<template>
  <div :style="style">
    <div v-if="url.pathname === '/button'">
      <sinch-button type="cta" text="Button" @click="() => {}"></sinch-button>
    </div>
    <Alert v-if="url.pathname === '/alert'"/>
    <Input v-if="url.pathname === '/input'" :search="url.searchParams"/>
    <Radio v-if="url.pathname === '/radio'"/>
    <Select v-if="url.pathname === '/select'"/>
  </div>
</template>

<script>
import '@nectary/components'
import Alert from './components/Alert.vue'
import Input from './components/Input.vue'
import Radio from './components/Radio.vue'
import Select from './components/Select.vue'

export default {
  data() {
    return {
      url: new URL(window.location.href)
    };
  },
  computed: {
    style () {
      const width = Number(this.url.searchParams.get('width') ?? '0')
      const style = width > 0 ? {
        display: 'flex',
        flexDirection: 'column',
        width: width + 'px',
        padding: '100px'
      } : {
        padding: '100px'
      }

      return style;
    }
  },
  components: {
    Alert,
    Input,
    Radio,
    Select,
  }
};
</script>
