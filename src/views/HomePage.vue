<template>
  <v-container class="home-page">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/img/paradox-logo.png')"
          class="my-3"
          contain
          height="50"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="font-weight-bold mb-3">
          Welcome to Chatbot Conversation Builder
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <div class="input-div">
          <v-container class="textarea-container" fluid>
            <v-textarea
              clearable
              no-resize
              clear-icon="mdi-close-circle"
              label="Chat ID"
              v-model="chatID"
            ></v-textarea>
          </v-container>

          <v-btn elevation="2" @click="loadChat">Load chat</v-btn>
        </div>
      </v-col>
      <v-col class="mb-5" cols="12">
        <div v-if="chatToDisplay" class="chat">
          <ChatEditor :chat="chatToDisplay" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiAccount, mdiCloseCircle } from "@mdi/js";
import { conversationService } from "@/services/conversation.service";

import ChatEditor from "@/components/ChatEditor.vue";

export default {
  name: "HomePage",
  components: {
    ChatEditor,
  },
  data: () => ({
    chatID: "",
    chatToDisplay: null,
    path: mdiAccount,
    mdiCloseCircle,
  }),
  methods: {
    loadChat() {
      this.chatToDisplay = conversationService.conversationByChatId(
        this.chatID
      );
    },
  },
};
</script>

<style lang="scss">
.home-page {
  .textarea-container {
    width: 30%;
  }
  .chat {
    text-align: left;
    pre {
      white-space: pre-wrap;
      background: #212529;
      color: #fff;
    }
  }
}
</style>
