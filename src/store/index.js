import { reactive } from "vue";

export const store = reactive({
  apiUri: "http://localhost:3000",

  getImagePath(img) {
    return new URL(`../assets/images/img/${img}`, import.meta.url).href;
  },

  modal: {
    show: false,
    brand: "",
    model: "",
    fullPrice: "",
    finalPrice: "",
    discount: "",
    isSostenibility: "",
  },
});
