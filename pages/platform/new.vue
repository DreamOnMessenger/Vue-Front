<template>
  <div>
    <form v-on:submit.prevent="addProvider">
      <input v-model="name" placeholder="Name" />
      <select v-model="type">
        <option desabled value="">Provider Type</option>
        <option v-for="t in types" v-bind:value="t.value" v-bind:key="t.value">
          {{ t.name }}
        </option>
      </select>

      <input v-if="type === 'other'" v-model="url" placeholder="Url" />

      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    addProvider(e) {
      const { name, type, url } = this;
      if (name === '') return;
      if (type === '') return;
      if (type === '' && url === '') return;
      this.$store.commit('providers/add', { name, type, url });
      e.preventDefault();
    },
  },
  asyncData() {
    const obj = {
      name: '',
      type: '',
      url: '',
    };

    const types = [
      { name: 'Matrix', value: 'matrix' },
      { name: 'Telegram', value: 'telegram' },
      { name: 'Costum', value: 'other' },
    ];

    return { ...obj, types, obj };
  },
};
</script>
