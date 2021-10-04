<template>
  <p>First name: {{ firstName }}</p>
  <p>Last name:</p>
  <sinch-input
    :value="secondName"
    @change="secondName = $event.detail"
  ></sinch-input>
  <sinch-button value="Next" @click="onClick"></sinch-button>
</template>

<script lang="ts">
import "@saas/components/button";
import "@saas/components/input";
import "@saas/components/checkbox";

export default {
  methods: {
    onClick() {
      this.bus.postMessage({
        type: "SECOND_STEP_DONE",
        value: this.secondName,
      });
    },
  },
  props: {
    firstName: String,
  },
  data() {
    return {
      secondName: "Doe",
    };
  },
  mounted() {
    this.bus = new BroadcastChannel("TEST_CHANNEL");
  },

  unmounted() {
    this.bus.close();
  },
};
</script>
