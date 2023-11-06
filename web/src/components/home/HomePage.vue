<template>
    <div>
        <h3 class="title mt-5">Contries Catalog</h3>
        <div class="search">
            <searchcontries></searchcontries>
            <div class="btn-action">
                <shortby></shortby>
                <buttonpagination></buttonpagination>
            </div>
        </div>
    </div>
</template>
<script>
import searchcontries from "../partials/search/SearchContries.vue"
import shortby from "../partials/shortby/ShortBy.vue"
import buttonpagination from "../partials/pagination/Pagination.vue"
export default {
    name: "HomePage",
    setup() {
        
    },
    components: {
        searchcontries,
        shortby,
        buttonpagination
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
</style>