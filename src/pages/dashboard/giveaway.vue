<template>
  <div class="giveaway">
    <button class="go-back" @click.prevent="$router.go(-1)" type="button">
      <i class="icon-arrow-left-middle"></i>
    </button>
    <h1 class="page__title">
      <i class="page__title_icon icon-leaderboard"></i>
      Giveaway
    </h1>
    <div class="giveaway__container">
      <div
        class="
          card card--gradient
          row-flex
          justify-content-between
          align-items-center
          giveaway__main
        "
      >
        <div class="">
          <h3>You can win at any time!</h3>
          <p>Get 1 ticket for every fixed-term frozen 500 BIXRP</p>
        </div>
        <beButton
          type="button"
          title="Invest"
          class="white_btn"
          :large="true"
          :white="true"
          @click="$router.push('/dashboard/earnings')"
          ><i class="icon-plus-outline-empty" slot="icon-left"></i
        ></beButton>
      </div>
      <div
        class="
          card card--white
          row-flex
          align-items-center
          justify-content-around
          giveaway__tickets
        "
      >
        <div class="row-flex align-items-center giveaway__tickets_info">
          <div class="card--icon mr20"><i class="icon-ticket"></i></div>
          <div class="giveaway__tickets_text">
            <h3>Your tickets</h3>
            <div class="text--primary font-large">123</div>
          </div>
        </div>
        <div class="flex-full">
          <beButton
            class="read-more"
            title="Read more"
            :outline="true"
            :arrowRight="true"
          ></beButton>
        </div>
      </div>
      <div class="card card--dark text-center giveaway__timer">
        <div class="card--title-devider">Daily bonus from the company!</div>
        <div class="">
          <p>
            You have a chance once every 24 hours to try your luck and win 1 -
            500 BIXRP
          </p>
          <p>
            <i
              >You must have at least 500 BIXRP in your wallet to participate</i
            >
          </p>
        </div>
        <div class="timer">
          <div class="timer__label">
            <strong>The next attempt is available in:</strong>
          </div>
          <div class="timer__time">20:21:32</div>
          <div class="timeline">
            <div class="timeline__rail"></div>
            <div class="timeline__label">Bonus received</div>
          </div>
        </div>
      </div>
      <div class="card card--white giveaway__winners col-flex table_winners">
        <h4 class="table_winners__label">Top 10 winners</h4>
        <table class="table_winners__table">
          <thead>
            <tr>
              <th>Num</th>
              <th>User ID</th>
              <th>Tickets</th>
              <th>Prize</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i of 10" :key="i">
              <td>{{ i }}</td>
              <td>1415415611</td>
              <td>12</td>
              <td>Tesla Model X</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "lClient"
};
</script>
