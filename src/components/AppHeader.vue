<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#">Donna</a>
          </li>

          <li>
            <a href="#">Uomo</a>
          </li>

          <li>
            <a href="#">Bambino</a>
          </li>
        </ul>
      </nav>
      <div class="logo">
        <img
          src="../assets/images/img/boolean-logo.png"
          alt="Logo"
          class="logo"
        />
      </div>
      <nav class="link">
        <ul>
          <li>
            <a href="#"><i class="fa-regular fa-user"></i></a>
          </li>

          <li>
            <a href="#"><i class="fa-regular fa-heart"></i></a>
          </li>

          <li>
            <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
header {
  height: 100px;
  background-color: #ff6800;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    ul {
      display: flex;

      li {
        margin: 0 10px;

        a {
          color: white;
        }
      }
    }

    .logo {
      max-width: 150px;
    }
  }
}
</style>
