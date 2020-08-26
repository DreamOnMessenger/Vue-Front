<template>
  <div class="Dark body">
    <b-navbar
      type="dark"
      fixed="top"
      class="Nav-Dark p-2 pl-1 mb-3 pt-3 navbar top-bar"
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
    <b-list-group
      class="d-flex align-items-center Dark chat-box flex-fil pt-2 navbar"
    >
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
    </b-list-group>

    <b-navbar type="dark" class="Dark navbar bottom-bar" fixed="bottom">
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
  color: #f85252;
}
.Nav-Dark {
  background-color: #20253b;
  border-bottom: 5px solid #f85252;
}
.Dark {
  background-color: #2a304d;
}
.DOM-title {
  color: #f85252;
  font-size: x-large;
}
.send-btn {
  width: 50px;
  padding: 0;
  border-radius: 50px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  transition: all 0.3;
  color: #f85252;
  background-color: transparent;
  border: 2px solid transparent;
}

.Text-Dark {
  color: #fff;
}
.Input-Dark {
  padding-left: 15px;
  border-radius: 10px;
  background-color: #32395d;
  color: #fff;
}
.chat-box {
  position: fixed;
  top: 9vh;
  bottom: 9.2vh;
  height: auto;
  overflow-y: auto;
}
.body {
  height: 100vh;
}
.navbar {
  width: calc(100% - 400px);
  left: 400px;
  right: 0;
}
.top-bar {
  height: 9vh;
}
.bottom-bar {
  height: 9.2vh;
}
</style>
