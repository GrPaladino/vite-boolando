<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";

export default {
  data() {
    return {
      headerGenders: [
        {
          sex: "Donna",
          href: "#",
        },
        {
          sex: "Uomo",
          href: "#",
        },
        {
          sex: "Bambino",
          href: "#",
        },
      ],

      headerIcons: [
        {
          class: "fa-regular fa-user",
          href: "#",
        },
        {
          class: "fa-regular fa-heart",
          href: "#",
        },
        {
          class: "fa-regular fa-bag-shopping",
          href: "#",
        },
      ],

      articles: [],

      footerLinks: [
        {
          title: "Informazioni legali",
          href: "#",
        },
        {
          title: "Informativa sulla privacy",
          href: "#",
        },
        {
          title: "Diritto di recesso",
          href: "#",
        },
      ],

      footerIcons: [
        "icon fa-brands fa-square-twitter",
        "icon fa-brands fa-square-facebook",
        "icon fa-brands fa-square-instagram",
        "icon fa-brands fa-square-pinterest",
        "icon fa-brands fa-square-youtube",
      ],
    };
  },

  methods: {
    fetchArticles() {
      axios.get("http://localhost:3000/articles").then((response) => {
        this.articles = response.data;
      });
    },
  },

  created() {
    this.fetchArticles();
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <app-header :genders="headerGenders" :icons="headerIcons"></app-header>
  <app-main :articles="articles"></app-main>
  <app-footer :links="footerLinks" :icons="footerIcons"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
