<template>
  <div class="Dark body">
    <b-navbar
      type="dark"
      fixed="top"
      class="Nav-Dark p-2 pl-1 mb-3 pt-3 nav-box"
    >
      <b-icon icon="arrow-left" font-scale="2" class="mr-2 icon-color"></b-icon>
      <b-navbar-nav>
        <b-avatar
          size="2rem"
          src="https://i.pravatar.cc/300"
          class="mr-2"
        ></b-avatar>
        <h3 class="Text-Dark">ChatName</h3>
      </b-navbar-nav>
      <b-icon
        icon="plus-circle"
        font-scale="2"
        class="ml-auto icon-color"
      ></b-icon>
    </b-navbar>

    <b-row class="Dark overflow-auto chat-box pt-2 navbar">
      <Messege />
      <Messege type="Send" />
      <Messege type="Send" />
      <Messege />
      <Messege type="Send" />
      <Messege type="Send" />
      <Messege />
      <Messege type="Send" />
      <Messege type="Send" />
      <Messege type="Send" />
      <Messege />
      <Messege />
    </b-row>

    <b-navbar type="dark" class="Dark input-box" fixed="bottom">
      <b-form-textarea
        v-model="text"
        size="sm"
        placeholder="Message"
        class="Input-Dark"
      ></b-form-textarea>
      <b-icon
        icon="gem"
        font-scale="3"
        class="send-btn ml-2"
        rotate="270"
        :class="[text.length > 0 ? 'send-btn-active' : '']"
      ></b-icon>
    </b-navbar>
  </div>
</template>

<script>
import Messege from '~/components/common/Messege.vue';
export default {
  components: { Messege },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.icon-color {
  color: #fa5a5a;
}
.Nav-Dark {
  background-color: #20253b;
  border-bottom: 5px solid #fa5a5a;
}
.Dark {
  background-color: #2a304d;
}
.send-btn {
  width: 50px;
  padding: 0;
  border-radius: 50px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  transition: all 0.3;
  color: #fa5a5a;
  background-color: transparent;
  border: 2px solid transparent;
}
.send-btn-active {
  background-color: #fa5a5a;
  color: #ffcc;
  border: 2px solid #fa5a5a;
}
.send-btn-active:hover {
  background-color: transparent;
  color: #fa5a5a;
  border: 2px solid #fa5a5a;
}
.Text-Dark {
  color: #fff;
}
.Input-Dark {
  background-color: #32395d;
  color: #fff;
}
.body {
  height: 100vh;
}
.nav-box {
  height: 8vh;
  right: 0;
  left: 400px;
}
.chat-box {
  position: fixed;
  top: 8vh;
  bottom: 9.2vh;
  height: auto;
  right: 15px;
  left: 415px;
}
.input-box {
  padding-left: 15px;
  border-radius: 10px;
  height: 9.2vh;
  right: 0;
  left: 400px;
}
.chat-box::-webkit-scrollbar {
  width: 5px;
}
.chat-box::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.chat-box::-webkit-scrollbar-thumb {
  background: #888;
}
.chat-box::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
