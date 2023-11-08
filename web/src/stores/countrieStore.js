import { defineStore } from "pinia";
import baseAPI from "./axiosHandle";
export const countriesStores = defineStore("country", {
    state: () => ({
        countries: [],
    }),
    actions: {
        async getDataCountry() {
            await baseAPI
              .get(`/all`)
              .then((response) => {
                this.countries = response.data;
                console.log(this.countries);
              })
              .catch((error) => console.log(error));
            return this.countries;
        },
        async searchCountry(name) {
            await baseAPI
              .get(`/name/${name}`)
              .then((response) => {
                console.log('name: ' + name);
                this.countries = response.data;
                console.log("search", this.countries);
              })
              .catch((error) => console.log(error));
        },
        getCountryByAscending() {
          const countrie = this.countries.sort((a, b) => a.name.official.localeCompare(b.name.official));
          this.countries=countrie
          console.log(this.countries);
        },
        getCountryByDescending() {
          const countrie = this.countries.sort((a, b) => b.name.official.localeCompare(a.name.official));
          this.countries=countrie
          console.log(this.countries);
        }
    }
})