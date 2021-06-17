<template>
  <div class='welcome'>
    Olá, {{ userName }}
    <div class='search-box'>
      <movie-search />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieSearch from "../components/MovieSearch.vue";

export default {
  name: "Dashboard",

  components: {
    MovieSearch,
  },

  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    user() {
      return this.currentUser;
    },
  },

  mounted() {
    this.userName = this.currentUser.name;
  },
};
</script>

<style lang="scss">
  .welcome {
    font-family: "Ubuntu-Bold";
    font-size: 20px;
  }

</style>