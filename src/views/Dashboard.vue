<template>
  <div class="about">
    <Header view="dashboard" />
    <h3 class="subtitle">Good Afternoon, John</h3>
    <h1 class="title underlined title-margins">Dashboard</h1>
    <div class="columns">
      <div class="column centered">
        <h2 class="is-1 title">36.5</h2>
        <h3 class="is-5 subtitle">Average degradation level</h3>
      </div>
      <div class="column has-border">
        <PieChart />
      </div>
      <div class="column">
        <h4 class="is-4 subtitle">High Priority</h4>
        <ol>
          <li>Feil berg 16, 4700 Næstved - Score of 83</li>
          <li>Krøners Hold 83, 4700 Næstved - Score of 73</li>
          <li>Nordlus øster 11, 4700 Næstved - Score of 72</li>
          <li>Skibshimmel vej 17, 4700 Næstved - Score of 69</li>
          <li>Bagt holms stræde 17, 4700 Næstved - Score of 68</li>
        </ol>
      </div>
    </div>
    <div class="columns">
      <div class="column centered">
        <h2 class="is-1 title">316</h2>
        <h3 class="is-5 subtitle">Marked "Ongoing Activity"</h3>
      </div>
      <div class="column has-border">
        <LineGraph />
      </div>
      <div class="column">
        <h4 class="is-4 subtitle">Quickly Rising</h4>
        <ol>
          <li>Korslede hede 28, 4700 Næstved - 29 points up from last year</li>
          <li>Soldrevet 19, 4700 Næstved - 25 points up from last year</li>
          <li>Solsorts ale 37, 4700 Næstved - 21 points up from last year</li>
          <li>Bros lum 10, 4700 Næstved - 20 points up from last year</li>
          <li>Faladør hvid gade 3, 4700 Næstved - 18 points up from last year</li>
        </ol>
      </div>
    </div>
    <div class="columns">
      <div class="column centered">
        <h2 class="is-1 title">Down 7%</h2>
        <h3 class="is-5 subtitle">Degradation compared to last year</h3>
      </div>
      <div class="column hide-column"></div>
      <div class="column">
        <h4 class="is-4 subtitle">Low Priority</h4>
        <ol>
          <li>Varrsten orange 28, 4700 Næstved - 12</li>
          <li>Sølv torvet 99, 4700 Næstved - 13</li>
          <li>Blåhast 42, 4700 Næstved - 15</li>
          <li>Hestevænget 85, 4700 Næstved - 18</li>
          <li>Halv-brog først 20, 4700 Næstved - 19</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import PieChart from "../components/PieChart.vue";
import LineGraph from "../components/LineGraph.vue";

export default {
  name: "dashboard",
  components: { Header, PieChart, LineGraph }
};
</script>

<style lang="scss" scoped>
.columns {
  margin-top: 2%;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 2%;
}

.column {
  margin: 1%;
  background-color: #ffffff;
}

.has-border {
  border: 2px solid #707070;
}

.title-margins {
  margin-left: 4.2%;
  margin-top: 2%;
}

.underlined {
  text-decoration: underline;
}

.subtitle {
  margin-left: 4.2%;
  margin-top: 2%;
}

.title,
.subtitle {
  color: #43484f;
}

.is-5 {
  color: #97afbb;
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hide-column {
  background: none;
}

ol {
  margin-left: 7%;
}
</style>
