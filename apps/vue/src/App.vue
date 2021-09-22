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
    onMessage(e) {
      if (e.data.type === "SECOND_STEP_DATA") {
        this.firstName = e.data.value;
      }
    },
    onClick() {
      this.bus.postMessage({
        type: "SECOND_STEP_DONE",
        value: this.secondName,
      });
    },
  },
  data() {
    return {
      firstName: "",
      secondName: "Doe",
    };
  },
  mounted() {
    this.bus = new BroadcastChannel("TEST_CHANNEL");

    this.bus.addEventListener("message", this.onMessage);
    this.bus.postMessage({ type: "SECOND_STEP_READY" });
  },

  unmounted() {
    this.bus.close();
  },
};
</script>
