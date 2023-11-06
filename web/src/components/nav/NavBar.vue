<!-- <template> -->
    <template>
  <div>
    <v-toolbar color="black">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Countries Catalog Implementation</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
    <!-- <div class="nav">
        <h3>Contries Management</h3>
    </div> -->
<!-- </template> -->
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: "NavBar",
    setup() {
        
    },
}
</script>
<style scoped>
.nav{
    background: #000;
}
</style>
