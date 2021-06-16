<template>
  <div class="search">
    <h1>Pesquise por um título:</h1>
    <input
      type="text"
      v-model="query"
      @keyup="getResult(query)"
      placeholder="Pesquisar..."
    />
    <div v-for="result in results" :key="result.id">
      <p>{{ result.title }}</p>
      <img
        v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
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
        .get(
          "https://api.themoviedb.org/3/movie/" +
            query +
            "?api_key=3cd3ab3406f80498de9bab58a92d92d3"
        )
        .then((response) => {
          this.results = response.data.results;
        });
      console.log(this.results);
    },
  },
};
</script>