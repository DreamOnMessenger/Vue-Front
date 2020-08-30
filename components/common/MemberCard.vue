<template>
  <div>
    <b-list-group-item class="d-flex align-items-center Dark p-2 pr-3">
      <b-avatar size="2rem" :src="imgURL" class="mr-3"></b-avatar>
      <b-col>
        <h5 class="mr-auto Text-Dark">{{ username }}</h5>
      </b-col>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: 'Super Kitty',
    },
    id: {
      type: String,
      default: '1',
    },
    text: {
      type: String,
      default: 'hello world',
    },
    imgURL: {
      type: String,
      default: 'https://i.pravatar.cc/300',
    },
    time: {
      type: String,
      default: '1 min',
    },
  },
};
</script>

<style scoped>
.Dark {
  background-color: #32395d;
  border: 0;
  border-top: 3px solid transparent;
}
.Dark:hover {
  background-color: #292f4c;
  border-top: 3px solid #fa5a5a;
}
.Text-Dark {
  color: #fff;
}
</style>
