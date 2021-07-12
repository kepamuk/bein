<template>
  <div>
    <div class="faq-header-block profits">
      <div class="container">
        <div class="faq-header-block__wrapper profits__wrapper">
          <div class="faq-header-block__left">
            <div class="bread-crumbs">
              <nuxt-link to="/"> Be in </nuxt-link>
              <span> / </span>
              <a href="">HODL</a>
            </div>
            <div class="faq-header-block__title title profits__title">
              Earn with Be In Wallet
            </div>
            <div class="faq-header-block__text text profits__text">
              Invest in BIXRP and earn a steady stream of 0.2 to 0.8% on your
              capital!
            </div>
            <div class="faq-header-block__btn profits__btn">
              <a href="#profits-work" class="btn-blue-border link-anchor">
                <span>Read more</span>
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-down"></use>
                </svg>
              </a>
              <a href="" class="btn-blue-shadow js-btn-register-popup">
                <span>Start earning </span>
              </a>
            </div>
          </div>
          <div class="faq-header-block__right profits__right">
            <img src="/images/profits-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="profits-work" id="profits-work">
      <div class="container">
        <div class="profits-work__wrapper">
          <div class="profits-work__left">
            <div class="profits-work__subtitle">How does it work?</div>
            <div class="profits-work__title title">
              How does our technology provide a stable income?
            </div>
          </div>
          <div class="profits-work__right">
            <p>
              Our unique trading bots are based on neural networks and are
              capable of performing transactions and market analysis in a
              fraction of a second. With millions of virtual hours of machine
              learning, and guidance by mathematically verified algorithms, our
              bots win the price difference of the same asset on different
              platforms with surgical precision
            </p>
            <br />
            <p>
              In contrast to conventional trading, this approach eliminates the
              drawdown of traded assets, guaranteeing a stable percentage of
              daily income.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="profits-example">
      <div class="container">
        <div class="profits-example__wrapper">
          <div class="profits-example__subtitle">See an example</div>
          <div class="profits-example__title title">
            4 steps to get your income
          </div>
          <div class="profits-example__text">
            We equally share this income with you and as a result, you get the
            claimed ~ 18.96% per month profit in BIXRP stablecoin
          </div>
          <div class="profits-example__content">
            <div class="profits-example-item one">
              <div class="profits-example-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#request-money"></use>
                </svg>
              </div>
              <div class="profits-example-item__title">
                You make a deposit, the funds are credited to the system
              </div>
              <div class="profits-example-item__text">
                Then our trading bots monitor various exchanges where the same
                assets are introduced
              </div>
            </div>
            <div class="profits-example-item two">
              <div class="profits-example-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#low-price"></use>
                </svg>
              </div>
              <div class="profits-example-item__title">
                The bot finds and buys the asset at a lower price on Platform A
              </div>
              <div class="profits-example-item__text">
                It monitors all relevant exchanges and checks over 1000 matches
                per second
              </div>
            </div>
            <div class="profits-example-item three">
              <div class="profits-example-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#up-price"></use>
                </svg>
              </div>
              <div class="profits-example-item__title">
                At the same moment it sells at a higher price on Platform B
              </div>
              <div class="profits-example-item__text">
                In doing so instantly, the bot insures us against the risk of
                price changes on the B platform By doing that instantly, the bot
                eliminates the risk of price changed on Platform B.
              </div>
            </div>
            <div class="profits-example-item four">
              <div class="profits-example-item__icon">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#profit-money"></use>
                </svg>
              </div>
              <div class="profits-example-item__title">
                The difference in exchange rates generates income
              </div>
              <div class="profits-example-item__text">
                We share this income with you 50/50 and as a result you get the
                claimed ~ 18.96% per month profit in BIXRP stablecoin
              </div>
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
          <div class="available__content js-avialable-content" :class="{ 'js-active': showAll }">
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
    <div class="al-work">
      <div class="container">
        <div class="al-work__wrapper">
          <div class="al-work__title title">
            How does AI work?
            <span>Live</span>
          </div>
          <div class="al-work-table">
            <div class="al-work-table__header">
              <div class="al-work-table__col">Date</div>
              <div class="al-work-table__col">Exchange / rate</div>
              <div class="al-work-table__col">Currency pair</div>
              <div class="al-work-table__col">Profit</div>
            </div>
            <div class="al-work-table__content">
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
              <div class="al-work-table__row">
                <div class="al-work-table__col">21.03.2021 | 10:02</div>
                <div class="al-work-table__col">
                  <div class="al-work-table__item">
                    <img src="/images/binance.png" alt="" />
                    <strong>Binance</strong>
                    <span>5.00001</span>
                  </div>
                  <div class="line"></div>
                  <div class="al-work-table__item">
                    <img src="/images/kraken.png" alt="" />
                    <strong>Kraken</strong>
                    <span>3.939900</span>
                  </div>
                </div>
                <div class="al-work-table__col">XRP/ BTC</div>
                <div class="al-work-table__col">
                  <span>+18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="earn-on-terms">
      <div class="container">
        <div class="earn-on-terms__title title">
          <b>Earn on Terms</b> That Beat Them All
        </div>
        <div class="earn-on-terms__text">
          Look at these figures, they speak for themselves
        </div>
        <div class="earn-on-terms__wrapper">
          <div class="earn-on-terms__col two">
            <div class="earn-on-terms-item one">
              <div class="earn-on-terms-item__icon">
                <img src="/images/profits/1.png" alt="" />
              </div>
              <div class="earn-on-terms-item__percent">2.75%</div>
            </div>
            <div class="earn-on-terms-item two">
              <div class="earn-on-terms-item__icon">
                <img src="/images/profits/2.png" alt="" />
              </div>
              <div class="earn-on-terms-item__percent">0.85%</div>
            </div>
          </div>
          <div class="earn-on-terms__col global">
            <div class="earn-on-terms-item global">
              <div class="earn-on-terms-item__icon">
                <img src="/images/profits/3.png" alt="" />
              </div>
              <div class="earn-on-terms-item__percent">18.79%</div>
              <div class="earn-on-terms-item__text">Monthly Interest Rate</div>
            </div>
            <div class="earn-on-terms-item">
              <div class="earn-on-terms-item__icon">
                <img src="/images/profits/nab.png" alt="" />
              </div>
              <div class="earn-on-terms-item__percent">2.38%</div>
            </div>
          </div>
          <div class="earn-on-terms__col three">
            <div class="earn-on-terms-item one">
              <div class="earn-on-terms-item__icon">
                <img src="/images/profits/citibank.png" alt="" />
              </div>
              <div class="earn-on-terms-item__percent">0.7%</div>
            </div>
            <div class="earn-on-terms-item two">
              <div class="earn-on-terms-item__icon">
                <img src="/images/profits/chartered.png" alt="" />
              </div>
              <div class="earn-on-terms-item__percent">0.25%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="makes-money">
      <div class="container">
        <div class="makes-money__wrapper">
          <div class="makes-money__left">
            <div class="makes-money__title title">
              <b>BIXRP makes your</b> money flexible
            </div>
            <div class="makes-money__text">
              Instead of just keeping money in your wallet, we give you the
              opportunity to convert your BIXRP and earn interest every day with
              the same security.
            </div>
            <a
              href=""
              class="makes-money__btn btn-blue-shadow js-btn-register-popup"
            >
              <span>Start earning with BIXRP</span>
            </a>
          </div>
          <div class="makes-money__img">
            <img src="/images/profits-img-xrp.png" alt="" />
          </div>
        </div>
        <div class="makes-money__bottom">
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
</template>

<script>
export default {
  data() {
    return {
      showAll: false,
    };
  },
};
</script>
