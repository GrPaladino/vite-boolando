<script>
import AppCard from "./AppCard.vue";

export default {
  props: {
    articles: Array,
  },

  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="container">
    <app-card
      v-for="article in articles"
      :brand="article.brand"
      :model="article.model"
      :price="article.price"
      :priceDashed="article.priceDashed"
      :image="article.image"
      :imageHover="article.imageHover"
      :discount="article.discount"
      :isSostenibility="article.isSostenibility"
      :isInFavorite="article.isInFavorites"
      :displayImage="article.displayImage"
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
