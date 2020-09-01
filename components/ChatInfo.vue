<template>
  <div class="chat-info Dark">
    <b-row class="pl-3 pt-3 align-items-center Title Title-Dark">
      <h1 class="DOM-title pl-2">Chat Info</h1>
    </b-row>
    <b-row class="pl-3 pt-1 pb-2 pr-3 d-flex align-items-center">
      <b-form-input
        aria-label="Add"
        placeholder="Username"
        class="rounded-pill p-2 px-3 border-0 mt-3 Add-input"
      ></b-form-input>
      <b-icon icon="plus" font-scale="2" class="mt-3 ml-2 Add-btn"></b-icon>
    </b-row>
    <b-row class="pl-3 pt-1 pb-2 pr-3 d-flex align-items-center">
      <b-icon icon="people-fill" font-scale="2" class="ml-2 DOM-title"></b-icon>
      <h1 class="DOM-title mt-1 pt-1 pl-2">Members</h1>
    </b-row>
    <b-list-group
      class="Nav-Dark overflow-auto flex-fil member-cards mt-0 mr-3"
    >
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </b-list-group>
  </div>
</template>
<script>
import MemberCard from '~/components/common/MemberCard.vue';
export default {
  components: { MemberCard },
};
</script>

<style scoped>
@media (max-width: 1200px) {
  .chat-info {
    display: none;
  }
}
.chat-info {
  position: fixed;
  right: 0;
  left: calc(81% + 15px);
  top: 0;
  bottom: 0;
}
.Dark {
  background-color: #32395d;
}
.DOM-title {
  color: #fa5a5a;
  font-size: x-large;
}
.Add-input {
  width: calc(100% - 50px);
}
.Title {
  height: 8vh;
}
.Title-Dark {
  background-color: #2d3255;
}
.Add-btn {
  background-color: #fa5a5a;
  color: beige;
  border-radius: 50px;
  transition: all 0.3;
  border: 1.5px solid transparent;
}
.Add-btn:hover {
  background-color: transparent;
  color: #fa5a5a;
  border-radius: 50px;
  transition: all 0.3;
  border: 1.5px solid #fa5a5a;
}
</style>
