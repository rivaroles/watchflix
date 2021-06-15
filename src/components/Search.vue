<template>
  <div class="search">
    <h1>Procure por um título:</h1>
    <input type="text" v-model="query" @keyup="getResult(query)" />
    <div v-for="result in results" :key="result.id">
      <p>{{ result.title }}</p>
      <img
        v-bind:src="
          'http://img.omdbapi.com/?apikey=37c9611a&' + result.poster_path
        "
        width="100px"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      query: "",
      results: "",
    };
  },
  methods: {
    getResult(query) {
      axios
        .get("http://www.omdbapi.com/?t=" + query + "&apikey=37c9611a")
        .then((response) => {
          this.results = response.data.results;
        });
      console.log(this.results);
    },
  },
};
</script>