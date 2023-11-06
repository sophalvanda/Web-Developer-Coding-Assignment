<template>
    <div class="input-search">
      <v-card-text>
        <v-text-field
            class="mt-5"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search Contries........"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
        ></v-text-field>
      </v-card-text>
    </div>
  </template>
  <script>
    export default {
        name: 'SearchContries',
      data: () => ({
        loaded: false,
        loading: false,
      }),
  
      methods: {
        onClick () {
          this.loading = true
  
          setTimeout(() => {
            this.loading = false
            this.loaded = true
          }, 2000)
        },
      },
    }
  </script>
<style scoped>
.input-search{
    margin-left: 5%;
    margin-right: 5%;
}
</style>