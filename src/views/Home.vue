<template>
  <v-row no-gutters justify="center" class="home">
    <v-col lg="4" md="12" class="column-cards">
      <v-card class="pa-0" elevation="0" tile>
        <v-card-title class="card-title">
          Liste os filmes que você quer assistir
        </v-card-title>
        <v-card-subtitle class="card-subtitle">
          Adicione filmes à sua lista e planeje sua próxima maratona!
        </v-card-subtitle>
        <v-card-text>
          <v-btn
            class="ma-2 create-account buttons"
            color="#78909C"
            @click="goTo('register')"
          >
            Criar conta
          </v-btn>
          <v-btn
            class="ma-2 buttons"
            outlined
            color="#78909C"
            @click="goTo('login')"
          >
            Já possuo uma conta
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="6" md="12" class="pl-10">
      <v-card class="pa-0" elevation="0" tile>
        <v-img src="@/assets/images/5250.jpg"></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss">
.home {
  .column-cards {
    height: 100%;
    .card-title {
      font-family: "Ubuntu-Bold";
      font-size: 40px;
      margin-bottom: 10px;
      line-height: 40px;
      word-break: break-word;
    }
    .card-subtitle {
      font-family: "Ubuntu-Regular";
      font-size: 16px;
      margin-bottom: 80px;
      word-break: break-word;
    }

    .buttons {
      text-transform: none;
      font-family: "Ubuntu-Bold";
      height: 48px;
    }
  }
}
</style>