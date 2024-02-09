<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

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

      mainArticles: [
        {
          brand: "Levi's",
          model: "RELAXED FIT TEE UNISEX",
          price: "14,99",
          priceDashed: "29,99",
          image: "1.webp",
          imageHover: "1b.webp",
          discount: "-50%",
          isSostenibility: "Sostenibilità",
          displayImage: true,
        },

        {
          brand: "Guess",
          model: "ROSES TEE",
          price: "20,99",
          priceDashed: "29,99",
          image: "2.webp",
          imageHover: "2b.webp",
          discount: "30%",
          displayImage: true,
        },

        {
          brand: "Come Zucchero Filato",
          model: "VOGLIA DI COLORI PASTELLO",
          price: "129,99",
          priceDashed: "184,99",
          image: "3.webp",
          imageHover: "3b.webp",
          discount: "-30%",
          isSostenibility: "Sostenibilità",
          displayImage: true,
        },

        {
          brand: "Levi's",
          model: "TEE UNISEX",
          price: "14,99",
          priceDashed: "29,99",
          image: "4.webp",
          imageHover: "4b.webp",
          discount: "-50%",
          displayImage: true,
        },

        {
          brand: "Maya Deluxe",
          model: "STRIPE BODICE",
          price: "99,99",
          image: "5.webp",
          imageHover: "5b.webp",
          displayImage: true,
        },

        {
          brand: "Espirit",
          model: "MAGLIONE - BLACK",
          price: "29,99",
          image: "6.webp",
          imageHover: "6b.webp",
          isSostenibility: "Sostenibilità",
          displayImage: true,
        },
      ],

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

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <app-header :genders="headerGenders" :icons="headerIcons"></app-header>
  <app-main :articles="mainArticles"></app-main>
  <app-footer :links="footerLinks" :icons="footerIcons"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
