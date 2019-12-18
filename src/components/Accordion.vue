<template>
  <div>
    <BulmaAccordion
      dropdown
      :icon="'caret'"
      :caretAnimation="{
        duration: '.6s',
        timerFunc: 'ease-in-out'
    }"
      :slide="{
        duration: '.9s',
        timerFunc: 'ease'
    }"
    >
      <!-- The wrapper component for all the items -->
      <BulmaAccordionItem>
        <h4 slot="title">Just a title</h4>
      </BulmaAccordionItem>
      <!-- add as many of these items as you need - fill them with content via the slots -->
      <BulmaAccordionItem>
        <h4 slot="title">A title with content</h4>
        <p slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
          illo expedita asperiores rem iure aliquid dolore, pariatur
          dignissimos, minima inventore? Minima voluptatum nulla, error omnis
          laboriosam voluptatibus rem aperiam.
        </p>
      </BulmaAccordionItem>
      <BulmaAccordionItem>
        <h4 slot="title">All of it</h4>
        <p slot="content">boo</p>
        <button class="button is-primary" slot="footer">Click Me!</button>
      </BulmaAccordionItem>
    </BulmaAccordion>
  </div>
</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";

export default {
  name: "cool-component",
  data() {
    return {};
  },
  components: {
    BulmaAccordion,
    BulmaAccordionItem
  }
};
</script>

<style lang="scss" scoped>
</style>