<template>
  <main>
    <div class="wrapper">
      <h1>
        {{ store.state.currentQuestionIndex + 1 }} /
        {{ store.state.allQuestionCount }}
      </h1>
      <div class="progressBar">
        <div
          class="currentProgress"
          :style="{
            width:
              ((store.state.currentQuestionIndex + 1) /
                store.state.allQuestionCount) *
                100 +
              '%',
          }"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "ProgressBar",
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
}

h1 {
  color: $primary;
  font-size: 2rem;
  display: inline;
  min-width: 10%;
  margin-right: 0.2rem;
}

.progressBar {
  display: inline;
  height: 0.3rem;
  background: $primary-dark;
  width: 80%;
  border-radius: 5px;
}

.currentProgress {
  height: 0.7rem;
  margin-top: -0.2rem;
  background: $primary;
  position: relative;
  transition: width 0.25s ease-in-out;
  border-radius: 5px;

  &:after {
    content: "";
    background: $primary;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 0;
    right: -1rem;
    margin-top: -0.5rem;
    border-radius: 100%;
  }
}
</style>
