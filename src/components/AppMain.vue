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
    <app-card :articles="articles" />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}
</style>
