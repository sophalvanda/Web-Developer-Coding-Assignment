<template>
  <!-- <pre>{{ country }}</pre> -->
    <v-card
      class="card-item"
      max-width="200"
     
    >
      <v-img
        class="align-end text-white"
        height="100"
        :src="country.flags.png"
        cover
      >
      </v-img>
      <v-card-text>
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <!-- <v-btn v-bind="props" text="Open Dialog"> </v-btn> -->
            <h3 class="name-country" v-bind="props">{{ country.name.official }}</h3>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card color="card-detail">
              <div class="details">
                <div>
                  <div>
                    <img :src="country.flags.png" alt="" width="200">
                    <v-card-text>{{ country.name.official }}</v-card-text>
                  </div>
                  <div>
                    <p>.Native Country Name: {{ country.name.official }}</p>
                    <p v-for="name of country.capital" :key="name">.Capital name: {{ capital }}</p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li></li>
                    <p>- Alternative Country Name: 
                      <ul>
                        <li v-for="altName of country.altSpellings" :key="altName">
                        <p>.{{ altName }}</p>
                        </li>
                      </ul>
                    </p>
                    
                    <li>.Country Calling Codes: {{ country.idd }}</li>
                  </ul>
                </div>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
        <p>{{ country.cca2 }}</p>
        <p>{{ country.cca3 }}</p>
      </v-card-text>
    </v-card>
  </template>
<script >
export default {
  props:{
    country: {
        type: Object,
        required: true
      }
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.card-item {
  width: 20%;
  margin-top: 1%;
}
.name-country:hover {
  cursor: pointer;
  color: brown;
}
.details{
  display: flex;
}
.details ul li{
  list-style: none;
}
.card-detail{
  padding: 5px;
}
</style>

