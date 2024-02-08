<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Informazioni legali",
          href: "#",
        },
        {
          title: "Informativa sulla privacy",
          href: "#",
        },
        {
          title: "Diritto di recesso",
          href: "#",
        },
      ],

      icons: [
        "icon fa-brands fa-square-twitter",
        "icon fa-brands fa-square-facebook",
        "icon fa-brands fa-square-instagram",
        "icon fa-brands fa-square-pinterest",
        "icon fa-brands fa-square-youtube",
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="left-box">
        <h6>Boolando srl</h6>
        <ul>
          <li v-for="link in links">
            <a :href="link.href">{{ link.title }}</a>
          </li>
        </ul>
      </div>
      <div class="right-box">
        <span>Trovaci anche su</span>
        <div class="icons">
          <i v-for="icon in icons" :class="icon"></i>
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
