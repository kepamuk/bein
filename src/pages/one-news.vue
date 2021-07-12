<template>
  <div>
    <div class="page-news">
      <div class="container">
        <div class="bread-crumbs">
          <nuxt-link to="/"> Be in </nuxt-link>
          <span> / </span>
          <a href="">News</a>
          <span> / </span>
          <a href="">Price of Ethereum Crypto</a>
        </div>
        <div class="page-news__wrapper">
          <a href="" class="page-news__back">
            <svg>
              <use xlink:href="/images/icons/icons.svg#arrow-left"></use>
            </svg>
          </a>
          <div class="page-news__global-img">
            <img src="/images/page-news/1.jpg" alt="" />
          </div>
          <div class="page-news__theme">Тема дня</div>
          <div class="page-news__title">
            Цена Ethereum обновила максимум на уровне $2 146
          </div>
          <div class="page-news__subtext">
            <p>
              Летом 2018 года к нам обратились представители группы компаний
              Docklands Development. Ранее специалисты студии по заказу этого
              девелопера разрабатывали дизайн-проекты апартаментов в
              лофт-квартале Docklands, теперь предстояло благоустроить дворовую
              территорию.
            </p>
            <p>
              Важно было оформить двор так, чтобы он вписался в общую концепцию
              лофт-квартала и стал местом, где резиденты разных возрастов смогут
              комфортно проводить время.
            </p>
            <p>
              В кейсе рассказали о том, как зонировали пространство, чтобы
              успешно решить эти задачи.
            </p>
          </div>
          <strong> О территории лофт-квартала и идеях заказчика </strong>
          <p>
            Получив вводную информацию о проекте, мы отправились на объект.
            Нужно было сделать контрольные замеры, прикинуть, где разместить
            зоны для активного отдыха, а где — тихие уголки для уединения и
            релакса.
          </p>
          <div class="page-news__row-img">
            <img src="/images/page-news/2.jpg" alt="" />
            <img src="/images/page-news/3.jpg" alt="" />
          </div>
          <span>Так выглядел комплекс до начала работ по благоустройству.</span>
          <b>
            Работать предстояло с территорией площадью 530 м², в центре которой
            расположены въезд и парковка, а рядом — зеленая зона с растениями,
            характерными для скандинавского климата.
          </b>
          <div class="page-news__row-img">
            <img src="/images/page-news/4.jpg" alt="" />
          </div>
          <span>
            Основные работы по укладке покрытий двора уже были произведены
            заказчиком согласно генплану: выделены места под дорожки, парковки,
            детские площадки и газон.
          </span>
          <b>
            Особенность, которую пришлось учитывать: двор находится над
            подземным паркингом, глубина грунта небольшая, т.к. это
            эксплуатируемая кровля. Нужно было продумать, как на этой
            поверхности устойчиво закрепить элементы детской площадки и другие
            объекты. Решили крупное игровое оборудование установить там, где
            глубина грунта это позволяет (нужно 1-1,5 метра).
          </b>
          <img class="middle" src="/images/page-news/5.jpg" alt="" />
          <span
            >Так выглядела схема размещения оборудования со шкалой глубины
            установки.
          </span>
          <div class="page-news__list">
            <strong> О территории лофт-квартала: </strong>
            <ul>
              <li>Сформулируйте ваш вопрос как можно более подробно</li>
              <li>Среднее время ответа в рабочие часы — 5 минут</li>
              <li>При высокой загрузке время ответа может быть увеличено</li>
            </ul>
            <b>
              За озеленение территории отвечали ландшафтные дизайнеры и
              архитекторы со стороны заказчика.
            </b>
          </div>
        </div>
        <div class="other-articles">
          <div class="other-articles__header">
            <div class="other-articles__title">Другие статьи</div>
            <div class="other-articles__right">
              <div class="swiper-button-prev other-articles-btn-prev">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right2"></use>
                </svg>
              </div>
              <div class="swiper-button-next other-articles-btn-next">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right2"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="swiper-container js-other-articles-slider">
            <div class="swiper-wrapper">
              <a href="" class="swiper-slide news__item news-item">
                <div class="news-item__wrapper">
                  <img src="/images/news/1.jpg" alt="" />
                  <div class="news-item__content">
                    <div class="news-item__subtitle">Тема дня</div>
                    <div class="news-item__title">
                      Цена Ethereum обновила максимум на уровне $2 146
                    </div>
                    <div class="news-item__date">7 дней назад</div>
                  </div>
                </div>
              </a>
              <a href="" class="swiper-slide news__item news-item">
                <div class="news-item__wrapper">
                  <img src="/images/news/1.jpg" alt="" />
                  <div class="news-item__content">
                    <div class="news-item__subtitle">Тема дня</div>
                    <div class="news-item__title">
                      Цена Ethereum обновила максимум на уровне $2 146
                    </div>
                    <div class="news-item__date">7 дней назад</div>
                  </div>
                </div>
              </a>
              <a href="" class="swiper-slide news__item news-item">
                <div class="news-item__wrapper">
                  <img src="/images/news/1.jpg" alt="" />
                  <div class="news-item__content">
                    <div class="news-item__subtitle">Тема дня</div>
                    <div class="news-item__title">
                      Цена Ethereum обновила максимум на уровне $2 146
                    </div>
                    <div class="news-item__date">7 дней назад</div>
                  </div>
                </div>
              </a>
              <a href="" class="swiper-slide news__item news-item">
                <div class="news-item__wrapper">
                  <img src="/images/news/1.jpg" alt="" />
                  <div class="news-item__content">
                    <div class="news-item__subtitle">Тема дня</div>
                    <div class="news-item__title">
                      Цена Ethereum обновила максимум на уровне $2 146
                    </div>
                    <div class="news-item__date">7 дней назад</div>
                  </div>
                </div>
              </a>
              <a href="" class="swiper-slide news__item news-item">
                <div class="news-item__wrapper">
                  <img src="/images/news/1.jpg" alt="" />
                  <div class="news-item__content">
                    <div class="news-item__subtitle">Тема дня</div>
                    <div class="news-item__title">
                      Цена Ethereum обновила максимум на уровне $2 146
                    </div>
                    <div class="news-item__date">7 дней назад</div>
                  </div>
                </div>
              </a>
              <a href="" class="swiper-slide news__item news-item">
                <div class="news-item__wrapper">
                  <img src="/images/news/1.jpg" alt="" />
                  <div class="news-item__content">
                    <div class="news-item__subtitle">Тема дня</div>
                    <div class="news-item__title">
                      Цена Ethereum обновила максимум на уровне $2 146
                    </div>
                    <div class="news-item__date">7 дней назад</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="mobile-class">
            <div class="other-articles__btn-mobile">
              <div class="swiper-button-prev other-articles-btn-prev">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right2"></use>
                </svg>
              </div>
              <div class="swiper-button-next other-articles-btn-next">
                <svg>
                  <use xlink:href="/images/icons/icons.svg#arrow-right2"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join-team-block">
      <div class="container">
        <div class="join-team-block__wrapper">
          <div class="join-team-block__left">
            <div class="join-team-block__title title">Join our community!</div>
            <div class="join-team-block__text text">
              The key to your digital future
            </div>
          </div>
          <form class="join-team-block__right join-team-form">
            <div class="join-team-form__col">
              <label for="" class="error">
                <input type="text" placeholder="Name" />
                <span class="erorr-input">
                  <img src="/images/exclamation.svg" alt="" />
                  <span class="erorr-input__popup"> Ты шо дурачёк? </span>
                </span>
              </label>
              <label for="">
                <input type="text" placeholder="Your E-mail" />
                <span class="erorr-input">
                  <img src="/images/exclamation.svg" alt="" />
                </span>
              </label>
            </div>
            <div class="join-team-form__col">
              <label for="" class="error">
                <input type="text" placeholder="Number" />
                <span class="erorr-input reverse">
                  <img src="/images/exclamation.svg" alt="" />
                  <span class="erorr-input__popup"> Ты шо дурачёк? </span>
                </span>
              </label>
              <button class="btn-white-shadow">
                <span>Join now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation } from "swiper";
Swiper.use([Navigation]);
export default {
  data() {
    return {
      settings: {},
    };
  },
  mounted() {
    this.settings = Object.assign(this.settings, {
      spaceBetween: 14,
       navigation: {
        nextEl: this.$el.getElementsByClassName("other-articles-btn-next")[0],
        prevEl: this.$el.getElementsByClassName("other-articles-btn-prev")[0],
      },
      breakpoints: {
        650: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
    let swiper = this.$el.getElementsByClassName("js-other-articles-slider")[0];
    let sw = new Swiper(swiper, this.settings);
  },
};
</script>
