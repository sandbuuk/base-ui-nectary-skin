import { type CSSProperties, type FC } from 'react'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { DatePicker } from '../components/DatePicker'
import { Field } from '../components/Field'
import { Input } from '../components/Input'
import { Radio } from '../components/Radio'
import { SelectMenu } from '../components/SelectMenu'
import { Textarea } from '../components/Textarea'
import '@nectary/components/card-v2'

const formContainerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: 300,
}

export const UncontrolledForm: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

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
      textarea,
    }

    window.dispatchEvent(new CustomEvent('uncontrolled-form-submit', { detail }))
  }

  return (
    <sinch-card-v2>
      <form slot="content" style={formContainerStyles} onSubmit={handleSubmit}>
        <Field searchPrefix="field-email">
          <Input slot="input" searchPrefix="input-email"/>
        </Field>
        <Field searchPrefix="field-password">
          <Input slot="input" searchPrefix="input-password"/>
        </Field>
        <Checkbox searchPrefix="checkbox-default"/>
        <Checkbox searchPrefix="checkbox-value"/>
        <Radio/>
        <SelectMenu/>
        <DatePicker/>
        <Textarea/>
        <Button searchPrefix="button-submit"/>
        <Button searchPrefix="button-reset"/>
      </form>
    </sinch-card-v2>
  )
}
