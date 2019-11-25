<template>
  <div id="list">
    <SortedTable :values="values">
      <thead>
        <tr>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="street_name">Streetname</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="energy_grade">Energy Grade</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="energy_usage">Energy Usage</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="weight">Weight</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="maitence_activity">Maintence Activity</SortLink>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <SortLink name="crowns_per_year">Kr. pr. m2/year</SortLink>
          </th>
        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="value in sort.values" :key="value.id">
          <td>{{ value.street_name }}</td>
          <td>{{ value.energy_grade }}</td>
          <td>{{ value.energy_usage }}</td>
          <td>{{ value.weight }}</td>
          <td>{{ value.maitence_activity }}</td>
          <td>{{ value.crowns_per_year }}</td>
        </tr>
      </tbody>
    </SortedTable>
  </div>
</template>

<script>
export default {
  name: "List",
  data: function() {
    return {
      values: [
        {
          street_name: "Årlsmose vej 27, 4700 Næstved",
          energy_grade: "C",
          energy_usage: "3100 kWH",
          weight: "39",
          maitence_activity: "NO",
          crowns_per_year: "73,1kr/m2"
        },
        {
          street_name: "Karl Åge Gade 69, 4700 Næstved",
          energy_grade: "+A",
          energy_usage: "1600 kWH",
          weight: "17",
          maitence_activity: "NO",
          crowns_per_year: "39,7kr/m2"
        },
        {
          street_name: "Bagt Holms Stræde 17, 4700 Næstved",
          energy_grade: "D",
          energy_usage: "4700 kWH",
          weight: "68",
          maitence_activity: "YES",
          crowns_per_year: "86,9kr/m2"
        },
        {
          street_name: "Selch Rup 38, 4700 Næstved",
          energy_grade: "+++A",
          energy_usage: "1100 kWH",
          weight: "68",
          maitence_activity: "YES",
          crowns_per_year: "28,3kr/m2"
        },
        {
          street_name: "Korsgaard 49, 4700 Næstved",
          energy_grade: "++A",
          energy_usage: "1400 kWH",
          weight: "15",
          maitence_activity: "NO",
          crowns_per_year: "33,4kr/m2"
        },
        {
          street_name: "H. Maiti Stræde 19, 4700 Næstved",
          energy_grade: "B",
          energy_usage: "2600 kWH",
          weight: "42",
          maitence_activity: "YES",
          crowns_per_year: "51,8kr/m2"
        },
        {
          street_name: "John Hansen Vej 12, 4700 Næstved",
          energy_grade: "A",
          energy_usage: "2000 kWH",
          weight: "23",
          maitence_activity: "NO",
          crowns_per_year: "41,6kr/m2"
        },
        {
          street_name: "Krøners Holm 83, 4700 Næstved",
          energy_grade: "D",
          energy_usage: "5200 kWH",
          weight: "73",
          maitence_activity: "YES",
          crowns_per_year: "93,1kr/m2"
        },
        {
          street_name: "Lorentzens Ale 56 4700 Næstved",
          energy_grade: "+A",
          energy_usage: "1600 kWH",
          weight: "21",
          maitence_activity: "NO",
          crowns_per_year: "38,1kr/m2"
        },
        {
          street_name: "Poulsen Høj, 4700 Næstved",
          energy_grade: "A",
          energy_usage: "2100 kWH",
          weight: "51",
          maitence_activity: "NO",
          crowns_per_year: "47,9kr/m2"
        },
        {
          street_name: "Modvig Lang Gade Vej 161TV, 4700 Næstved",
          energy_grade: "A",
          energy_usage: "2200 kWH",
          weight: "26",
          maitence_activity: "NO",
          crowns_per_year: "45,1kr/m2"
        },
        {
          street_name: "Feil Berg 16, 4700 Næstved",
          energy_grade: "D",
          energy_usage: "5700 kWH",
          weight: "83",
          maitence_activity: "YES",
          crowns_per_year: "101,1kr/m2"
        },
        {
          street_name: "Højgaard Jens Stræde 99, 4700 Næstved",
          energy_grade: "A",
          energy_usage: "2000 kWH",
          weight: "36",
          maitence_activity: "NO",
          crowns_per_year: "44,4kr/m2"
        },
        {
          street_name: "Nortungs Ale 57, 4700 Næstved",
          energy_grade: "B",
          energy_usage: "2700 kWH",
          weight: "36",
          maitence_activity: "NO",
          crowns_per_year: "55,3kr/m2"
        },
        {
          street_name: "Klintholms Vej 48, 4700 Næstved",
          energy_grade: "B",
          energy_usage: "2700 kWH",
          weight: "43",
          maitence_activity: "NO",
          crowns_per_year: "55,3kr/m2"
        }
      ]
    };
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
#list {
  display: block;
}

tr:nth-child(even) {
  background: #f4f3f3;
}

thead {
  background: #707070;
}

a {
  color: #fff;
}
</style>
