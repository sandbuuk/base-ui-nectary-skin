<template>
  <sinch-card-v2>
    <form slot="content" :style="formContainerStyles" @submit.prevent="handleSubmit">
      <Field search-prefix="field-email">
        <Input slot="input" search-prefix="input-email" />
      </Field>
      <Field search-prefix="field-password">
        <Input slot="input" search-prefix="input-password" />
      </Field>
      <Checkbox search-prefix="checkbox-default" />
      <Checkbox search-prefix="checkbox-value" />
      <Radio />
      <SelectMenu />
      <DatePicker />
      <Textarea />
      <Button search-prefix="button-submit" />
      <Button search-prefix="button-reset" />
    </form>
  </sinch-card-v2>
</template>

<script>
import CardV2 from '../components/CardV2.vue'
import Field from '../components/Field.vue'
import Input from '../components/Input.vue'
import Checkbox from '../components/Checkbox.vue'
import Radio from '../components/Radio.vue'
import SelectMenu from '../components/SelectMenu.vue'
import DatePicker from '../components/DatePicker.vue'
import Textarea from '../components/Textarea.vue'
import Button from '../components/Button.vue'

export default {
  components: {
    CardV2,
    Field,
    Input,
    Checkbox,
    Radio,
    SelectMenu,
    DatePicker,
    Textarea,
    Button
  },
  data() {
    return {
      formContainerStyles: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px'
      }
    }
  },
  methods: {
    handleSubmit(event) {
      const formData = new FormData(event.target)

      const email = formData.get('email')
      const password = formData.get('password')
      const checkboxDefault = formData.get('checkbox-default')
      const checkboxValue = formData.get('checkbox-value')
      const radio = formData.get('radio')
      const selectMenu = formData.getAll('select-menu')
      const datePicker = formData.get('date')
      const textarea = formData.get('textarea')

      const detail = {
        email,
        password,
        checkboxDefault,
        checkboxValue,
        radio,
        selectMenu,
        datePicker,
        textarea
      }

      window.dispatchEvent(new CustomEvent('uncontrolled-form-submit', { detail }))
    }
  }
}
</script>
