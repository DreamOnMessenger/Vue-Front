<template>
  <div class="">
    <!--<ChatsMenu />

    <ProviderModal />
		-->

    <Nuxt />

    <!-- <b-sidebar id="profile" no-header width=360px">
			<Profile />
		</b-sidebar>
		<b-sidebar id="setting" no-header width="360px">
			<Settings />
		</b-sidebar>
		--></div>
</template>

<script>
/* import ChatsMenu from '~/components/ChatsMenu.vue'; */
/* import Profile from '~/components/Profile.vue'; */
/* import Settings from '~/components/Settings.vue'; */

export default {
  /* components: { ChatsMenu }, */
};
</script>

<style scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.body {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.Dark {
  background-color: #32395d;
}
</style>
