<script setup>
const textRef = ref(null);
const inputMessage = ref("");
const chatMessages = ref([]);
const chatPanel = ref(null);
const selectedBot = ref("US3");

watch(chatMessages.value, () => {
  scrollToBottom();
});

watch(selectedBot, () => {
  chatMessages.value = [];
});

function scrollToBottom() {
  setTimeout(() => {
    chatPanel.value.scrollTop = chatPanel.value.scrollHeight;
  }, 200);
}

function handleKeyDown(event) {
  if (inputMessage.value.length > 140) {
    // twitter old char limit
    inputMessage.value = inputMessage.value.substr(0, 140);
    event.preventDefault();
  }
}

async function sendMessage() {
  textRef.value.blur();

  const message = inputMessage.value;
  inputMessage.value = "";

  const isReset = chatMessages.value.length === 0 ? true : false;

  let newUserItem = {
    type: 0,
    text: message,
    dateTime: new Date().toISOString(),
  };
  chatMessages.value.push(newUserItem);

  const response = $fetch("/api/chat", {
    method: "post",
    body: { message, bot: selectedBot.value, reset: isReset },
  });
  const result = await response;

  const replyMessage = result.text;
  if (replyMessage) {
    let newFriendItem = {
      type: 1,
      text: replyMessage,
      dateTime: new Date().toISOString(),
    };
    chatMessages.value.push(newFriendItem);
    textRef.value.focus();
  }
}
</script>

<template>
  <div class="container">
    <div class="main">
      <div class="chat">
        <div ref="chatPanel" class="chat-panel">
          <div
            class="message"
            :class="{ 'mt-6': i == 0 }"
            v-for="(msg, i) in chatMessages"
            :key="i"
          >
            <div class="message-text">
              <p>{{ msg.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="control">
        <div class="control-panel">
          <textarea
            ref="textRef"
            class="text-input"
            v-on:keyup.enter="sendMessage"
            @keydown="handleKeyDown($event)"
            v-model="inputMessage"
            placeholder="Write message..."
          ></textarea>
          <button
            class="button-send"
            @click="sendMessage"
            :disabled="!inputMessage"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: hidden;
}
.container::-webkit-scrollbar {
  display: none;
}
.main {
  position: fixed;
  /* bottom: 0; */
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  box-sizing: border-box;
}
.main::-webkit-scrollbar {
  display: none;
}
.chat {
  @apply px-4 pb-6;
  position: relative;
  height: calc(100% - 180px);
  /* padding: 1rem; */
  box-sizing: border-box;
}
.chat-panel {
  @apply pb-3;
  position: relative;
  height: 100%;
  overflow-y: auto;
}
.chat-panel::-webkit-scrollbar {
  display: none;
}
.message {
  margin-bottom: 0.5rem;
  display: flex;
}
.message:nth-child(odd) {
  justify-content: flex-end;
}

.message:nth-child(odd) .message-text {
  max-width: calc(100% - 5rem);
}
.message:nth-child(even) .message-text {
  max-width: calc(100% - 8rem);
  display: flex;
  justify-content: space-between;
}
.message:last-child {
  margin-bottom: 0;
}
.message .message-text {
  @apply backdrop-blur-md bg-white/75 shadow-lg px-8 py-4 rounded-xl;
}

.control {
  @apply px-4;
  position: relative;
  height: 130px;
}
.control-panel {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.text-input {
  @apply backdrop-blur-md bg-white/75 shadow-lg px-8 py-4 rounded-xl -translate-y-4;
  width: calc(100% - 80px - 1rem);
  outline: none;
  box-sizing: border-box;
}

.button-send {
  @apply backdrop-blur-md bg-white/75 shadow-lg px-6 py-4 rounded-xl -translate-y-4;

  outline: none;
}
</style>
