<template>
  <TopBar />
  <Question />
  <About8Values />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import TopBar from "./components/TopBar.vue";
import Question from "./components/Question.vue";
import About8Values from "./components/About8Values.vue";
import store from "@/store";

export default defineComponent({
  name: "App",
  components: {
    TopBar,
    Question,
    About8Values,
  },
  setup() {
    provide("store", store);
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&family=Oswald:wght@700&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

h1 {
  font-family: "Oswald", sans-serif;
  padding: 0;
  margin: 0;
}

ul,
ol,
li,
h2,
h3,
h4,
p {
  font-family: "Mulish", sans-serif;
  padding: 0;
  margin: 0;
}
</style>
