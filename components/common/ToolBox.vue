<template>
  <div>
    <b-list-group-item
      class="d-flex align-items-center Nav-Dark"
      style="max-width: 400px;"
    >
      <b-icon
        icon="file-person"
        font-scale="2"
        class="mr-auto icon-color ml-4"
      ></b-icon>
      <b-icon
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
  color: #f85252;
}
</style>
