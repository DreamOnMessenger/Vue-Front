<template>
  <div class="Dark body" style="max-width: 400px;">
    <b-navbar
      toggleable
      type="dark"
      is-nav
      fixed="top"
      class="d-flex align-items-center Nav-Dark p-0 pl-2 navbar-menu mb-0"
    >
      <b-avatar
        size="2rem"
        src="https://i.pravatar.cc/300"
        class="mr-auto"
      ></b-avatar>
      <b-navbar-brand class="DOM-title mb-2 mt-2 mr-auto"
        >DreamOnMessenger</b-navbar-brand
      >
      <b-icon
        v-b-toggle.ToolBox
        icon="list"
        class="mr-auto icon-color ml-4"
        font-scale="2.5"
      ></b-icon>
      <b-collapse id="ToolBox" class="w-100 ml-0">
        <b-navbar-nav class="w-100">
          <ToolBox />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-list-group
      class="Nav-Dark overflow-auto flex-fil chat-cards mt-0"
      style="max-width: 400px;"
    >
      <ChatCard />
      <ChatCard
        v-for="chat in chats"
        :key="chat.id"
        :username="chat.username"
        :badge="chat.badge"
        :text="chat.text"
      />
    </b-list-group>
  </div>
</template>

<script>
import ChatCard from '~/components/common/ChatCard.vue';
import ToolBox from '~/components/common/ToolBox.vue';
export default {
  components: { ChatCard, ToolBox },
  props: {},
  data() {
    return {
      chats: [
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'ali',
          id: '12d34',
          badge: '4',
          text: 'hello sdjadj',
          time: '2 min',
        },
        {
          username: 'reza',
          id: '1234sds',
          badge: '11',
          text: 'hellodsdsd',
          time: '5 min',
        },
        {
          username: 'mahdi das',
          id: '123334',
          badge: '100',
          text: 'hellsdsdo',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
        {
          username: 'mahdi',
          id: '1234',
          badge: '3',
          text: 'hello',
          time: '2 min',
        },
      ],
    };
  },
};
</script>

<style scoped>
.Nav-Dark {
  background-color: #2a304d;
}
.Dark {
  background-color: #32395d;
}
.DOM-title {
  color: #fa5a5a;
  font-size: x-large;
}
.icon-color {
  border-radius: 5px;
  border: 2.5px solid transparent;
  color: #fa5a5a;
}
.icon-color:hover {
  background-color: #fa5a5a;
  color: #2a304d;
}
.navbar-menu {
  top: 0;
  height: 8vh;
  max-width: 400px;
  left: 0;
}
.chat-cards {
  position: fixed;
  top: 9vh;
  height: 91vh;
  width: 100%;
}
.body {
  height: 100vh;
}
.chat-cards::-webkit-scrollbar {
  width: 5px;
}
.chat-cards::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.chat-cards::-webkit-scrollbar-thumb {
  background: #888;
}
.chat-cards::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
