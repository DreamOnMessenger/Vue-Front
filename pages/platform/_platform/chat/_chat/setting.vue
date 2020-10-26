<template>
  <h1>{{ platform }} / {{ chat }}</h1>
</template>

<script>
export default {
  asyncData({ params }) {
    const { chat, platform } = params;
    return { chat, platform };
  },
};
</script>
