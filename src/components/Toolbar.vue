<template>
  <v-row justify="center" no-gutters>
    <v-col md="12" class="watchflix-toolbar">
      <v-app-bar color="blue-grey lighten-1" height="85" elevation="0" dark>
        <v-toolbar-title class="watchflix-title">
          <v-btn color="#ffffff" text to="/" class="button"> Watchflix </v-btn>
        </v-toolbar-title>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Toolbar",
};
</script>

<style lang="scss">
.watchflix-toolbar {
  .watchflix-title {
    font-family: "Ubuntu-Bold";
  }
}
</style>