<template>
  <sinch-horizontal-stepper index="0">
    <sinch-horizontal-stepper-item label="Step 1" description="Step description"></sinch-horizontal-stepper-item>
    <sinch-horizontal-stepper-item label="Step 2" description="Step description" status="error"></sinch-horizontal-stepper-item>
    <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long" status="skip"></sinch-horizontal-stepper-item>
    <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long"></sinch-horizontal-stepper-item>
  </sinch-horizontal-stepper>
</template>

<script>
import '@nectary/components/horizontal-stepper'
import '@nectary/components/horizontal-stepper-item'

export default {
}
</script>

