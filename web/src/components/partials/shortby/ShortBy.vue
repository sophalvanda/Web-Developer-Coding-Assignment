<template>
    <div class="short mt-5">
        <p>Short by</p>
        <div class="btn mt-3 d-flex">
            <button @click="getAscending">Ascending</button>
            <button class="ml-2" @click="getDescending">Descending</button>
        </div>
    </div>
</template>
<script setup>
 import { countriesStores } from "@/stores/countrieStore";
const countriesStore = countriesStores()
const getAscending = async () => {
    try {
        countriesStore.getCountryByAscending();
    } catch (error){
        console.log(error);
    }
};
const getDescending = async () => {
    try {
        countriesStore.getCountryByDescending();
    }catch(error){
        console.log(error);
    }
}

</script>
<style scoped>
.short{
    margin-left: 5%;
}
.btn button{
    /* border: 2px solid #01579B; */
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.btn button:hover{
    background-color: rgb(0, 102, 255);
    color: white;
}
</style>