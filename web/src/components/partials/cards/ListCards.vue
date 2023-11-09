<template>
    <div>
        <div class="card mt-4">
            <cardTemplete v-for="country in paginateCountries" :key="country.id" :country="country"></cardTemplete>
        </div>
        <div class="button mt-10">
            <div class="mt-2 d-flex paginate">
                <button @click="previousPage()" class="mr-3 bg-grey-lighten-1 back"
                    :disabled="currentPage === 1">Previous</button>
                <button @click="nextPage(totalPages)" :disabled="currentPage === totalPages" class="bg-light-blue-darken-4 btn-next">Next</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { countriesStores } from "@/stores/countrieStore";
import { mapActions, mapState } from "pinia";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(countriesStores, ['countries','perPage','paginateCountries', 'currentPage']),
        totalPages() {
            // console.log(this.countries);
            return Math.ceil(this.countries.length / this.perPage)
        },
    },
    mounted() {
        this.getDataCountry();
    },
    methods: {
        ...mapActions(countriesStores, ['getDataCountry', 'previousPage', 'nextPage']),
      
    },
};
</script>
  
<style scoped>
.card {
    margin-left: 4%;
    display: flex;
    flex-wrap: wrap;
    margin-right: 4%;
}
.paginate{
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 7%;
    margin-bottom: 5%;
}
.paginate button {
    width: 10%;
    padding: 10px;
}
</style>
