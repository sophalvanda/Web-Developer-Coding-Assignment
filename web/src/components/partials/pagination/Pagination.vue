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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
</style>