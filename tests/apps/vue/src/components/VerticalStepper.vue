<template>
  <sinch-vertical-stepper index="0">
    <sinch-vertical-stepper-item label="Step 1">
      <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
    </sinch-vertical-stepper-item>
    <sinch-vertical-stepper-item status="error" label="Step 2" description="Step description">
      <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
      <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
    </sinch-vertical-stepper-item>
    <sinch-vertical-stepper-item status="skip" label="Step label long long long long long" description="Step description long long long long long description long long long long long">
      <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</sinch-text>
    </sinch-vertical-stepper-item>
    <sinch-vertical-stepper-item label="Step label long long long long long" description="Step description long long long long long">
      <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
    </sinch-vertical-stepper-item>
  </sinch-vertical-stepper>
</template>

<script>
import '@nectary/components/vertical-stepper'
import '@nectary/components/vertical-stepper-item'
import '@nectary/components/text'

export default {
}
</script>

