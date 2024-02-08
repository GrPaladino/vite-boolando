<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="left-box">
        <h6>Boolando srl</h6>
        <ul>
          <li>
            <a href="#">Informazioni legali</a>
          </li>
          <li>
            <a href="#">Informativa sulla privacy</a>
          </li>

          <li>
            <a href="#">Diritto di recesso</a>
          </li>
        </ul>
      </div>
      <div class="right-box">
        <span>Trovaci anche su</span>
        <div class="icons">
          <i class="icon fa-brands fa-square-twitter"></i>
          <i class="icon fa-brands fa-square-facebook"></i>
          <i class="icon fa-brands fa-square-instagram"></i>
          <i class="icon fa-brands fa-square-pinterest"></i>
          <i class="icon fa-brands fa-square-youtube"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  margin-top: 20px;
  background-color: black;

  .container {
    padding: 30px 10px;
    color: white;
    display: flex;
    justify-content: space-between;

    .left-box {
      min-width: 200px;
      height: 100%;
      margin: 0 10px;

      h6 {
        font-size: 1rem;
        margin: 0;
      }

      li {
        margin-right: 8px;
        a {
          font-size: 0.6rem;
        }
      }
    }

    .right-box {
      text-align: end;
      font-size: 0.7rem;
      margin: 0 10px;

      .icons {
        font-size: 1rem;
        padding-top: 3px;

        .icon {
          margin-left: 3px;
        }
      }
    }
  }
}
</style>
