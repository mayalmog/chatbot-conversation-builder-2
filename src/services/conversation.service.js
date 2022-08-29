import answers from "@/assets/data/answers.json";
import questions from "@/assets/data/questions.json";
import chats from "@/assets/data/chats.json";
import conversation from "@/assets/data/conversation.json";
export const conversationService = {
  conversationByChatId,
  updateChat,
};

//generate a joint object for a specific chatID, including extended info for questions and answers:
function conversationByChatId(chatID) {
  let chat = chats.filter((chat) => chat.chatID === chatID)[0];
  if (chat.questions) {
    chat = getFormattedQuestions(chat);
  }
  // console.log(chat);
  return chat;
}

function getFormattedQuestions(chat) {
  chat.questions.map((question) => {
    const extendedQuestion = questions.filter((q) => q.qid === question.qid)[0];
    question["qtype"] = extendedQuestion.qtype;
    question["qtext"] = extendedQuestion.qtext;
    question["answers"] = getFormattedAnswers(question.qid);
  });
  return chat;
}

function getFormattedAnswers(qid) {
  let formattedAnswers = [];
  answers.map((answer) => {
    if (answer.qids.includes(qid)) {
      let formattedAnswer = Object.assign({}, answer);
      delete formattedAnswer.qids;
      formattedAnswers.push(formattedAnswer);
    }
  });
  return formattedAnswers;
}

function updateChat(chatID, updatedQuestions) {
  const updatedChatIdx = conversation.chats.findIndex(
    (chat) => chat.chatID === chatID
  );
  conversation.chats[updatedChatIdx].questions = updatedQuestions;
  console.log(conversation.chats[updatedChatIdx]);
}
