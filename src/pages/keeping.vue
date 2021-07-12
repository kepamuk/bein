<template>
  <div>
    <div class="faq-header-block keeping">
      <div class="container">
        <div class="faq-header-block__wrapper">
          <div class="faq-header-block__left">
            <div class="bread-crumbs">
              <nuxt-link to="/"> Be in </nuxt-link>
              <span> / </span>
              <a href="">Wallet</a>
            </div>
            <div class="tablet-class">
              <div class="faq-header-block__img-tablet keeping__img-tablet">
                <img src="/images/keeping-bg.png" alt="" />
              </div>
            </div>
            <div class="faq-header-block__title title">Be Your Own Bank</div>
            <div class="faq-header-block__text text keeping__text">
              The safest and most reliable wallet for investing and storing
              cryptocurrencies
            </div>
            <div class="faq-header-block__btn keeping__btn">
              <a href="" class="btn-blue-shadow js-btn-register-popup">
                <span>Create Your Wallet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="keeping-joing-block">
      <div class="container">
        <div class="keeping-joing-block__wrapper">
          <div class="keeping-joing-block__img">
            <img src="/images/img-keeping-join.png" alt="" />
          </div>
          <div class="keeping-joing-block__right">
            <div class="keeping-joing-block__title title">
              Join the world's fastest growing crypto wallet
            </div>
            <div class="keeping-joing-block__text text">
              With the lowest fees on the market, there's no doubt that our Be
              in Wallet aspires to have the largest user base and the highest
              amount of transactions in the crypto wallet industry.
            </div>
            <div class="keeping-joing-block__btn">
              <a href="" class="btn-blue-shadow js-btn-register-popup">
                <span>Get started</span>
              </a>
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
          <div
            class="available__content js-avialable-content"
            :class="{ 'js-active': showAll }"
          >
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
          <button
            @click="showAll = !showAll"
            :class="{ 'js-active': showAll }"
            class="available__btn js-btn-avialable-shop"
          >
            <div class="available__btn-icon">
              <svg>
                <use xlink:href="/images/icons/icons.svg#arrow-down-two"></use>
              </svg>
            </div>
            <span>{{ showAll ? "Show less" : "Show all" }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="wallet-works">
      <div class="container">
        <div class="wallet-works__title title">How your wallet works</div>
        <div class="wallet-works__wrapper">
          <div class="wallet-works-item">
            <div class="wallet-works-item__img">
              <img src="/images/wallet/wallet-item1.png" alt="" />
            </div>
            <div class="wallet-works-item__right">
              <div class="wallet-works-item__title title">
                Your Wallet & Its Master Seed
              </div>
              <div class="wallet-works-item__text text">
                When creating your Be in Wallet, you also create a master seed
                which is the key of this particular wallet. This master seed
                will be used to derive every individual Bitcoin address that
                you'll use to send and request Bitcoin.
              </div>
            </div>
          </div>
          <div class="wallet-works-item reverse two">
            <div class="wallet-works-item__right">
              <div class="wallet-works-item__title title">
                Client Side Encryption Means Only You Have Access to Your Wallet
              </div>
              <div class="wallet-works-item__text text">
                We do not store your coins, we only provide you with the
                software you need to store them yourself. Your wallet is
                encrypted on your device with your personal password. Your
                password acts as your decryption key to both lock and unlock
                your wallet - your wallet cannot be accessed without it. We
                don't know or story your password, and you are the only one who
                can unlock and decrypt your wallet.
              </div>
            </div>
            <div class="wallet-works-item__img">
              <img src="/images/wallet/wallet-item2.png" alt="" />
            </div>
          </div>
          <div class="wallet-works-item three">
            <div class="wallet-works-item__img">
              <img src="/images/wallet/wallet-item3.png" alt="" />
            </div>
            <div class="wallet-works-item__right">
              <div class="wallet-works-item__title title">
                We’ve Got Your Back(up)
              </div>
              <div class="wallet-works-item__text text">
                Your encrypted wallet is automatically backed up to our servers.
                To safely store your wallet, we add another layer of security by
                encrypting your wallet a second time. Securely storing your
                wallet on our servers ensures that you can access your wallet
                from any (and all) of your different devices.
              </div>
            </div>
          </div>
          <div class="wallet-works-item reverse four">
            <div class="wallet-works-item__right">
              <div class="wallet-works-item__title title">
                Decrypting your wallet couldn’t be easier
              </div>
              <div class="wallet-works-item__text text">
                When you access your wallet with your Wallet ID (a unique
                identifier specific to your wallet), your browser uses our API
                to download your encrypted wallet backup, before safely
                decrypting it on your device.
              </div>
            </div>
            <div class="wallet-works-item__img">
              <img src="/images/wallet/wallet-item4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="security">
      <div class="container">
        <div class="security__wrapper">
          <div class="security__tab">
            <div class="security__block-item one" :class="{'js-active' : tabs[0].isActive === true}">
              <div class="security__title title">Best in Class Security</div>
              <div class="security__text text">
                Rest easy knowing your cryptocurrencies are secured with the
                world’s most trusted crypto wallet. We give you full control and
                protect from unauthorized access.
              </div>
              <div class="security__list">
                <span>You’re the custodian, you have control.</span>
              </div>
            </div>
            <div class="security__block-item two" :class="{'js-active' : tabs[1].isActive === true}">
              <div class="security__title title">Send & Receive Instantly</div>
              <div class="security__text text">
                Whether you’re sending to a friend or transacting for business,
                Be in Wallet allows you to send and receive BIXRP and
                cryptocurrecies with the lowest or 0% fees.
              </div>
            </div>
            <div class="security__block-item three" :class="{'js-active' : tabs[2].isActive === true}">
              <div class="security__title title">Exchange to Stable BIXRP</div>
              <div class="security__text text">
                <p>
                  Easily exchange crypto-to-crypto within your Be in Wallet. We
                  now offer send and receive for users in many countries looking
                  to use crypto without leaving your secured wallet experience.
                </p>
                <p>
                  Exchange crypto-to-crypto instantly Buy and sell supported in
                  36 countries
                </p>
              </div>
            </div>
            <div class="security__block-item four" :class="{'js-active' : tabs[3].isActive === true}">
              <div class="security__title title">
                Access Your Funds Anywhere
              </div>
              <div class="security__text text">
                Transform the financial system right from your pocket! Your Be
                in Wallet is available anywhere - ready to be on the go, just
                like you are.
              </div>
              <div class="security__list">
                <span> Web - now </span>
                <span> iOS, Android - coming soon </span>
              </div>
            </div>
          </div>

          <div class="security__tab-menu">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              data-menu="one"
              class="security-menu-item js-security-menu-item"
              :class="{ 'js-active': tab.isActive }"
              @click="selectTab(tab)"
            >
              <div class="security-menu-item__icon">
                <svg>
                  <use
                    :xlink:href="'/images/icons/icons.svg#' + tab.icon"
                  ></use>
                </svg>
              </div>
              <div class="security-menu-item__text">{{ tab.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-class">
      <div class="security-mobile">
        <div class="container">
          <div class="security-mobile__wrapper">
            <div
              class="
                security-mobile__item
                security-mobile-item
                js-security-mobile-item js-active
              "
            >
              <div class="security-mobile-item__header js-active">
                <div class="security-mobile-item__header-left">
                  <svg>
                    <use xlink:href="/images/icons/icons.svg#security"></use>
                  </svg>
                  <span> Security </span>
                </div>
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                </svg>
              </div>
              <div class="security-mobile-item__content" style="display: block">
                <div class="security-mobile-item__title title">
                  Best in Class Security
                </div>
                <div class="security-mobile-item__text text">
                  Rest easy knowing your crypto is secured with the world’s most
                  trusted crypto wallet. We give you full control, back up your
                  funds, and protect them from unauthorized access.
                </div>
                <div class="security-mobile-item__list">
                  <span> You’re the custodian, you have control. </span>
                </div>
              </div>
            </div>
            <div
              class="
                security-mobile__item
                security-mobile-item
                js-security-mobile-item
              "
            >
              <div class="security-mobile-item__header">
                <div class="security-mobile-item__header-left">
                  <svg>
                    <use xlink:href="/images/icons/icons.svg#send-letter"></use>
                  </svg>
                  <span> Send & Receive </span>
                </div>
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                </svg>
              </div>
              <div class="security-mobile-item__content">
                <div class="security-mobile-item__title title">
                  Send & Receive Instantly
                </div>
                <div class="security-mobile-item__text text">
                  Whether you’re sending to a friend or transacting for
                  business, Be in XRP allows you to send and receive XRP and
                  USDX with the lowest or 0% fees.
                </div>
              </div>
            </div>
            <div
              class="
                security-mobile__item
                security-mobile-item
                js-security-mobile-item
              "
            >
              <div class="security-mobile-item__header">
                <div class="security-mobile-item__header-left">
                  <svg>
                    <use xlink:href="/images/icons/icons.svg#exchange"></use>
                  </svg>
                  <span> Buy, Sell & Exchange </span>
                </div>
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                </svg>
              </div>
              <div class="security-mobile-item__content">
                <div class="security-mobile-item__title title">
                  Exchange XRP to Stable BIXRP
                </div>
                <div class="security-mobile-item__text text">
                  <p>
                    Easily exchange crypto-to-crypto within your Be in Wallet.
                    We now offer send and receive for users in many countries
                    looking to use crypto without leaving your secured wallet
                    experience.
                  </p>
                  <p>
                    Exchange crypto-to-crypto instantly Buy and sell supported
                    in 36 countries
                  </p>
                </div>
              </div>
            </div>
            <div
              class="
                security-mobile__item
                security-mobile-item
                js-security-mobile-item
              "
            >
              <div class="security-mobile-item__header">
                <div class="security-mobile-item__header-left">
                  <svg>
                    <use xlink:href="/images/icons/icons.svg#geo"></use>
                  </svg>
                  <span> Access Anywhere </span>
                </div>
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right"></use>
                </svg>
              </div>
              <div class="security-mobile-item__content">
                <div class="security-mobile-item__title title">
                  Access Your Funds Anywhere
                </div>
                <div class="security-mobile-item__text text">
                  Transform the financial system right from your pocket! Your Be
                  in Wallet is available anywhere - ready to be on the go, just
                  like you are.
                </div>
                <div class="security-mobile-item__list">
                  <span> Web - now </span>
                  <span> iOS, Android - coming soon </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-bein">
      <div class="container">
        <div class="shop-bein__wrapper">
          <div class="shop-bein__content">
            <div class="shop-bein__card">
              <img class="pc" src="/images/shop-card.png" alt="" />
              <img class="mobile" src="/images/shop-card-mobile.png" alt="" />
            </div>
            <div class="shop-bein__right">
              <div class="shop-bein__title">
                Shop with Be in Card® merchants across the globe
              </div>
              <div class="shop-bein__list">
                <ul>
                  <li>
                    Turn your crypto into dollars fast for spending with the Be
                    in Card.
                  </li>
                  <li>
                    Shop with merchants online & in-person – around the world.
                  </li>
                </ul>
              </div>
              <a href="" class="shop-bein__btn btn-blue-shadow">
                <span>Learn about Be in Card</span>
              </a>
            </div>
          </div>
          <div class="makes-money__bottom shop-bein__bottom">
            <span>
              <svg>
                <use xlink:href="/images/icons/icons.svg#user-shield"></use>
              </svg>
              Testing Years
            </span>
            <span>
              <svg>
                <use xlink:href="/images/icons/icons.svg#pass-window"></use>
              </svg>
              A Well Thought-Out System
            </span>
            <span>
              <svg>
                <use xlink:href="/images/icons/icons.svg#high-risk"></use>
              </svg>
              Security alerts
            </span>
            <span>
              <svg>
                <use xlink:href="/images/icons/icons.svg#male-user"></use>
              </svg>
              Account Takeover Protection
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="specially-designed">
      <div class="container">
        <div class="specially-designed__wrapper">
          <div class="specially-designed__left">
            <div class="specially-designed__title title">
              The wallet is specifically designed for seamless transactions
            </div>
            <div class="specially-designed__text">
              Our developers continuously improve and perfect the wallet, making
              the use of top cryptocurrencies as comfortable as possible. The
              wallet gives its users the ability to easily and efficiently
              convert crypto coins to the stable coins and the other way round
              at any time. What's more, you can integrate the Be In wallet with
              everyday banking services and use your debit/credit cards, as well
              as other banking benefits.
              <br />
              <br />
              But it is not just a wallet where people can store and exchange
              their coins, it's also a tool to earn with staking and take
              advantage of every opportunity that comes along.
            </div>
            <div class="specially-designed__list">
              <div class="specially-designed__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#intelligence"></use>
                </svg>
              </div>
              <span>
                The most advanced technologies in the world in the field of
                security
              </span>
            </div>
            <a
              href=""
              class="
                specially-designed__btn
                btn-blue-shadow
                js-btn-register-popup
              "
            >
              <span>Get started</span>
            </a>
          </div>
          '
          <div class="specially-designed__img">
            <img src="/images/profits-img-xrp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAll: false,
      tabs: [
        {
          icon: "security",
          name: "Security",
          isActive: true,
        },
        {
          icon: "send-letter",
          name: "Send & Receive",
          isActive: false,
        },
        {
          icon: "exchange",
          name: "Buy, Sell & Exchange",
          isActive: false,
        },
        {
          icon: "geo",
          name: "Access Anywhere",
          isActive: false,
        },
      ],
    };
  },
  created() {
    // this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
};
</script>
