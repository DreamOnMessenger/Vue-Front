<template>
  <div class="body Dark">
    <ChatsMenu />
    <ChatBox />
    <ChatInfo />
    <!--    <Login /> -->
    <b-sidebar id="profile" no-header width="360px">
      <Profile />
    </b-sidebar>
    <b-sidebar id="setting" no-header width="360px">
      <Settings />
    </b-sidebar>
  </div>
</template>

<script>
import ChatBox from '~/components/ChatBox.vue';
import ChatsMenu from '~/components/ChatsMenu.vue';
/* import Login from '~/components/Login.vue'; */
import Profile from '~/components/Profile.vue';
import Settings from '~/components/Settings.vue';
import ChatInfo from '~/components/ChatInfo.vue';
export default {
  components: { ChatBox, ChatsMenu, Profile, Settings, ChatInfo },
  data() {
    return {
      chatmenu: true,
      profile: false,
      setting: false,
      login: false,
      chatbox: false,
    };
  },
};
</script>
<style scoped>
.body {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.Dark {
  background-color: #32395d;
}
</style>
