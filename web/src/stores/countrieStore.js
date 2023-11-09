import { defineStore } from "pinia";
import baseAPI from "./axiosHandle";

export const countriesStores = defineStore("country", {
  state: () => ({
    countries: [],
    currentPage: 1,
    perPage: 25,
    error:null
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
      // return this.countries;
    },
    async searchCountry(name) {
      this.currentPage = 1
      await baseAPI
        .get(`/name/${name}`)
        .then((response) => {
          console.log(this.countries);
          this.countries = response.data;
          this.error = null
        })
        .catch((err) => this.error = err);
    },
    getCountryByAscending() {
      const sortedCountries = this.countries.sort((a, b) =>
        a.name.official.localeCompare(b.name.official)
      );
      this.countries = sortedCountries;
      console.log(this.countries);
    },
    getCountryByDescending() {
      const sortedCountries = this.countries.sort((a, b) =>
        b.name.official.localeCompare(a.name.official)
      );
      this.countries = sortedCountries;
      console.log(this.countries);
    },
   
  async previousPage() {
    if (this.currentPage > 1) {
        this.currentPage--;
    }
},
async nextPage(totalPages) {
    if (this.currentPage < totalPages) {
        this.currentPage++;
    }
},
setTotalPages(total){
  this.totalPages = total;
}
  },
  getters:{
    paginateCountries() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.countries.slice(startIndex, endIndex)
  },
  }
});