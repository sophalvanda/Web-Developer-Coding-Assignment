<template>
    <div class="short mt-5">
        <p>Short by</p>
        <div class="btn mt-3 d-flex">
            <button>Ascending</button>
            <button class="ml-2">Descending</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "ShortBy",
}
</script>
<style scoped>
.short{
    margin-left: 5%;
}
.btn button{
    border: 2px solid #01579B;
    padding: 5px;
}
</style>