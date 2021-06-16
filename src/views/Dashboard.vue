<template>
  <div>
    Olá, {{ userName }}
    <Search />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "../components/Search.vue";

export default {
  name: "Dashboard",

  components: {
    Search,
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