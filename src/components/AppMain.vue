<script>
export default {
  data() {
    return {
      articles: [
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
    };
  },

  methods: {
    getImagePath(img) {
      return new URL(`../assets/images/img/${img}`, import.meta.url).href;
    },

    reverseDisplayImage(i) {
      this.articles[i].displayImage = false;
    },

    resetStartDisplay(i) {
      this.articles[i].displayImage = !this.articles[i].displayImage;
    },
  },
};
</script>

<template>
  <div class="container">
    <div
      v-for="(article, index) in articles"
      @mouseenter="reverseDisplayImage(index)"
      @mouseleave="resetStartDisplay(index)"
      class="card"
    >
      <img
        v-if="article.displayImage"
        :src="getImagePath(article.image)"
        alt=""
      />
      <img v-else :src="getImagePath(article.imageHover)" alt="" />
      <p>{{ article.brand }}</p>
      <h3>{{ article.model }}</h3>
      <span class="heart"><i class="fa-solid fa-heart"></i></span>
      <div class="info">
        <span v-if="article.discount" class="price">{{
          article.discount
        }}</span>
        <span v-if="article.isSostenibility" class="sostenibilità">{{
          article.isSostenibility
        }}</span>
      </div>
      <p>
        <span class="price-red"> {{ article.price }} € </span>
        <span v-if="article.priceDashed" class="price-dashed">
          {{ article.priceDashed }} €</span
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;

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
}
</style>
