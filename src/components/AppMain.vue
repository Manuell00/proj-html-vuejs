<script>
// Importo lo STORE
import { store } from '../store.js';

// Importo i COMPONENTI
import MainJumbotron from './MainJumbotron.vue'
import MainCategory from './MainCategory.vue'
import MainUsers from './MainUsers.vue'
import MainProduct from './MainProduct.vue'

// Inserisco l'EXPORT
export default {
    name: 'AppMain',
    components: {
        MainJumbotron,
        MainCategory,
        MainUsers,
        MainProduct,
    },

    // Inserisco i dati
    data() {
        return {
            store,
        }
    },

    // Dovrò inserire i metodi
}
</script>

<!-- TEMPLATE -->
<!-- In qusto caso essendo un componente molto grosso, lo renderò padre di altri piccoli sottocomponenti -->
<template>
    <MainJumbotron />
    <MainCategory />
    <MainUsers />
    <MainProduct />
</template>

<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;
</style>
