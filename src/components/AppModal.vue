<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    closeModal() {
      store.modal.show = false;
    },
  },
};
</script>

<template>
  <div class="layover">
    <div class="modal">
      <i @click="closeModal()" class="fa-solid fa-xmark icon"></i>
      <div class="img-container">
        <img :src="store.getImagePath(store.modal.image)" alt="" />
        <div class="info">
          <span v-if="store.modal.discount" class="price">{{
            store.modal.discount
          }}</span>
          <span v-if="store.modal.isSostenibility" class="sostenibilità">{{
            store.modal.isSostenibility
          }}</span>
        </div>
      </div>

      <div class="modal-info">
        <div>
          <h3>{{ store.modal.brand }}</h3>
          <h4>{{ store.modal.model }}</h4>
        </div>
        <div class="price">
          <p class="price-red">{{ store.modal.finalPrice }} €</p>
          <p v-if="store.modal.fullPrice" class="price-dashed">
            {{ store.modal.fullPrice }} €
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layover {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 50%;
    padding: 0.5rem;
    background-color: aliceblue;
    color: black;
    display: flex;
    position: relative;

    .icon {
      position: absolute;
      top: 9px;
      right: 15px;
      cursor: pointer;
    }

    .img-container {
      width: 50%;

      .info {
        position: absolute;
        bottom: 20px;
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
    }

    .modal-info {
      padding: 0 10px;
      display: flex;
      flex-direction: column;

      h3 {
        margin-top: 0;
      }

      .price {
        margin-top: 2rem;

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
    }
  }
}
</style>
