<template>
    <div>
        <h3 class="title mt-5">Contries Catalog</h3>
        <div class="search">
            <searchcontries></searchcontries>
            <div class="btn-action">
                <shortby></shortby>
                <!-- <buttonpagination></buttonpagination> -->
            </div>
            <h1 v-if="error" class="error">{{ searchErrorMessage }}</h1>
            <listCard v-else></listCard>
        </div>
    </div>
</template>
<script>
import searchcontries from "../partials/search/SearchContries.vue"
import shortby from "../partials/shortby/ShortBy.vue"
// import buttonpagination from "../partials/pagination/Pagination.vue"
// import CardTemplate from "../partials/cards/CardTemplate.vue"
import { countriesStores } from "@/stores/countrieStore";
import { mapState } from 'pinia';

export default {
  data() {
    return {
      searchErrorMessage: "This country is not found!"
    }
  },
  computed:{
    ...mapState(countriesStores, ['countries', 'error'])
  },
  components:{
  searchcontries,
  shortby
  }
}
</script>
<style scoped>
.search{
    width: 100%;
}
.title{
    margin-left: 5%;
}
.btn-action{
    display: flex;
    justify-content: space-between;
}
.error{
    text-align: center;
    color: red;
}
</style>