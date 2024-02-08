<script>
export default {
  data() {
    return {
      genders: [
        {
          sex: "Donna",
          href: "#",
        },
        {
          sex: "Uomo",
          href: "#",
        },
        {
          sex: "Bambino",
          href: "#",
        },
      ],

      icons: [
        {
          class: "fa-regular fa-user",
          href: "#",
        },
        {
          class: "fa-regular fa-heart",
          href: "#",
        },
        {
          class: "fa-regular fa-bag-shopping",
          href: "#",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li v-for="gender in genders">
            <a :href="gender.href">{{ gender.sex }}</a>
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
          <li v-for="icon in icons">
            <a :href="icon.href"><i :class="icon.class"></i></a>
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
      }
    }

    .logo {
      max-width: 150px;
    }
  }
}
</style>
