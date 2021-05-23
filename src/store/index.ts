import { reactive } from "vue";
import json from "@/assets/questions.json";

const state = reactive({
  currentQuestionIndex: 0,
  currentQuestion: json[0],
  allQuestionCount: json.length,
});

const methods = {
  nextQuestion() {
    console.log("next");
    state.currentQuestionIndex++;
    state.currentQuestion = json[state.currentQuestionIndex];
  },
};

export default {
  state,
  methods,
};
