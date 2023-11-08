<template>
    <!-- <pre>{{ countries }}</pre> -->
    <div class="card mt-4">
        <cardTemplete v-for="country of countries" :key="country.id" :country="country"></cardTemplete>
    </div>
</template>
<script>
import {countriesStores} from "@/stores/countrieStore";
import { mapActions, mapState } from "pinia";

export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState(countriesStores, ['countries'])
    },
    methods:{
        ...mapActions(countriesStores, ['getDataCountry'])
    },
    mounted(){
        this.getDataCountry()
    }
}
</script>
<style scoped>
.card{
    margin-left: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: 4%;
}
</style>
