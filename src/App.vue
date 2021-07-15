<template>
  <div id="app">
    <Header @selectInput="searchAlbumInput" @selectGenre="searchAlbumsGenre" />
    <Main :albums="filteredGenres" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
    Header,
  },
  data: function () {
    return {
      albums: [],
      inputSelectGenre: "",
      inputSelect: "",
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        this.albums = result.data.response;
      });
  },
  computed: {
    filteredGenres() {
      if (
        this.inputSelectGenre.length === 0 ||
        this.inputSelectGenre === "null"
      ) {
        return this.albums;
      }

      return this.albums.filter((element) => {
        return element.genre
          .toLowerCase()
          .includes(this.inputSelectGenre.toLowerCase());
      });
    },
  },
  methods: {
    searchAlbumsGenre: function (selectStringGenre) {
      this.inputSelectGenre = selectStringGenre.trim();
    },
    searchAlbumInput: function (inputString) {
      this.inputSelect = inputString.trim();
    },
  },
};
</script>

<style lang="scss">
</style>
