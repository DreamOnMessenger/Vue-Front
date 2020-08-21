<template>
  <div class="toolbox">
    <b-list-group-item
      class="d-flex align-items-center Nav-Dark"
      style="max-width: 400px;"
    >
      <b-icon
        v-b-toggle.ToolBox
        icon="arrow-left"
        font-scale="2"
        class="mr-auto icon-color ml-0"
      ></b-icon>
      <b-icon
        v-b-toggle.profile
        icon="file-person"
        font-scale="2"
        class="mr-auto icon-color ml-4"
      ></b-icon>
      <b-icon
        v-b-toggle.setting
        icon="gear"
        font-scale="2"
        class="mr-auto icon-color ml-4"
      ></b-icon>
      <b-icon
        icon="search"
        font-scale="2"
        class="mr-auto icon-color ml-4"
      ></b-icon>
      <b-icon
        icon="plus-circle"
        font-scale="2"
        class="mr-auto icon-color ml-4"
      ></b-icon>
    </b-list-group-item>
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
  color: #f85252;
}
.icon-color:hover {
  background-color: #f85252;
  color: #2a304d;
}
</style>
