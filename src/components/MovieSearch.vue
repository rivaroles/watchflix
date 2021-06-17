<template>
  <div id="moviesearch">
    <main class="container mt-2">
      <form @submit.prevent="getResults">
        <fieldset class="form-group">
          <input v-model="searchTerm" type="text" class="form-control" id="searchTerm" placeholder="Pesquise por um título...">
        </fieldset>
        <button type="submit" class="btn btn-primary">Buscar</button>
      </form>
      <section>
        <section class="row movies-area">
          <section class="mt-2 col-9 row" id="results">
            <div v-if="error" class="alert alert-danger col" role="alert">
              {{error}}
            </div>
            <movie
              class="col-4"
              v-for="movie in results" 
              :key="movie"
              :movie="movie"
              :isInWatchLater="isInWatchLater"
              :addToWatchLater="addToWatchLater"></movie>
          </section>
          <section class="mt-2 col-3 row">
            <h3>Sua Lista</h3>
            <section class="row" id="watch-later">
              <movie
                class="col-12"
                v-for="movie in watchLater"
                :key="movie"
                :removeWatchLater="removeWatchLater"
                :movie="movie"></movie>
            </section>
          </section>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import Movie from '@/components/Movie';
const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '?api_key=3cd3ab3406f80498de9bab58a92d92d3';

export default {
  name: 'MovieSearch',
  components: {
    Movie,
  },
  data: () => ({
    error: '',
    searchTerm: '',
    results: [],
    watchLater: [],
  }),
  methods: {
    async getResults() {
      const url = `${API_URL}${this.searchTerm}${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Error) {
        this.results = [];
        this.error = data.Error;
      } else {
        this.results = data.Search;
        this.error = '';
      }
    },
    addToWatchLater(movie) {
      this.watchLater.push(movie);
    },
    removeWatchLater(movie) {
      const index = this.watchLater.indexOf(movie);
      this.watchLater.splice(index, 1);
    },
    isInWatchLater(movie) {
      return this.watchLater.some(wl => wl.imdbID === movie.imdbID);
    },
  },
};
</script>

<style>
.movies-area {
  justify-content: space-around;
  align-items: flex-start;
}
</style>