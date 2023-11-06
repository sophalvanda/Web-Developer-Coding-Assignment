<template>
    <div class="button mt-10">
        <div class=" mt-2 d-flex">
            <button class="mr-3 bg-grey-lighten-1">Previous</button>
            <button class="bg-light-blue-darken-4">Next</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "ButtonPagination",
}
</script>
<style scoped>
.button{
    margin-right: 5%;
    gap: 2;
}
.button button{
    /* border: 2px solid black; */
    padding: 5px;
}
</style>