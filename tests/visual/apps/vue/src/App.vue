<template>
  <div :style="style">
    <Accordion v-if="url.pathname === '/accordion'" :search="url.searchParams"/>
    <Alert v-if="url.pathname === '/alert'" :search="url.searchParams"/>
    <Button v-if="url.pathname === '/button'" :search="url.searchParams"/>
    <Checkbox v-if="url.pathname === '/checkbox'" :search="url.searchParams"/>
    <Input v-if="url.pathname === '/input'" :search="url.searchParams"/>
    <Radio v-if="url.pathname === '/radio'" :search="url.searchParams"/>
    <Select v-if="url.pathname === '/select'" :search="url.searchParams"/>
    <Tabs v-if="url.pathname === '/tabs'" :search="url.searchParams"/>
    <Textarea v-if="url.pathname === '/textarea'" :search="url.searchParams"/>
    <Toggle v-if="url.pathname === '/toggle'" :search="url.searchParams"/>
    <Tooltip v-if="url.pathname === '/tooltip'" :search="url.searchParams"/>
    <Spinner v-if="url.pathname === '/spinner'" :search="url.searchParams"/>
  </div>
</template>

<script>
import '@nectary/components'
import Accordion from './components/Accordion.vue'
import Alert from './components/Alert.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import Input from './components/Input.vue'
import Radio from './components/Radio.vue'
import Select from './components/Select.vue'
import Tabs from './components/Tabs.vue'
import Textarea from './components/Textarea.vue'
import Toggle from './components/Toggle.vue'
import Tooltip from './components/Tooltip.vue'
import Spinner from './components/Spinner.vue'

export default {
  data() {
    return {
      url: new URL(window.location.href)
    };
  },
  computed: {
    style () {
      const width = Number(this.url.searchParams.get('width') ?? '0')
      const height = Number(this.url.searchParams.get('height') ?? '0')

      const style = {
        display: 'flex',
        padding: '100px'
      }

      if (height > 0) {
        style.height = height + 'px'
      }

      if (width > 0) {
        style.flexDirection = 'column',
        style.width = width + 'px'
      }

      return style;
    }
  },
  components: {
    Accordion,
    Alert,
    Button,
    Checkbox,
    Input,
    Radio,
    Select,
    Tabs,
    Textarea,
    Toggle,
    Tooltip,
    Spinner,
  }
};
</script>
