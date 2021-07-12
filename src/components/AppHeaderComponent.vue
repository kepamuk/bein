<template>
  <div>
    <div
      class="burger-menu js-burger-menu"
      :class="{ 'js-active': isMenuShow }"
    >
      <div class="container">
        <div class="burger-menu__header">
          <div class="burger-menu__header-left">
            <a href="#" class="header__logo">
              <img src="/images/logo.svg" alt="" />
            </a>
          </div>

          <div class="burger-menu__header-right">
            <div class="header-login">
              <div
                class="header-login__wrapper js-header-login"
                :class="{ 'js-active': isShowUserMenu }"
                @click="showUserMenu()"
                ref="toogleUserMenu"
              >
                <div class="header-login__img">
                  <img src="/images/avatar-user.png" alt="" />
                </div>
                <div class="header-login__mail">
                  <span> Xolxllz@gmail.com </span>
                  <svg>
                    <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                  </svg>
                </div>
              </div>
              <div
                class="header-login__dropdown"
                :class="{ 'js-active': isShowUserMenu }"
              >
                <div class="header-login__dropdown-wrap">
                  <nuxt-link to="/keeping" href="#"> My wallet </nuxt-link>
                  <a href="#"> Exit </a>
                </div>
              </div>
            </div>
            <a
              href="#"
              class="btn-blue-border js-btn-login-popup"
              style="display: none"
            >
              <span>Log in</span>
            </a>
            <div
              class="header__btn-burger js-btn-burger-close"
              @click="menuHide"
            >
              <svg>
                <use xlink:href="/images/icons/icons.svg#close-burger"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="burger-menu__wrapper header-menu">
          <ul>
            <li class="drop-down js-dropdown">
              <span @click="showLearnMob()" ref="toggleLearnMob">
                Learn
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                </svg>
              </span>
              <div
                class="drop-down__content js-dropdown-drop"
                :class="{ 'js-active': isShowLearnMob }"
              >
                <nuxt-link to="/learn-overview"> Overview </nuxt-link>
                <nuxt-link to="/learn-using"> Using </nuxt-link>
                <nuxt-link to="/learn-history"> History </nuxt-link>
                <nuxt-link to="/learn-impact"> Impact </nuxt-link>
              </div>
            </li>
            <li>
              <a href=""> F.A.Q </a>
            </li>
            <li>
              <a href=""> News </a>
            </li>
            <li class="drop-down js-dropdown">
              <span @click="showProductsMob()" ref="toggleProductsMob">
                Products
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                </svg>
              </span>
              <div
                class="drop-down__content js-dropdown-drop"
                :class="{ 'js-active': isShowProductsMob }"
              >
                <nuxt-link to="/keeping"> Wallet </nuxt-link>
                <nuxt-link to="/profits"> HODL </nuxt-link>
                <nuxt-link to="/coin"> Be in Coins </nuxt-link>
                <nuxt-link to="/bein-payments"> Be in Payments </nuxt-link>
                <nuxt-link to="/bein-card"> Be in Card </nuxt-link>
                <nuxt-link to="/raffie"> Giveaway </nuxt-link>
                <nuxt-link to="/trade-page"> Trading </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="burger-menu__btn">
          <button
            @click="$modal.show('modal-register')"
            class="btn-blue js-btn-register-popup"
          >
            <span> Register </span>
          </button>
        </div>
      </div>
    </div>
    <div
      class="header js-header"
      :class="
        $route.name === 'news' || $route.name === 'one-news' ? 'grey' : ''
      "
    >
      <div class="container">
        <div class="header__wrapper">
          <nuxt-link to="/" class="header__logo">
            <svg
              width="112"
              height="70"
              viewBox="0 0 112 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="52.75"
                y="10.75"
                width="48.5"
                height="48.5"
                rx="7.25"
                stroke="url(#paint0_linear)"
                stroke-width="1.5"
              />
              <g opacity="0.5" filter="url(#filter0_f)">
                <rect
                  x="52.75"
                  y="10.75"
                  width="48.5"
                  height="48.5"
                  rx="7.25"
                  stroke="url(#paint1_linear)"
                  stroke-width="1.5"
                />
              </g>
              <g opacity="0.5" filter="url(#filter1_f)">
                <rect
                  x="52.75"
                  y="10.75"
                  width="48.5"
                  height="48.5"
                  rx="7.25"
                  stroke="url(#paint2_linear)"
                  stroke-width="1.5"
                />
              </g>
              <path
                class="grey"
                d="M68.932 24.68C68.596 25.016 68.188 25.184 67.708 25.184C67.228 25.184 66.82 25.016 66.484 24.68C66.148 24.344 65.98 23.936 65.98 23.456C65.98 22.976 66.148 22.568 66.484 22.232C66.82 21.896 67.228 21.728 67.708 21.728C68.188 21.728 68.596 21.896 68.932 22.232C69.268 22.568 69.436 22.976 69.436 23.456C69.436 23.936 69.268 24.344 68.932 24.68ZM66.52 47V29H68.896V47H66.52ZM82.362 28.568C84.546 28.568 86.262 29.24 87.51 30.584C88.782 31.904 89.418 33.692 89.418 35.948V47H87.042V35.948C87.042 34.34 86.61 33.092 85.746 32.204C84.906 31.316 83.706 30.872 82.146 30.872C80.418 30.872 79.014 31.424 77.934 32.528C76.854 33.608 76.314 35.288 76.314 37.568V47H73.938V29H76.314V31.808C77.658 29.648 79.674 28.568 82.362 28.568Z"
                fill="white"
              />
              <path
                class="grey"
                d="M12.168 28.568C14.736 28.568 16.92 29.48 18.72 31.304C20.544 33.128 21.456 35.36 21.456 38C21.456 40.64 20.544 42.872 18.72 44.696C16.92 46.52 14.736 47.432 12.168 47.432C8.976 47.432 6.552 46.112 4.896 43.472V47H2.52V21.8H4.896V32.528C6.552 29.888 8.976 28.568 12.168 28.568ZM6.948 43.076C8.316 44.444 9.996 45.128 11.988 45.128C13.98 45.128 15.66 44.444 17.028 43.076C18.396 41.684 19.08 39.992 19.08 38C19.08 36.008 18.396 34.328 17.028 32.96C15.66 31.568 13.98 30.872 11.988 30.872C9.996 30.872 8.316 31.568 6.948 32.96C5.58 34.328 4.896 36.008 4.896 38C4.896 39.992 5.58 41.684 6.948 43.076ZM33.7227 28.568C36.3867 28.568 38.5347 29.516 40.1667 31.412C41.8227 33.284 42.6507 35.504 42.6507 38.072C42.6507 38.336 42.6267 38.708 42.5787 39.188H26.7747C27.0147 41.012 27.7827 42.464 29.0787 43.544C30.3987 44.6 32.0187 45.128 33.9387 45.128C35.3067 45.128 36.4827 44.852 37.4667 44.3C38.4747 43.724 39.2307 42.98 39.7347 42.068L41.8227 43.292C41.0307 44.564 39.9507 45.572 38.5827 46.316C37.2147 47.06 35.6547 47.432 33.9027 47.432C31.0707 47.432 28.7667 46.544 26.9907 44.768C25.2147 42.992 24.3267 40.736 24.3267 38C24.3267 35.312 25.2027 33.068 26.9547 31.268C28.7067 29.468 30.9627 28.568 33.7227 28.568ZM33.7227 30.872C31.8507 30.872 30.2787 31.436 29.0067 32.564C27.7587 33.668 27.0147 35.108 26.7747 36.884H40.2027C39.9627 34.988 39.2307 33.512 38.0067 32.456C36.7827 31.4 35.3547 30.872 33.7227 30.872Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_f"
                  x="48"
                  y="6"
                  width="58"
                  height="58"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur"
                  />
                </filter>
                <filter
                  id="filter1_f"
                  x="42"
                  y="0"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5"
                    result="effect1_foregroundBlur"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="77"
                  y1="10"
                  x2="77"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4D7EFF" />
                  <stop
                    offset="0.848958"
                    stop-color="#4D7EFF"
                    stop-opacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="77"
                  y1="10"
                  x2="77"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4D7EFF" />
                  <stop
                    offset="0.848958"
                    stop-color="#4D7EFF"
                    stop-opacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="77"
                  y1="10"
                  x2="77"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4D7EFF" />
                  <stop
                    offset="0.848958"
                    stop-color="#4D7EFF"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
          </nuxt-link>
          <div class="header__right">
            <div
              class="header__menu header-menu"
              :class="
                $route.name === 'news' || $route.name === 'one-news'
                  ? 'grey'
                  : ''
              "
            >
              <ul>
                <li class="drop-down js-dropdown">
                  <span @click.prevent="showLearn" ref="toggleLearn">
                    Learn
                    <svg>
                      <use
                        xlink:href="/images/icons/icons.svg#arrow-right"
                      ></use>
                    </svg>
                  </span>
                  <div
                    class="drop-down__content js-dropdown-drop"
                    :class="{ 'js-active': isShowLearn }"
                  >
                    <nuxt-link to="/learn-overview"> Overview </nuxt-link>
                    <nuxt-link to="/learn-using"> Using </nuxt-link>
                    <nuxt-link to="/learn-history"> History </nuxt-link>
                    <nuxt-link to="/learn-impact"> Impact </nuxt-link>
                  </div>
                </li>
                <li class="js-active">
                  <nuxt-link to="/faq"> F.A.Q </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/news"> News </nuxt-link>
                </li>
                <li class="drop-down js-dropdown">
                  <span @click.prevent="showProducts" ref="toggleProducts">
                    Products
                    <svg>
                      <use
                        xlink:href="/images/icons/icons.svg#arrow-right"
                      ></use>
                    </svg>
                  </span>
                  <div
                    class="drop-down__content js-dropdown-drop"
                    :class="{ 'js-active': isShowProducts }"
                  >
                    <nuxt-link to="/keeping"> Wallet </nuxt-link>
                    <nuxt-link to="/profits"> HODL </nuxt-link>
                    <nuxt-link to="/coin"> Be in Coins </nuxt-link>
                    <nuxt-link to="/bein-payments"> Be in Payments </nuxt-link>
                    <nuxt-link to="/bein-card"> Be in Card </nuxt-link>
                    <nuxt-link to="/raffie"> Giveaway </nuxt-link>
                    <nuxt-link to="/trade-page"> Trading </nuxt-link>
                  </div>
                </li>
              </ul>
            </div>
            <div class="header__btn blue">
              <button
                @click="$modal.show('modal-login')"
                class="btn-blue-border js-btn-login-popup"
              >
                <span>Log in</span>
              </button>
              <button
                @click="$modal.show('modal-register')"
                class="btn-blue js-btn-register-popup"
              >
                <span>Register</span>
              </button>
              <!-- <div class="header__btn-burger js-btn-burger">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#burger"></use>
                </svg>
              </div> -->
            </div>
            <!-- <div class="header-login">
              <div class="header-login__wrapper js-header-login">
                <div class="header-login__img">
                  <img src="/images/avatar-user.png" alt="" />
                </div>
                <div class="header-login__mail">
                  <span> Xolxllz@gmail.com </span>
                  <svg>
                    <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                  </svg>
                </div>
              </div>
              <div class="header-login__dropdown">
                <div class="header-login__dropdown-wrap">
                  <a href="#"> My wallet </a>
                  <a href="#"> Exit </a>
                </div>
              </div>
            </div> -->
            <div @click="menuShow" class="header__btn-burger js-btn-burger">
              <svg>
                <use xlink:href="/images/icons/icons.svg#burger"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal
      name="modal-login"
      width="90%"
      :maxWidth="500"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <login></login>
    </modal>
    <modal
      name="modal-register"
      width="90%"
      :maxWidth="814"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <register></register>
    </modal>
    <modal
      name="settings-step-form"
      width="90%"
      :maxWidth="744"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <settingsStepForm></settingsStepForm>
    </modal>
    <modal
      name="modal-reset-password"
      width="90%"
      :maxWidth="500"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <passwordReset :login="true"></passwordReset>
    </modal>
    <modal
      name="modal-reset-password-varification"
      width="90%"
      :maxWidth="540"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <passwordResetVarification :login="true"></passwordResetVarification>
    </modal>
    <modal
      name="modal-two-factor-auth"
      width="90%"
      :maxWidth="650"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <twoFactorAuth></twoFactorAuth>
    </modal>
    <modal
      name="modal-two-factor-code"
      width="90%"
      :maxWidth="500"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <twoFactorCode></twoFactorCode>
    </modal>
    <modal
      name="modal-two-factor-gauth"
      width="90%"
      :maxWidth="500"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <twoFactorGAuth></twoFactorGAuth>
    </modal>
    <modal
      name="modal-terms"
      width="90%"
      :maxWidth="960"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <termsOfService></termsOfService>
    </modal>
    <modal
      name="modal-ask-question"
      width="90%"
      :maxWidth="465"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <askAQuestion></askAQuestion>
    </modal>
    <modal
      name="modal-notification"
      width="90%"
      :maxWidth="607"
      height="auto"
      :scrollable="false"
      :adaptive="true"
    >
      <notificationStepForm></notificationStepForm>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowLearn: false,
      isShowProducts: false,
      isShowLearnMob: false,
      isShowProductsMob: false,
      isMenuShow: false,
      isShowUserMenu: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", function () {
      let header = document.getElementsByClassName("js-header")[0];
      if (window.scrollY > 30) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    });
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    // document
    //   .querySelector(".js-burger-menu .js-dropdown-drop")
    //   .addEventListener("click", function () {
    //     console.log("f");
    //     this.menuHide();
    //   });
  },
  created() {
    window.addEventListener("click", this.close);
  },
  methods: {
    showLearnMob() {
      this.isShowLearnMob = true;
      this.isShowProductsMob = false;
    },
    showProductsMob() {
      this.isShowProductsMob = !this.isShowProductsMob;
      this.isShowLearnMob = false;
    },
    showLearn() {
      this.isShowLearn = !this.isShowLearn;
      this.isShowProducts = false;
    },
    showProducts() {
      this.isShowProducts = !this.isShowProducts;
      this.isShowLearn = false;
    },
    close(e) {
      if (!this.$refs.toggleLearn.contains(e.target)) {
        this.isShowLearn = false;
      }
      if (!this.$refs.toggleProducts.contains(e.target)) {
        this.isShowProducts = false;
      }
      if (!this.$refs.toggleLearnMob.contains(e.target)) {
        this.isShowLearnMob = false;
      }
      if (!this.$refs.toggleProductsMob.contains(e.target)) {
        this.isShowProductsMob = false;
      }
      if (!this.$refs.toogleUserMenu.contains(e.target)) {
        this.isShowUserMenu = false;
      }
    },
    menuShow() {
      this.isMenuShow = true;
      document.querySelector("body").classList.add("fixed");
    },
    menuHide() {
      console.log("hide");
      this.isMenuShow = false;
      document.querySelector("body").classList.remove("fixed");
    },
    showUserMenu() {
      this.isShowUserMenu = !this.isShowUserMenu;
    },
  },
};
</script>
<style lang="scss">
.js-dropdown-drop {
  &.js-active {
    display: block;
  }
}
.header-login__dropdown {
  &.js-active {
    display: block;
  }
}
</style>
