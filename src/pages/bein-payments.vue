<template>
  <div>
    <div class="faq-header-block keeping bein-payments-blcok">
      <div class="container">
        <div class="faq-header-block__wrapper">
          <div class="faq-header-block__left bein-payments-blcok__left">
            <div class="bread-crumbs">
              <nuxt-link to="/"> Be in </nuxt-link>
              <span> / </span>
              <a href="">Be in Payments</a>
            </div>
            <div class="tablet-class">
              <div
                class="
                  faq-header-block__img-tablet
                  keeping__img-tablet
                  bein-payments-blcok__img-tablet
                "
              >
                <img src="/images/payments-header-img.png" alt="" />
              </div>
            </div>
            <div class="faq-header-block__title title">Crypto Payments</div>
            <div
              class="
                faq-header-block__text
                text
                keeping__text
                bein-payments-blcok__text
              "
            >
              <span> Made easy </span>
              Take advantage of our global cryptocurrency gateway made easy and
              accessible for everyone — whether you’re a business owner, crypto
              user, or even from another planet.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="available">
      <div class="container">
        <div class="available__wrapper">
          <div class="available__title title">Available Assets</div>
          <div class="available__subtitle">
            Ready to earn interest? Grow your wealth with BIXRP high-yeld
            savings account.
          </div>
          <div class="available__content js-avialable-content" :class="{'js-active': showAll}">
            <div class="available__item active">
              <div class="available__img">
                <img src="/images/avialable-assets/1.png" alt="" />
              </div>
              <div class="available__right">
                <strong> BIXRP </strong>
                <span> BIXRP interest account. </span>
              </div>
            </div>
            <div class="available__item active">
              <div class="available__img">
                <img src="/images/avialable-assets/2.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Ripple </strong>
                <span> XRP interest account. </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/3.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Bitcoin </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/4.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Ethereum </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/5.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Tether </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/6.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Binance Coin </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/7.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Cardano </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/8.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Dogecoin </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/9.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Polcadot </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/10.png" alt="" />
              </div>
              <div class="available__right">
                <strong> USD Coin </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/11.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Internet Computer </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/12.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Uniswap </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/13.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Bitcoin Cash </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/14.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Polygon </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/15.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Chainlink </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/16.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Litecoin </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/17.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Stellar </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/18.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Solana </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/19.png" alt="" />
              </div>
              <div class="available__right">
                <strong> Ethereum Classic </strong>
                <span> Coming soon </span>
              </div>
            </div>
            <div class="available__item">
              <div class="available__img">
                <img src="/images/avialable-assets/20.png" alt="" />
              </div>
              <div class="available__right">
                <strong> VeChain </strong>
                <span> Coming soon </span>
              </div>
            </div>
          </div>
          <button @click="showAll = !showAll" :class="{'js-active': showAll}" class="available__btn js-btn-avialable-shop">
            <div class="available__btn-icon">
              <svg>
                <use xlink:href="/images/icons/icons.svg#arrow-down-two"></use>
              </svg>
            </div>
            <span>{{showAll ? 'Show less' : 'Show all'}}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="bixrp-god-business">
      <div class="container">
        <div class="bixrp-god-business__title title">
          From BIXRP God to Businesses
        </div>
        <div class="bixrp-god-business__wrapper">
          <div class="bixrp-god-business__col">
            <div class="bixrp-god-business__item bixrp-god-business-item">
              <div class="bixrp-god-business-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#time"></use>
                </svg>
              </div>
              <div class="bixrp-god-business-item__title">
                Real-time payments
              </div>
            </div>
            <div class="bixrp-god-business__item bixrp-god-business-item">
              <div class="bixrp-god-business-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#percent"></use>
                </svg>
              </div>
              <div class="bixrp-god-business-item__title">
                Industry-low processing fees of only 0.2%
              </div>
            </div>
            <div class="bixrp-god-business__item bixrp-god-business-item">
              <div class="bixrp-god-business-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#currency"></use>
                </svg>
              </div>
              <div class="bixrp-god-business-item__title">
                Convert your coins anytime to stable BIXRP
              </div>
            </div>
          </div>
          <div class="bixrp-god-business__img">
            <img src="/images/god-for-bussines-img.png" alt="" />
          </div>
          <div class="bixrp-god-business__col two">
            <div class="bixrp-god-business__item bixrp-god-business-item">
              <div class="bixrp-god-business-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#earth"></use>
                </svg>
              </div>
              <div class="bixrp-god-business-item__title">
                Checkmark Global — Tap into a global customer base
              </div>
            </div>
            <div class="bixrp-god-business__item bixrp-god-business-item">
              <div class="bixrp-god-business-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#bank-safe"></use>
                </svg>
              </div>
              <div class="bixrp-god-business-item__title">
                No Middlemen — Be your own bank
              </div>
            </div>
            <div class="bixrp-god-business__item bixrp-god-business-item">
              <div class="bixrp-god-business-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#protect"></use>
                </svg>
              </div>
              <div class="bixrp-god-business-item__title">
                Reduced fraud risk with no chargebacks
              </div>
            </div>
          </div>
          <div class="mobile-class">
            <div class="swiper-container slider-god-business">
              <div class="swiper-wrapper">
                <div class="swiper-slide slider-god-business__item">
                  <div class="bixrp-god-business-item">
                    <div class="bixrp-god-business-item__icon">
                      <svg>
                        <use xlink:href="/images/icons/icons.svg#time"></use>
                      </svg>
                    </div>
                    <div class="bixrp-god-business-item__title">
                      Real-time payments
                    </div>
                  </div>
                  <div class="bixrp-god-business-item">
                    <div class="bixrp-god-business-item__icon">
                      <svg>
                        <use xlink:href="/images/icons/icons.svg#percent"></use>
                      </svg>
                    </div>
                    <div class="bixrp-god-business-item__title">
                      Industry-low processing fees of only 0.2%
                    </div>
                  </div>
                  <div class="bixrp-god-business-item">
                    <div class="bixrp-god-business-item__icon">
                      <svg>
                        <use
                          xlink:href="/images/icons/icons.svg#currency"
                        ></use>
                      </svg>
                    </div>
                    <div class="bixrp-god-business-item__title">
                      Convert XRP anytime to stable BIXRP
                    </div>
                  </div>
                </div>
                <div class="swiper-slide slider-god-business__item">
                  <div class="bixrp-god-business-item">
                    <div class="bixrp-god-business-item__icon">
                      <svg>
                        <use xlink:href="/images/icons/icons.svg#earth"></use>
                      </svg>
                    </div>
                    <div class="bixrp-god-business-item__title">
                      Checkmark Global — Tap into a global customer base
                    </div>
                  </div>
                  <div class="bixrp-god-business-item">
                    <div class="bixrp-god-business-item__icon">
                      <svg>
                        <use
                          xlink:href="/images/icons/icons.svg#bank-safe"
                        ></use>
                      </svg>
                    </div>
                    <div class="bixrp-god-business-item__title">
                      No Middlemen — Be your own bank
                    </div>
                  </div>
                  <div class="bixrp-god-business-item">
                    <div class="bixrp-god-business-item__icon">
                      <svg>
                        <use xlink:href="/images/icons/icons.svg#protect"></use>
                      </svg>
                    </div>
                    <div class="bixrp-god-business-item__title">
                      Reduced fraud risk with no chargebacks
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weve-built">
      <div class="container">
        <div class="weve-built__wrapper">
          <div class="weve-built__img">
            <img src="/images/weve-built-img.png" alt="" />
          </div>
          <div class="weve-built__right">
            <div class="weve-built__title title">
              <b>We've built a</b> smart and comprehensible service
              <b>that allows you to easily interact with BIXRP network:</b>
            </div>
            <div class="weve-built__list">
              <ul>
                <li>
                  Accept payments and create a separate tag for each user or
                  each operation
                </li>
                <li>Send funds to any address</li>
                <li>
                  Receive IPN (Instant Payment Notification) by WebHook for
                  confirmed transactions
                </li>
                <li>Manage transactions through the dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="how-it-works">
      <div class="container">
        <div class="how-it-works__title title">How it works</div>
        <div class="how-it-works__wrapper">
          <div class="how-it-works__item how-it-works-item">
            <div class="how-it-works-item__icon">01</div>
            <div class="how-it-works-item__title">Invoice</div>
            <div class="how-it-works-item__subtitle">
              Be in Payments displays the invoice for your customer.
            </div>
            <div class="how-it-works-item__img">
              <img src="/images/invoice.png" alt="" />
            </div>
          </div>
          <div class="how-it-works__item how-it-works-item">
            <div class="how-it-works-item__icon">02</div>
            <div class="how-it-works-item__title">Payment</div>
            <div class="how-it-works-item__subtitle">
              Your customer pays the Be in Payments invoice at a locked-in
              exchange rate.
            </div>
            <div class="how-it-works-item__img two">
              <img src="/images/payment.png" alt="" />
            </div>
          </div>
          <div class="how-it-works__item how-it-works-item">
            <div class="how-it-works-item__icon">03</div>
            <div class="how-it-works-item__title">Conversion</div>
            <div class="how-it-works-item__subtitle">
              Be in Payments converts the payment into BIXRP stable
              cryptocurrency if you want.
            </div>
            <div class="how-it-works-item__img">
              <img src="/images/conversion.png" alt="" />
            </div>
          </div>
          <div class="how-it-works__item how-it-works-item">
            <div class="how-it-works-item__icon">04</div>
            <div class="how-it-works-item__title">Transfer</div>
            <div class="how-it-works-item__subtitle">
              Withdraw money from your business account to your Be in Wallet at
              any time without fees.
            </div>
            <div class="how-it-works-item__img">
              <img src="/images/how-it-transfer.png" alt="" />
            </div>
          </div>
        </div>
        <div class="future-payments">
          <div class="future-payments__wrapper">
            <div class="future-payments__img">
              <img src="/images/future-payment-img.png" alt="" />
            </div>
            <form action="" class="future-payments__form future-payments-form">
              <div class="future-payments-form__title title">
                <b>Join millions of Be in Payments users worldwide.</b>
              </div>
              <div class="future-payments-form__text text">
                Join millions of users globally already using Be in Payments.
              </div>
              <div class="future-payments-form__content">
                <label for="">
                  <input type="text" class="input-grey" placeholder="Name" />
                </label>
                <label for="">
                  <input type="text" class="input-grey" placeholder="Number" />
                </label>
                <label for="">
                  <input
                    type="email"
                    class="input-grey"
                    placeholder="Your E-mail"
                  />
                </label>
                <button class="btn-blue-shadow">
                  <span>Join now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="bein-app-block">
      <div class="container">
        <div class="bein-app-block__wrapper">
          <div class="bein-app-block__left">
            <div class="bein-app-block__title title">
              The <b>Be in App</b> coming soon!
            </div>
            <div class="bein-app-block__text text">
              One app with all the <b>best crypto features</b> already built
              into it.
            </div>
            <div class="bein-app-block__link">
              <a href="">
                <img src="/images/app-playmarket.png" alt="" />
              </a>
              <a href="">
                <img src="/images/app-apple-store.png" alt="" />
              </a>
              <a href="">
                <img src="/images/app-coming-soon.png" alt="" />
              </a>
            </div>
          </div>
          <div class="bein-app-block__img">
            <img src="/images/phone-app-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);
export default {
  data() {
    return {
      settings: {},
      showAll: false
    };
  },
  mounted() {
    this.settings = Object.assign(this.settings, {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    let swiper = this.$el.getElementsByClassName("slider-god-business")[0];
    let sw = new Swiper(swiper, this.settings);
  },
};
</script>
