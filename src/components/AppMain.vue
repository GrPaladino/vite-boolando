<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";

export default {
  props: {
    articles: Array,
  },

  components: {
    AppCard,
  },

  methods: {
    handleModalOpen(articleIndex) {
      const selectedArticle = this.articles[articleIndex];

      if (selectedArticle) {
        store.modal.brand = selectedArticle.brand;
        store.modal.model = selectedArticle.model;
        store.modal.fullPrice = selectedArticle.priceDashed;
        store.modal.finalPrice = selectedArticle.price;
        store.modal.discount = selectedArticle.discount;
        store.modal.isSostenibility = selectedArticle.isSostenibility;
        store.modal.image = selectedArticle.image;

        store.modal.show = true;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <app-card
      v-for="(article, index) in articles"
      @modal-open="handleModalOpen"
      :article="article"
      :index="index"
    />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}
</style>
