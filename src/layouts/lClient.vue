<template>
  <div id="app">
    <asideComponent></asideComponent>
    <main class="main_content">
      <vueCustomScrollbar class="page_wrapper">
        <nuxt />
      </vueCustomScrollbar>
    </main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "client",
  data() {
    return {
      documentWidth: null,
    };
  },
  computed: {
    ...mapGetters({
      getWindowWidth: "menu/getWindowWidth",
    }),
  },
  watch: {
    documentWidth(val) {
      this.$store.dispatch("menu/resizeWindow", val);
    },
  },
  mounted() {
    this.documentWidth = document.body.clientWidth;
    window.addEventListener("resize", () => {
      this.documentWidth = document.body.clientWidth;
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/partials/_colors.scss";
body {
  background-color: $bg-dark;
  color: $bg-dark;
}
#app {
  display: flex;
  width: 100%;
  height: 100vh;
}
.main_content {
  flex-grow: 1;
  padding: 10px 10px 10px 0px;
  @media (max-width: 1023px) {
    padding: 70px 0px 0px;
  }
}
.page_wrapper {
  border-radius: 55px;
  background-color: $bg-light;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-shadow: inset 12px 0px 40px rgba($black, 0.25);
  background-image: url("/images/client/page_bg.svg");
  background-position: right center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 850px;
  @media (max-width: 1700px) {
    background-size: 500px;
    padding: 40px 40px;
  }
  @media (max-height: 850px) {
    padding: 40px 40px;
    border-radius: 30px;
    box-shadow: inset 12px 0px 30px rgba($black, 0.25);
  }
  @media (max-width: 1023px) {
    border-radius: 55px 55px 0px 0px;
    box-shadow: inset 0px 12px 20px rgba($black, 0.25);
  }
  @media (max-width: 767px) {
    border-radius: 30px 30px 0px 0px;
    padding: 40px 20px;
  }
}
</style>
