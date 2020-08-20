<template>
  <div>
    <h1>ChatBox</h1>
    <b-list-group-item class="d-flex align-items-center Nav-Dark">
      <b-icon icon="arrow-left" font-scale="2" class="mr-2 icon-color"></b-icon>
      <b-avatar
        size="2rem"
        src="https://i.pravatar.cc/300"
        class="mr-2"
      ></b-avatar>
      <h3 class="Text-Dark">ChatName</h3>
      <b-icon
        icon="plus-circle-fill"
        font-scale="2"
        class="ml-auto icon-color"
      ></b-icon>
    </b-list-group-item>
    <b-list-group
      class="d-flex align-items-center Dark overflow-auto vh-100 flex-fil"
    >
      <Messege />
      <Messege type="Send" />
    </b-list-group>
    <b-list-group-item class="d-flex align-items-center Dark">
      <b-form-textarea
        size="sm"
        placeholder="Message"
        class="Input-Dark"
      ></b-form-textarea>
      <b-icon
        icon="gem"
        font-scale="2"
        class="icon-color ml-4"
        rotate="270"
      ></b-icon>
    </b-list-group-item>
  </div>
</template>

<script>
import Messege from '~/components/common/Messege.vue';
export default {
  components: { Messege },
};
</script>

<style scoped>
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
.icon-color {
  color: #f85252;
}
.Text-Dark {
  color: #fff;
}
.Input-Dark {
  background-color: #32395d;
  color: #fff;
}
</style>
