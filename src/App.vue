<template>
  <v-app>
    <toolbar />
    <search />
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Search from "./components/Search";

export default {
  name: "App",

  components: {
    Toolbar,
    Search,
  },
};
</script>
