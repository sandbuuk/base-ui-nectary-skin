import type { FC } from 'react'
import '@sinch-engage/nectary/vertical-stepper'
import '@sinch-engage/nectary/vertical-stepper-item'
import '@sinch-engage/nectary/text'

type TVerticalStepper = {
  search: URLSearchParams,
}

export const VerticalStepper: FC<TVerticalStepper> = ({ search }) => {
  const index = search.get('index') ?? '0'

  return (
    <sinch-vertical-stepper index={index} aria-label="Stepper">
      <sinch-vertical-stepper-item label="Step 1">
        <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step 2" status="error" description="Step description">
        <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
        <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step label long long long long long" status="skip" description="Step description long long long long long description long long long long long">
        <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</sinch-text>
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step label long long long long long" description="Step description long long long long long">
        <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
      </sinch-vertical-stepper-item>
    </sinch-vertical-stepper>
  )
}
