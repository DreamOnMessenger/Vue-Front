<template>
  <h1>Main page {{ platform }} / {{ chat }}</h1>
</template>

<script>
export default {
  middleware: 'register-platform',
  asyncData({ params: { platform, chat } }) {
    return { platform, chat };
  },
};
</script>
