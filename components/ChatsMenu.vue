<template>
  <div class="Dark" style="max-width: 400px;">
    <h1 style="background-color: #fff;">ChatsMenu</h1>
    <b-list-group-item
      class="d-flex align-items-center Nav-Dark"
      style="max-width: 400px;"
    >
      <b-avatar
        size="2rem"
        src="https://i.pravatar.cc/300"
        class="mr-auto"
      ></b-avatar>
      <div class="DOM-title mb-2 mt-2 mr-auto">DreamOnMessenger</div>
      <b-icon
        v-b-toggle.ToolBox
        icon="list"
        font-scale="2"
        class="mr-auto icon-color ml-4"
      ></b-icon>
    </b-list-group-item>
    <b-collapse id="ToolBox" class="Nav-Dark">
      <ToolBox />
    </b-collapse>
    <b-list-group
      class="overflow-auto vh-100 flex-fil"
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
  color: #f85252;
  font-size: x-large;
}
.icon-color {
  color: #f85252;
}
</style>
