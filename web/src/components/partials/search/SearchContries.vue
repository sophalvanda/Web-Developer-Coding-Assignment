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
      <v-text-field
        class="mt-5"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search Countries........"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        v-model="searchName"
      ></v-text-field>
      <button @click="searchCountries">Search</button>
    </v-card-text>
    <p v-if="searchError">Country not found.</p>
  </div>
</template>

<script>
  import { countriesStores } from "@/stores/countrieStore";
import { ref } from "vue";

export default {
  setup() {
    const searchName = ref("");
    const countriesStore = countriesStores();
    const searchError = ref(false);

    const searchCountries = async () => {
      try {
        // Check if search name is empty
        if (!searchName.value.trim()) {
          searchError.value = true;
          return;
        }

        // Perform the search operation
        const result = await countriesStore.searchCountry(searchName.value);

        // Check if search result is empty
        if (result.length === 0) {
          searchError.value = true;
        } else {
          searchError.value = false;
          // Process the search result
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    return {
      searchName,
      searchError,
      searchCountries,
    };
  },
};

</script>

<style scoped>
.input-search {
  margin-left: 5%;
  margin-right: 5%;
}
</style>