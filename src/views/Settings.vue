<template>
  <div>
    <Header />
    <h1 class="title underlined title-margins">Settings</h1>
    <div class="columns">
      <div class="column is-offset-1 is-5">
        <h2 class="title is-4">Adjust color code values</h2>
        <div class="settings-left">
          <h2 class="subtitle is-6">Set new maximum values</h2>
          <form action="#">
            <div class="field">
              <label class="label">Set New Green Value</label>
              <div class="control">
                <input class="input" type="text" placeholder="Type Value" />
              </div>
            </div>
            <div class="field">
              <label class="label">Set New Yellow Value</label>
              <div class="control">
                <input class="input" type="text" placeholder="Type Value" />
              </div>
            </div>
            <div class="field">
              <label class="label">Set New Red Value</label>
              <div class="control">
                <input class="input" type="text" placeholder="Type Value" />
              </div>
            </div>
          </form>
          <div class="colorgrades">
            <h2 class="title is-6">Current Color Grades</h2>
            <ul>
              <li>Green >=50</li>
              <li>Yellow 50,1 - 80</li>
              <li>Red 80,1 =<</li>
            </ul>
          </div>
          <div class="colorgrades">
            <h2 class="title is-6">New values after</h2>
            <ul>
              <li>Green >= Y</li>
              <li>Yellow X - Y</li>
              <li>Red Y = <</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-offset-1 is-5">
        <h2 class="title is-4">Adjust severity values</h2>
        <Accordion />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Accordion from "../components/Accordion.vue";
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";
export default {
  name: "settings",
  components: {
    Header,
    Accordion,
    BulmaAccordion,
    BulmaAccordionItem
  }
};
</script>

<style lang="scss" scoped>
.title-margins {
  margin-left: 4.2%;
  margin-top: 3.5%;
}

.underlined {
  text-decoration: underline;
}

.columns {
  padding: 5%;
  padding-top: 1%;
}

.colorgrades {
  margin-top: 2%;
}
</style>