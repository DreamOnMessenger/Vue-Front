<template>
  <div class="toolbox">
    <b-navbar-nav class="Nav-Dark">
      <b-nav-item class="w-100 px-4 d-flex align-items-center">
        <b-icon
          v-b-toggle.profile
          icon="file-person"
          font-scale="2.5"
          class="icon-color mr-2 ml-4"
        ></b-icon>
        <b-icon
          v-b-toggle.setting
          icon="gear"
          font-scale="2.5"
          class="icon-color mr-2 ml-3"
        ></b-icon>
        <b-icon
          icon="search"
          font-scale="2.5"
          class="icon-color mr-2 ml-3"
        ></b-icon>
        <b-icon
          icon="plus-circle"
          font-scale="2.5"
          class="icon-color ml-3 mr-4"
        ></b-icon>
      </b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
.Nav-Dark {
  background-color: #2a304d;
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
</style>
