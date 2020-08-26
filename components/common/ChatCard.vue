<template>
  <div>
    <b-list-group-item class="d-flex align-items-center Dark p-2 pr-3">
      <b-avatar
        size="lg"
        :badge="badge"
        badge-variant="danger"
        :src="imgURL"
        class="mr-3"
      ></b-avatar>
      <b-col>
        <b-row>
          <h5 class="mr-auto Text-Dark">{{ username }}</h5>
        </b-row>
        <b-row>
          <span class="mr-auto Text-Dark">{{ text }}</span>
        </b-row>
      </b-col>
      <span class="mr-auto Text-Dark">{{ time }}</span>
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
    badge: {
      type: String,
      default: '10',
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
  border-top: 3px solid transparent;
}
.Dark:hover {
  background-color: #292f4c;
  border-top: 3px solid #f85252;
}
.Text-Dark {
  color: #fff;
}
</style>
