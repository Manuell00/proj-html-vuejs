<script>
// Importo lo STORE
import { store } from './store.js';
// Importo AXIOS 
import axios from 'axios';

// Importo i COMPONENTI
import AppLoader from './components/AppLoader.vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'


// Inserisco l'EXPORT
export default {
  components: {
    AppLoader,
    AppHeader,
    AppMain,
    AppFooter,
  },

  // Inserisco i dati
  data() {
    return {
      store,
    }
  },

  // Dovrò inserire i metodi
  methods: {
    load() {
      store.loading = true
      setTimeout(() => {
        store.loading = false;
      }, 2000);
    }
  },
  // CREATED viene utilizzato al posto di mounted perchè svolge l'attività quando viene creata l'app
  created() {
    this.load()
  }
}


</script>



<!-- TEMPLATE -->
<template>
  <div v-if="store.loading">
    <AppLoader />
  </div>

  <div v-else>
    <!-- Inserisco l'header e il suo componente -->
    <header>
      <AppHeader />
    </header>

    <!-- Inserisco il main e il suo componente -->
    <main>
      <AppMain />
    </main>

    <!-- Inserisco il footer e il suo componente -->
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>


<!-- Inserisco lo style -->
<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>
