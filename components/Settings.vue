<template>
  <div class="Dark" style="max-width: 400px;">
    <h1 style="background-color: #fff;">Settings</h1>
    <h1 class="DOM-title pl-2">Settings</h1>
    <b-list-group
      class="overflow-auto vh-100 flex-fil mt-3"
      style="max-width: 400px;"
    >
      <b-list-group-item class="d-flex align-items-center Dark">
        <div class="Text-Dark">Dark Mode</div>
        <b-form-checkbox
          switch
          size="lg"
          switch-variant="secondary"
          class="ml-auto"
        ></b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<style scoped>
.Nav-Dark {
  background-color: #2a304d;
}
.Text-Dark {
  color: #fff;
}
.Dark {
  background-color: #32395d;
}
.DOM-title {
  color: #f85252;
  font-size: x-large;
}
.icon-color {
  color: #f85252;
}
</style>
