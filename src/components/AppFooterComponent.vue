<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__left">
          <nuxt-link to="/" class="footer__logo">
            <img src="/images/logo.svg" alt="" />
          </nuxt-link>
          <div class="footer__contact">
            <a href="mailto:info@beinxrp.com">info@beinxrp.com</a>
            <a href="mailto:support@beinxrp.com">support@beinxrp.com</a>
            <a href="mailto:advertising@beinxrp.com">advertising@beinxrp.com</a>
          </div>
        </div>
        <div class="footer__main footer-main">
          <div class="footer-main__col">
            <div class="footer-main__title title">Learn</div>
            <div class="footer-main__list">
              <nuxt-link to="/learn-overview"> Overview </nuxt-link>
              <nuxt-link to="/learn-using"> Using </nuxt-link>
              <nuxt-link to="/learn-history"> History </nuxt-link>
              <nuxt-link to="/learn-impact"> Impact </nuxt-link>
            </div>
          </div>
          <div class="footer-main__col">
            <div class="footer-main__title title">Products</div>
            <div class="footer-main__list">
              <nuxt-link to="/keeping"> Wallet </nuxt-link>
              <nuxt-link to="/profits"> HODL </nuxt-link>
              <nuxt-link to="/coin"> Be in Coins </nuxt-link>
              <nuxt-link to="/bein-payments"> Be in Payments </nuxt-link>
              <nuxt-link to="/bein-card"> Be in Card </nuxt-link>
              <nuxt-link to="/raffie"> Giveaway </nuxt-link>
              <nuxt-link to="/trade-page"> Trading </nuxt-link>
            </div>
          </div>
          <div class="footer-main__col">
            <div class="footer-main__title title">Other</div>
            <div class="footer-main__list">
              <nuxt-link to="/news"> News </nuxt-link>
              <nuxt-link to="/faq"> F.A.Q </nuxt-link>
            </div>
          </div>
        </div>
        <div class="footer__right footer-question">
          <div class="footer-question__title">Have any questions?</div>
          <div class="footer-question__text">Ask them now!</div>
          <button
            @click="$modal.show('modal-ask-question')"
            class="footer-question__btn btn-blue-shadow js-btn-popup-ask"
          >
            <span>Ask a question</span>
          </button>
        </div>
      </div>
      <div class="footer-coins">
        <div class="footer-coins__title">Available coins</div>
        <div class="footer-coins__content">
          <img src="/images/avialable-assets/1.png" alt="" />
          <img src="/images/avialable-assets/2.png" alt="" />
          <img src="/images/avialable-assets/3.png" alt="" />
          <img src="/images/avialable-assets/4.png" alt="" />
          <img src="/images/avialable-assets/5.png" alt="" />
          <img src="/images/avialable-assets/6.png" alt="" />
          <img src="/images/avialable-assets/7.png" alt="" />
          <img src="/images/avialable-assets/8.png" alt="" />
          <img src="/images/avialable-assets/9.png" alt="" />
          <img src="/images/avialable-assets/10.png" alt="" />
          <img src="/images/avialable-assets/11.png" alt="" />
          <img src="/images/avialable-assets/12.png" alt="" />
          <img src="/images/avialable-assets/13.png" alt="" />
          <img src="/images/avialable-assets/14.png" alt="" />
          <img src="/images/avialable-assets/15.png" alt="" />
          <img src="/images/avialable-assets/16.png" alt="" />
          <img src="/images/avialable-assets/17.png" alt="" />
          <img src="/images/avialable-assets/18.png" alt="" />
          <img src="/images/avialable-assets/19.png" alt="" />
          <img src="/images/avialable-assets/20.png" alt="" />
        </div>
      </div>
      <div class="footer__bottom">
        <span> © Copyright . Be in XRP, 2021 | All rights reserved </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
