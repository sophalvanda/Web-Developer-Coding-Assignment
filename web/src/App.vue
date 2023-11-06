<template>
  <div>
    <navbar></navbar>
    <homepage></homepage>
  </div>
</template>

<script>
import navbar from './components/nav/NavBar.vue'
import homepage from './components/home/HomePage.vue'

export default {
  name: 'App',

  components: {
    navbar,
    homepage
  },

  data: () => ({
    //
  }),
}
</script>
