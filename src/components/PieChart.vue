<template>
  <div>
    <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  data: function() {
    return {
      options: {
        labels: ["Low Priority", "Med Priority", "High Priority"],
        plotOptions: {
          pie: {
            donut: {
              size: "90%"
            }
          }
        }
      },
      series: [278, 278, 266]
    };
  }
};
</script>

<style scoped lang="scss">
</style>