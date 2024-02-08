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
        },

        {
          brand: "Guess",
          model: "ROSES TEE",
          price: "20,99",
          priceDashed: "29,99",
          image: "2.webp",
          imageHover: "2b.webp",
        },

        {
          brand: "Come Zucchero Filato",
          model: "VOGLIA DI COLORI PASTELLO",
          price: "129,99",
          priceDashed: "184,99",
          image: "3.webp",
          imageHover: "3b.webp",
        },

        {
          brand: "Levi's",
          model: "TEE UNISEX",
          price: "14,99",
          priceDashed: "29,99",
          image: "4.webp",
          imageHover: "4b.webp",
        },

        {
          brand: "Maya Deluxe",
          model: "STRIPE BODICE",
          price: "99,99",
          image: "5.webp",
          imageHover: "5b.webp",
        },

        {
          brand: "Espirit",
          model: "MAGLIONE - BLACK",
          price: "29,99",
          image: "6.webp",
          imageHover: "6b.webp",
        },
      ],
    };
  },

  methods: {
    getImagePath(img) {
      return new URL(`../assets/images/img/${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="container">
    <div v-for="article in articles" class="card">
      <img :src="getImagePath(article.image)" alt="" />
      <p>{{ article.brand }}</p>
      <h3>{{ article.model }}</h3>
      <span class="heart"><i class="fa-solid fa-heart"></i></span>
      <div class="info">
        <span class="price">-50%</span>
        <span class="sostenibilità">Sostenibilità</span>
      </div>
      <p>
        <span class="price-red"> {{ article.price }} € </span>
        <span class="price-dashed"> {{ article.priceDashed }} </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;

  .card {
    width: calc((100% / 3) - 20px);
    height: 600px;
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
      bottom: 160px;
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
