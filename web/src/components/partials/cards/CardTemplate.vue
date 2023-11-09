<template>
  <!-- <pre>{{ country }}</pre> -->
    <v-card
      class="card-item ml-4" 
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
                    <img :src="country.flags.png" alt="" width="200">
                    <v-card-text>{{ country.name.official }}</v-card-text>
                  </div>
                  <div class="ml-4">
                    <p>.Native Country Name: {{ country.name.official }}</p>
                    <p>.Capital: <span v-for="town in country.capital" :key="town">{{ town }}</span></p>
                    <p>.cca2: {{ country.cca2 }}</p>
                    <p>.cca3: {{ country.cca3 }}</p>
                    <h4>.nativeName: <p v-for="n in country.name.nativeName" :key="n">  {{ n.common }}</p></h4>
                    <h4>.Alternative: <p v-for="alt in country.altSpellings" :key="alt">{{ alt }}</p></h4>
                    <h4>. Country Calling Codes: {{ country.idd.root }} <p v-for="code in country.idd.suffixes" :key="code">{{ code }}</p></h4>
                    
                    
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

