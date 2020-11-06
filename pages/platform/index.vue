<template>
  <div>
    <ul>
      <li v-for="provider in providers" v-bind:key="provider.id">
        {{ provider.name }} ( {{ provider.type }} {{ provider.url }} ) :
        {{ provider.id }}
      </li>
    </ul>
  </div>
</template>

<script>
/* import { mapMutations } from 'vuex'; */

export default {
  computed: {
    providers() {
      console.log(this.$store.providers);
      return this.$store.state.providers.list;
    },
  },
  method: {},
  asyncData() {
    return {};
  },
};
</script>
