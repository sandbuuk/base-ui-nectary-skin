<template>
  <sinch-accordion :value="value" @--change="onChange" :multiple="isMultiple">
    <sinch-accordion-item v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :label="opt.label"
      :disabled="opt.disabled"
      :status="opt.status"
      :optionaltext="opt.optional">
      <sinch-text v-if="opt.content != null" slot="content" type="m">{{opt.content}}</sinch-text>
      <sinch-icon-open-in-new v-if="opt.icon === true" slot="icon"></sinch-icon-open-in-new>
    </sinch-accordion-item>
  </sinch-accordion>
</template>

<script>
import '@nectary/components/text'
import '@nectary/components/accordion'
import '@nectary/components/accordion-item'
import '@nectary/assets/icons/open-in-new'

const items = [{
  value: '1',
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
  optional: 'Required',
}, {
  value: '2',
  label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  status: 'info',
  content: 'Accordion content',
  optional: 'Optional',
}, {
  value: '3',
  label: 'Option value 3',
  disabled: true,
  icon: true,
  optional: 'Disabled',
}, {
  value: '4',
  label: 'Option value 4',
  content: 'Accordion content',
}]

const singleItems = [{
  value: '1',
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
  optional: 'Required',
}]

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onChange(e) {
      if (this.isControlled) {
        this.value = e.detail
        window.dispatchEvent(new CustomEvent('sinch-accordion-change', {detail: e.detail}))
      }
    }
  },
  computed: {
    isControlled() {
      return this.search.get('uncontrolled') === null
    },
    isMultiple() {
      return this.search.get('multiple') !== null
    },
    options() {
      return this.search.get('example') === 'single'
        ? singleItems
        : items
    }
  },
  data() {
    return {
      value: this.search.get('value') ?? ''
    }
  }
}
</script>

