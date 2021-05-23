<template>
  <main>
    <div class="wrapper">
      <ProgressBar />

      <h1>
        {{ store.state.currentQuestion.text }}
      </h1>
      <div class="buttons">
        <AnswerButton variant="hardAgree" />
        <AnswerButton variant="agree" />
        <AnswerButton variant="notSure" />
        <AnswerButton variant="disagree" />
        <AnswerButton variant="hardDisagree" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import AnswerButton from "./AnswerButton.vue";
import ProgressBar from "./ProgressBar.vue";

export default defineComponent({
  name: "Question",
  components: {
    ProgressBar,
    AnswerButton,
  },
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

main {
  background: $primary-darkest;
  color: white;

  .wrapper {
    padding: 4rem 0;
    width: 70%;
    margin: 0 auto;
  }

  h1 {
    font-family: "Oswald", sans-serif;
    padding: 0;
    margin: 0;
    font-size: 3.5rem;
    width: 60%;
    margin: 3rem 0;
    height: 16rem;
    transition: width 0.25s ease-in-out;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin-top: 4rem;
  }
}
</style>
