<template>
  <div>
    <div class="home-first-block raffie">
      <div class="container">
        <div class="bread-crumbs">
          <nuxt-link to="/"> Be in </nuxt-link>
          <span> / </span>
          <a href="">Raffie</a>
        </div>
        <div class="home-first-block__wrapper raffie__wrapper">
          <div class="home-first-block__title title raffie__title">
            Don’t miss your chance!
          </div>
          <div class="raffie__text text">
            <p>
              Meet these simple requirements and get your chance to win cool
              prizes.
            </p>
          </div>
          <div class="home-first-block__btn raffie__btn">
            <a href="#raffie-cars" class="btn-blue-border link-anchor">
              <span>Read more</span>
              <svg>
                <use xlink:href="/images/icons/icons.svg#arrow-down"></use>
              </svg>
            </a>
            <a href="" class="btn-blue-shadow js-btn-register-popup">
              <span>Participate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="raffie-cars" id="raffie-cars">
      <div class="container">
        <div class="raffie-cars__wrapper">
          <div class="raffie-cars__left">
            <div class="raffie-cars__title title">
              <b>Yes, we are giving away a real</b> Tesla Model X
              <b>in a solid black finish!</b>
            </div>
            <div class="raffie-cars__text text">
              <p>
                Theoretically, this means you can buy Tesla with just 500 BIXRP.
              </p>
              <p>
                That’s sexy. You can’t spell “sexy” without the letter “x”.
                That’s exactly why The Model X and Be in Wallet are a match made
                in crypto-automotive heaven.
              </p>
              <p>
                Now, we just need You to complete the trifecta. Here’s how to
                get started.
              </p>
            </div>
          </div>
          <div class="raffie-cars__slider">
            <div class="swiper-container js-raffie-cars-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide raffie-cars-slide">
                  <img src="/images/tesla.png" alt="" />
                </div>
                <div class="swiper-slide raffie-cars-slide">
                  <img src="/images/car2.png" alt="" />
                </div>
                <div class="swiper-slide raffie-cars-slide">
                  <img src="/images/car3.png" alt="" />
                </div>
              </div>
              <div class="raffie-cars__slider-bottom">
                <div class="swiper-button-prev raffie-cars-slider-btn-prev">
                  <svg>
                    <use
                      xlink:href="/images/icons/icons.svg#arrow-right2"
                    ></use>
                  </svg>
                </div>
                <div class="swiper-pagination raffie-cars-pagination"></div>
                <div class="swiper-button-next raffie-cars-slider-btn-next">
                  <svg>
                    <use
                      xlink:href="/images/icons/icons.svg#arrow-right2"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="other-prizes">
      <div class="container">
        <div class="other-prizes__title">Other prizes</div>
        <div class="other-prizes__wrapper">
          <div class="other-prizes__row">
            <div class="other-prizes-item scooter">
              <div class="other-prizes-item__img">
                <img src="/images/scooter.png" alt="" />
              </div>
              <div class="other-prizes-item__title title">Each month</div>
              <div class="other-prizes-item__text">Yamaha Mio Aerox 155</div>
            </div>
            <div class="other-prizes-item iphone">
              <div class="other-prizes-item__img">
                <img src="/images/iphone.png" alt="" />
              </div>
              <div class="other-prizes-item__title title">Each week</div>
              <div class="other-prizes-item__text">Apple Iphone 12 PRO MAX</div>
            </div>
            <div class="other-prizes-item number">
              <div class="other-prizes-item__number">
                <strong>500</strong>
                <span>BIXRP</span>
              </div>
              <div class="other-prizes-item__title title">Every 2 days</div>
              <div class="other-prizes-item__text">
                If your balance is more that 500 BIXRP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="raffie-text-block">
      <div class="container">
        <div class="raffie-text-block__wrapper">
          <div class="raffie-text-block__item">
            <div class="raffie-text-block__title title">How to participate</div>
            <div class="raffie-text-block__text">
              <p>
                Just take advantage of the opportunity to increase your BIXRP
                available on the platform and get your ticket. The minimum
                amount is 500 BIXRP.
              </p>
              <p>
                Each deposit you make on the platform should be of at least 500
                BIXRP which will secure you 1 ticket to the lucky draw.
              </p>
            </div>
            <a
              href=""
              class="
                raffie-text-block__btn
                btn-blue-border
                js-btn-register-popup
              "
            >
              <span>Start now</span>
            </a>
          </div>
          <div class="raffie-text-block__item">
            <div class="raffie-text-block__title title">
              How to monitor the status
            </div>
            <div class="raffie-text-block__text">
              <p>
                You can check the number of your tickets at any time in your
                personal cabinet, as well as check if you have available prizes.
              </p>
              <p>
                The tickets are automatically created every time you fulfill the
                conditions by depositing 500 BIXRP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="participants">
      <div class="container">
        <div class="participants__wrapper">
          <div class="participants__title">Newest Participants</div>
          <div class="participants-table">
            <div class="participants-table__row blue-bg">
              <div class="participants-table__col white-color">Num</div>
              <div class="participants-table__col white-color">User ID</div>
              <div class="participants-table__col white-color">Tickets</div>
              <div class="participants-table__col white-color">Prize</div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">1</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">12</div>
              <div class="participants-table__col blue-color">
                Tesla Model X
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">2</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">1</div>
              <div class="participants-table__col blue-color">
                Yamaha Mio Aerox 155
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">3</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">5783</div>
              <div class="participants-table__col blue-color">
                Yamaha Mio Aerox 155
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">4</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">123</div>
              <div class="participants-table__col blue-color">
                Yamaha Mio Aerox 155
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">5</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">4</div>
              <div class="participants-table__col blue-color">
                Yamaha Mio Aerox 155
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">6</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">64</div>
              <div class="participants-table__col blue-color">
                Yamaha Mio Aerox 155
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">7</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">88</div>
              <div class="participants-table__col blue-color">
                Apple Iphone 12 PRO MAX
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">8</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">2</div>
              <div class="participants-table__col blue-color">
                Apple Iphone 12 PRO MAX
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">9</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">1</div>
              <div class="participants-table__col blue-color">
                Apple Iphone 12 PRO MAX
              </div>
            </div>
            <div class="participants-table__row">
              <div class="participants-table__col grey">10</div>
              <div class="participants-table__col">1415415611</div>
              <div class="participants-table__col grey">123</div>
              <div class="participants-table__col blue-color">
                Apple Iphone 12 PRO MAX
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collage-prizes">
      <div class="container">
        <div class="collage-prizes__wrapper">
          <div class="collage-prizes__img">
            <img src="/images/collage-prizes.png" alt="" />
          </div>
          <div class="collage-prizes__title title">
            It's time to take part in this lucky draw!
          </div>
          <div class="collage-prizes__text">
            Register an account, fund your account and participate in the main
            draw!
          </div>
          <a
            href=""
            class="collage-prizes__btn btn-blue-shadow js-btn-register-popup"
          >
            <span>Participate</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);
export default {
  data() {
    return {
      settings: {},
    };
  },
  mounted() {
    this.settings = Object.assign(this.settings, {
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: this.$el.getElementsByClassName(
          "raffie-cars-slider-btn-next"
        )[0],
        prevEl: this.$el.getElementsByClassName(
          "raffie-cars-slider-btn-prev"
        )[0],
      },
      pagination: {
        el: ".raffie-cars-pagination",
        clickable: true,
        type: "fraction",
      },
    });
    let swiper = this.$el.getElementsByClassName("js-raffie-cars-slider")[0];
    let sw = new Swiper(swiper, this.settings);
  },
};
</script>
