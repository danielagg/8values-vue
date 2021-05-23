<template>
  <div class="button-wrapper">
    <div
      class="button"
      :class="{ [buttonVariant]: buttonVariant }"
      @click="store.methods.nextQuestion"
    >
      {{ getText() }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, inject } from "vue";

export default defineComponent({
  name: "AnswerButton",
  props: {
    variant: {
      type: String as PropType<
        "hardAgree" | "agree" | "notSure" | "disagree" | "hardDisagree"
      >,
      required: true,
    },
  },
  setup(props) {
    const store = inject("store");
    let { variant } = toRefs(props);

    const getText = () => {
      switch (variant.value) {
        case "hardAgree":
          return "Kifejezetten egyetértek";
        case "agree":
          return "Egyetértek";

        case "notSure":
          return "Közömbös, bizonytalan";

        case "disagree":
          return "Nem értek egyet";

        case "hardDisagree":
          return "Kifejezetten nem értek egyet";
      }
    };

    return {
      buttonVariant: variant.value,
      getText,
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.button-wrapper {
  display: inline;
  width: auto;
}

.button {
  padding: 2rem;
  margin: 0 0.4rem;
  font-size: 1.5rem;
  font-family: "Mulish", sans-serif;
  border-radius: 15px;
  font-weight: 600;
  width: 16rem;
  height: 8rem;
  overflow-wrap: break-word;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0 solid;
  text-shadow: none;
  transition: all 100ms ease;
}

.button:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
}

.hardAgree {
  background: rgb(19, 177, 34);
  background: linear-gradient(
    160deg,
    rgba(19, 177, 34, 1) 0%,
    rgba(16, 132, 27, 1) 100%
  );
}

.agree {
  background: rgb(112, 186, 94);
  background: linear-gradient(
    160deg,
    rgba(112, 186, 94, 1) 0%,
    rgba(110, 147, 25, 1) 100%
  );
}
.notSure {
  background: rgb(198, 198, 198);
  background: linear-gradient(
    160deg,
    rgba(198, 198, 198, 1) 0%,
    rgba(141, 141, 141, 1) 100%
  );
}

.disagree {
  background: rgb(226, 97, 97);
  background: linear-gradient(
    160deg,
    rgba(226, 97, 97, 1) 0%,
    rgba(172, 45, 45, 1) 100%
  );
}

.hardDisagree {
  background: rgb(191, 53, 53);
  background: linear-gradient(
    160deg,
    rgba(191, 53, 53, 1) 0%,
    rgba(96, 2, 2, 1) 100%
  );
}
</style>
