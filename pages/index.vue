<template>
  <div>
    <ChatsMenu />
    <ChatBox />
    <Login />
    <b-sidebar id="profile" no-header shadow width="360px">
      <Profile />
    </b-sidebar>
    <b-sidebar id="setting" no-header shadow width="360px">
      <Settings />
    </b-sidebar>
  </div>
</template>

<script>
import ChatBox from '~/components/ChatBox.vue';
import ChatsMenu from '~/components/ChatsMenu.vue';
import Login from '~/components/Login.vue';
import Profile from '~/components/Profile.vue';
import Settings from '~/components/Settings.vue';
export default {
  components: { ChatBox, ChatsMenu, Login, Profile, Settings },
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
