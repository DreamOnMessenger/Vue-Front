<template>
  <div>
    <h1>Test</h1>
    <h2>{{ platform }}</h2>
  </div>
</template>

<script>
export default {
  middleware: '',
  asyncData({ params }) {
    const { platform } = params;
    return { platform };
  },
};
</script>
