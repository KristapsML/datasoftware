<template>
  <div>
    <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "LineGraph",
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [2013, 2014, 2015, 2016, 2017, 2018]
        }
      },
      series: [
        {
          name: "Degradation",
          data: [33, 42, 27, 63, 44, 36]
        }
      ]
    };
  }
};
</script>

<style>
</style>