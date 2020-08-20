<template>
  <div>
    <ChatsMenu />
    <ChatBox />
    <Login />
    <Profile />
  </div>
</template>

<script>
import ChatBox from '~/components/ChatBox.vue';
import ChatsMenu from '~/components/ChatsMenu.vue';
import Login from '~/components/Login.vue';
import Profile from '~/components/Profile.vue';
export default {
  components: { ChatBox, ChatsMenu, Login, Profile },
};
</script>
