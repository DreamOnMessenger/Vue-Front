<template>
  <div class="Dark body">
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

    <b-list-group class="Nav-Dark overflow-auto flex-fil chat-cards mt-0">
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
@media (max-width: 700000px) {
  .body {
    width: 360px;
  }
  .navbar-menu {
    top: 0;
    height: 8vh;
    width: 360px;
    left: 0;
  }
  .chat-cards {
    position: fixed;
    top: 8.5vh;
    height: 91vh;
    width: 360px;
  }
}
@media (max-width: 720px) {
  .body {
    width: 50%;
  }
  .navbar-menu {
    top: 0;
    height: 8vh;
    width: 50%;
    left: 0;
  }
  .chat-cards {
    position: fixed;
    top: 8.5vh;
    height: 91vh;
    width: 50%;
  }
}
@media (max-width: 660px) {
  .body {
    width: 100%;
  }
  .navbar-menu {
    top: 0;
    height: 8vh;
    width: 100%;
    left: 0;
  }
  .chat-cards {
    position: fixed;
    top: 8.5vh;
    height: 91vh;
    width: 100%;
  }
}
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
.body {
  height: 100vh;
}
.chat-cards::-webkit-scrollbar {
  width: 5px;
}
.chat-cards::-webkit-scrollbar-track {
  background: #888;
}
.chat-cards::-webkit-scrollbar-thumb {
  background: #555;
}
.chat-cards::-webkit-scrollbar-thumb:hover {
  background: #3f445e;
}
</style>
