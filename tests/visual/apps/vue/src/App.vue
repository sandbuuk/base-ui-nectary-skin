<template>
  <div :style="style">
    <Alert v-if="url.pathname === '/alert'" :search="url.searchParams"/>
    <Button v-if="url.pathname === '/button'" :search="url.searchParams"/>
    <Checkbox v-if="url.pathname === '/checkbox'" :search="url.searchParams"/>
    <Input v-if="url.pathname === '/input'" :search="url.searchParams"/>
    <Radio v-if="url.pathname === '/radio'" :search="url.searchParams"/>
    <Select v-if="url.pathname === '/select'" :search="url.searchParams"/>
  </div>
</template>

<script>
import '@nectary/components'
import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
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
    Button,
    Checkbox,
    Input,
    Radio,
    Select,
  }
};
</script>
