<script>
export default {
  data() {
    return {
      display: true,
    };
  },

  props: {
    brand: String,
    model: String,
    price: String,
    priceDashed: String,
    image: String,
    imageHover: String,
    discount: String,
    isSostenibility: String,
    isInFavorite: Boolean,
  },

  methods: {
    getImagePath(img) {
      return new URL(`../assets/images/img/${img}`, import.meta.url).href;
    },

    reverseDisplayImage() {
      this.display = false;
    },

    resetStartDisplay() {
      this.display = !this.display;
    },
  },
};
</script>

<template>
  <div
    @mouseenter="reverseDisplayImage()"
    @mouseleave="resetStartDisplay()"
    class="card"
  >
    <img v-if="this.display" :src="getImagePath(image)" :alt="model" />
    <img v-else :src="getImagePath(imageHover)" :alt="model" />
    <p>{{ brand }}</p>
    <h3>{{ model }}</h3>
    <span class="heart"
      ><i
        :class="isInFavorite == true ? 'heart-red' : 'heart-void'"
        class="fa-solid fa-heart"
      ></i
    ></span>
    <div class="info">
      <span v-if="discount" class="price">{{ discount }}</span>
      <span v-if="isSostenibility" class="sostenibilità">{{
        isSostenibility
      }}</span>
    </div>
    <p>
      <span class="price-red"> {{ price }} € </span>
      <span v-if="priceDashed" class="price-dashed"> {{ priceDashed }} €</span>
    </p>
  </div>
</template>

<style lang="scss">
.card {
  width: calc((100% / 3) - 20px);
  height: 560px;
  margin: 10px;
  position: relative;

  .heart {
    display: inline-block;
    font-size: 1rem;
    background-color: white;
    padding: 14px 14px;
    position: absolute;
    left: 88%;
    top: 10px;

    .heart-red {
      color: red;
    }

    .heart-void {
      color: lightgray;
    }
  }

  .info {
    position: absolute;
    bottom: 80px;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;

    .price {
      background-color: red;
      padding: 5px 10px;
      margin-right: 5px;
    }

    .sostenibilità {
      background-color: green;
      padding: 5px 10px;
    }
  }

  p {
    margin: 0;
    padding-top: 5px;

    .price-red {
      color: red;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .price-dashed {
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration-line: line-through;
    }
  }

  h3 {
    margin: 3px 0;
  }
}
</style>
