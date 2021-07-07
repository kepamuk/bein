<template>
  <aside class="aside">
    <div class="aside__header">
      <div class="logo">
        <nuxt-link to="/"><img src="/images/logo_main.svg" alt="" /></nuxt-link>
      </div>
      <div
        id="hamburger"
        :class="{ opened: getMenuState }"
        @click="toggleNavigation()"
      >
        <span></span>
      </div>
    </div>
    <div class="aside__body" v-if="getMenuState">
      <nav id="nav">
        <ul>
          <li
            v-for="(route, idx) in getAllRoutes"
            :key="route.path"
            @click="toggleNavigation"
          >
            <nuxt-link
              :to="route.path"
              class="nav__link"
              v-if="route.meta && idx <= 6"
            >
              <span class="nav_icon" v-if="route.meta.icon">
                <i :class="route.meta.icon"></i>
              </span>
              {{ route.meta.linkText }}
              <span
                class="notifications_number"
                v-if="route.meta.notifications"
              >
                {{ route.meta.notifications }}
              </span>
            </nuxt-link>
          </li>
        </ul>
        <div class="more_links text-center">
          <div class="more_links__title">
            <i class="icon-more"></i>
            <p>More</p>
          </div>
          <div class="more_links__dropdown">
            <div
              class="more_links__item"
              v-for="(route, idx) in getAllRoutes"
              :key="route.path"
              @click="toggleNavigation"
            >
              <nuxt-link
                :to="route.path"
                class="nav__link"
                v-if="route.meta && idx > 6"
              >
                <span class="nav_icon" v-if="route.meta && route.meta.icon">
                  <i :class="route.meta.icon"></i>
                </span>
                <span class="more_links__text">{{ route.meta.linkText }}</span>
                <span
                  class="notifications_number"
                  v-if="route.meta && route.meta.notifications"
                >
                  {{ route.meta.notifications }}
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </nav>
      <div class="aside__footer">
        <div class="logout">
          <button type="button" class="logout_btn">
            <i class="icon-logout"></i>
            <span class="logout_btn__text">Log out</span>
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import { mapGetters } from "vuex";
import { LANG } from "@/helpers/language";
export default {
  name: "asideComponent",
  data() {
    return {
      menuOpen: false,
      // getMenuState: true,
      getAllRoutes: [
        {
          path: "/",
          name: "Dashboard",
          meta: {
            linkText: LANG.nav.dashboard.eng,
            icon: "icon-wallet",
          },
        },
        {
          path: "/wallets",
          name: "Wallets",
          meta: {
            linkText: LANG.nav.wallets.eng,
            icon: "icon-wallets",
          },
        },
        {
          path: "/exchange",
          name: "Exchange",
          meta: {
            linkText: LANG.nav.exchange.eng,
            icon: "icon-dollar-bitcoin",
          },
        },
        {
          path: "/earnings",
          name: "Earnings",
          meta: {
            linkText: LANG.nav.earnings.eng,
            icon: "icon-exchange",
            notifications: 2,
          },
        },
        {
          path: "/trading",
          name: "Trading",
          meta: {
            linkText: LANG.nav.trading.eng,
            icon: "icon-candlestick-chart",
          },
        },
        {
          path: "/giveaway",
          name: "Giveaway",
          meta: {
            linkText: LANG.nav.giveaway.eng,
            icon: "icon-leaderboard",
          },
        },
        {
          path: "/exchange-history",
          name: "Exchange History",
        },
        {
          path: "/support",
          name: "Support",
          meta: {
            linkText: LANG.nav.support.eng,
            icon: "icon-about",
          },
        },
        {
          path: "/settings",
          name: "Settings",
          meta: {
            linkText: LANG.nav.settings.eng,
            icon: "icon-settings",
          },
        },
        {
          path: "/notifications",
          name: "Notifications",
          meta: {
            linkText: LANG.nav.notifications.eng,
            icon: "icon-notification",
            notifications: 2,
          },
        },
        {
          path: "/login",
          name: "Login",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getMenuState: "menu/getMenuState",
      getWindowWidth: "menu/getWindowWidth",
    }),
  },
  methods: {
    toggleNavigation() {
      if (this.getWindowWidth < 1024) {
        this.menuOpen = !this.menuOpen;
        this.$store.dispatch("menu/changeMenuState", this.menuOpen);
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/partials/_colors.scss";
.aside {
  width: 165px;
  flex: 0 0 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba($white, 0.6);
  padding: 25px 0px 50px;
  @media (max-height: 900px) {
    width: 120px;
    flex: 0 0 120px;
    padding: 25px 0px;
  }
  @media (max-width: 1300px) {
    width: 100px;
    flex: 0 0 100px;
    padding: 25px 0px;
  }
  @media (max-width: 1023px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $bg-dark;
    z-index: 999;
    height: auto;
    padding: 15px 0px;
    max-height: 100vh;
    overflow: auto;
  }
  &__header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    @media (max-width: 1023px) {
      justify-content: space-between;
    }

    #hamburger {
      display: none;
      @media (max-width: 1023px) {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 36px;
        height: 30px;
      }
      span {
        position: relative;
        display: block;
        width: 28px;
        height: 2px;
        background-color: $white;
        cursor: pointer;
        &::before,
        &::after {
          content: "";
          position: absolute;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: $white;
          transition: transform 0.2s ease, top 0.2s 0.2s ease;
        }
        &::before {
          top: -6px;
        }
        &::after {
          top: 6px;
        }
      }
      &.opened {
        span {
          background-color: transparent;
          &::before,
          &::after {
            top: 0px;
            transition: top 0.2s ease, transform 0.2s 0.2s ease;
          }
          &::before {
            transform: rotate(45deg);
          }
          &::after {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    @media (max-width: 1300px) {
      padding: 0px 10px;
    }
    @media (max-width: 1023px) {
      width: 100%;
      padding: 0px;
    }
  }
  &__footer {
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 1023px) {
      justify-content: flex-start;
      padding-top: 30px;
    }
  }
  a {
    &:hover {
      color: $white;
    }
  }
  .logo {
    display: block;
    width: 53px;
    font-size: 32px;
    line-height: 1;
    color: $white;
    text-align: center;
    @media (max-width: 1700px) {
      width: 40px;
    }
    @media (max-height: 900px) {
      font-size: 28px;
    }
    a {
      display: block;
    }
    span {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.625em;
      height: 1.625em;
      background-image: $gradient;
      border-radius: 8px;
      margin-left: 3px;
      z-index: 1;
      &:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border-radius: 7px;
        background-color: $bg-dark;
        z-index: -1;
      }
    }
  }
  #nav {
    width: 100%;
    flex-grow: 1;
    padding-top: 60px;
    @media (max-height: 900px) {
      padding-top: 30px;
    }
    li {
      margin-bottom: 8px;
      &:empty {
        display: none;
      }
      @media (max-height: 900px) {
        margin-bottom: 0px;
      }
    }
    a {
      position: relative;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 12px;
      border-radius: 8px;
      line-height: 1;
      font-weight: 600;
      font-size: 14px;
      @media (max-height: 900px) {
        padding: 8px 12px;
        font-size: 14px;
      }
      @media (max-width: 1300px) {
        font-size: 10px;
      }
      @media (max-width: 1023px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 15px 12px;
        font-size: 16px;
      }
      .notifications_number {
        position: absolute;
        top: 8px;
        left: 55%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 1.5em;
        height: 1.5em;
        background-image: $gradient;
        font-size: 16px;
        line-height: 1;
        color: $white;
        @media (max-height: 900px) {
          font-size: 12px;
        }
        @media (max-width: 1300px) {
          font-size: 10px;
        }
        @media (max-width: 1023px) {
          position: static;
          transform: translate(5px, -5px);
        }
      }
      .nav_icon {
        font-size: 32px;
        display: flex;
        justify-content: center;
        flex-grow: 1;
        margin-bottom: 10px;
        @media (max-height: 900px) {
          font-size: 24px;
          margin-bottom: 5px;
        }
        @media (max-width: 1300px) {
          font-size: 20px;
        }
        @media (max-width: 1023px) {
          flex-grow: 0;
          margin-bottom: 0px;
          margin-right: 10px;
          font-size: 24px;
        }
      }
    }
    .more_links {
      position: relative;
      z-index: 1;
      margin-top: 10px;
      @media (max-width: 1023px) {
        margin-top: 0px;
      }
      &__title {
        @media (max-width: 1023px) {
          display: none;
        }
      }
      &__dropdown {
        position: absolute;
        bottom: calc(100% + 20px);
        left: 50%;
        background-color: #2b3038;
        border-radius: 8px 8px 8px 0px;
        padding: 5px 0px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: 0.3s ease;
        transition-property: transform, opacity;
        @media (max-width: 1023px) {
          position: relative;
          opacity: 1;
          visibility: visible;
          transform: none;
          left: 0px;
          bottom: 0px;
          background-color: transparent;
          padding: 0px;
        }
        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 0px;
          width: 32px;
          height: 26px;
          background-image: url("/images/corner-top.svg");
          background-position: left top;
          background-repeat: no-repeat;
          background-size: contain;
          @media (max-width: 1023px) {
            display: none;
          }
        }
      }
      &:hover {
        .more_links__dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0px);
        }
      }
      &__item {
        &:empty {
          display: none;
        }
        .nav__link {
          flex-direction: row;
          text-align: left;
          align-items: center;
          padding: 10px 20px;
          @media (max-width: 1023px) {
            padding: 15px 12px;
          }
          .nav_icon {
            flex-grow: 0;
            font-size: 24px;
            margin-bottom: 0px;
            margin-right: 15px;
          }
          .notifications_number {
            position: relative;
            top: auto;
            left: auto;
            margin-left: 15px;
            @media (max-width: 1023px) {
              margin-left: 5px;
            }
          }
        }
      }
      &__text {
        flex-grow: 1;
        @media (max-width: 1023px) {
          flex-grow: 0;
        }
      }
    }
    .nuxt-link-exact-active {
      color: $white;
      background-image: $gradient;
      @media (max-width: 1023px) {
        border-radius: 0;
      }
    }
  }
  .logout_btn {
    font-size: 32px;
    display: flex;
    align-items: center;
    @media (max-height: 900px) {
      font-size: 24px;
    }
    &__text {
      display: none;
      font-size: 14px;
      margin-left: 10px;
      @media (max-width: 1023px) {
        display: block;
      }
    }
    &:hover {
      color: $white;
    }
  }
}
</style>
