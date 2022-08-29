<template>
  <section class="chat-editor">
    <!-- <pre><code>{{ chat}}</code></pre> -->
    <form action="submit" v-if="questionsForEdit.length">
      <div v-for="(q, idx) in questionsForEdit" :key="q.qid">
        <h3 class="question-header">Question {{ idx + 1 }}</h3>
        <textarea type="text" v-model="questionsForEdit[idx].qtext"></textarea>
        <div class="answer-edit">
          <div v-if="q.qtype === 2">
            <h5>Min</h5>
            <input
              type="number"
              v-model="questionsForEdit[idx].answers[0].range.min"
            />
            <h5>Max</h5>
            <input
              type="number"
              v-model="questionsForEdit[idx].answers[0].range.max"
            />
          </div>
        </div>
      </div>
      <v-btn type="submit" elevation="2" @click="updateChat">Update chat</v-btn>
    </form>
  </section>
</template>

<script>
import { conversationService } from "@/services/conversation.service";

export default {
  name: "ChatEditor",
  props: {
    chat: Object,
  },
  data: () => ({
    questionsForEdit: [],
  }),
  mounted() {
    this.questionsForEdit = JSON.parse(JSON.stringify(this.chat.questions));
    console.log(this.questionsForEdit);
    console.log(this.chat);
  },
  methods: {
    updateChat(ev) {
      ev.preventDefault();
      conversationService.updateChat(this.chat.chatID, this.questionsForEdit);
    },
  },
};
</script>

<style scoped lang="scss">
.chat-editor {
  .question-header {
    border-top: 1px solid rgb(203, 203, 203);
  }
  textarea {
    // resize: none;
    // width: 50%;
    min-height: 60px;
    width: 100%;
    overflow-y: auto;
    word-wrap: break-word;
  }
}
</style>
