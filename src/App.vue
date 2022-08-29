<template>
  <v-app>
    <v-app-bar app light>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class=""
          contain
          src="@/assets/img/paradox.ai logo.svg"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",

  components: {
    HomePage,
  },
};
</script>
