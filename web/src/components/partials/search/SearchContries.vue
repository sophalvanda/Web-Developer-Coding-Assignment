<!-- <template>
    <div class="input-search">
      <v-card-text>
        <v-text-field
            class="mt-5"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search Contries........"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          v-model="searchName"
        ></v-text-field>
        <button @click="searchCountries">Search</button>
      </v-card-text>
      <p v-if="searchResult === null">Country not found.</p>
    </div>
  </template>
  <script setup>
  import { countriesStores } from "@/stores/countrieStore";
import { ref } from "vue";
const searchName = ref("")
const countriesStore = countriesStores()
const searchResult = ref(null);
const searchCountries = async () => {
  try {
    searchResult.value = countriesStore.searchCountry(searchName.value);
  } catch (error) {
    console.error('Error:', error);
  }
};

  </script>
<style scoped>
.input-search{
    margin-left: 5%;
    margin-right: 5%;
}
</style> -->
<template>
  <div class="input-search">
    <v-card-text>
      <input class="input" type="text" placeholder="Please enter county name......." v-model="searchName">
      <button @click="searchCountries" class="btn">Search</button>
    </v-card-text>
  </div>
</template>

<script>
import { countriesStores } from "@/stores/countrieStore";
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      searchName: "",
      searchError: false,
      searchErrorMessage: ""
    }
  },
  computed:{
    ...mapState(countriesStores, ['countries', 'error'])
  },
  methods: {
    ...mapActions(countriesStores, ['searchCountry']),
    async searchCountries() {
      try {
        // Check if search name is empty
        if (!this.searchName.trim()) {
          this.searchError = true;
          this.searchErrorMessage = "Please enter a search query.";
          return;
        }

        // Perform the search operation
        await this.searchCountry(this.searchName);
        if(this.error){
          this.searchError=true
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  },
};
</script>

<style scoped>
.input-search {
  margin-left: 5%;
  margin-right: 5%;
}
.input{
  width: 90%;
  padding: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.btn{
  background-color: rgb(0, 102, 255);
  padding: 10px;
  color: white;
  cursor: pointer;
}
.btn:hover{
  background-color: rgba(0, 102, 255, 0.683);
}
</style>