import type { FC } from 'react'
import '@sinch-engage/nectary/vertical-stepper'
import '@sinch-engage/nectary/vertical-stepper-item'

type TVerticalStepper = {
  search: URLSearchParams,
}

export const VerticalStepper: FC<TVerticalStepper> = () => {
  return (
    <sinch-vertical-stepper index="0" aria-label="Stepper">
      <sinch-vertical-stepper-item label="Step 1">
        <section>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</section>
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step 2" status="error" description="Step description">
        <section>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</section>
        <section>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</section>
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step label long long long long long" status="skip" description="Step description long long long long long description long long long long long">
        <section>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</section>
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step label long long long long long" description="Step description long long long long long">
        <section>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</section>
      </sinch-vertical-stepper-item>
    </sinch-vertical-stepper>
  )
}
