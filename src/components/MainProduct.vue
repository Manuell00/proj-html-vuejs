<script>
// Importo lo STORE
import { store } from '../store.js';

// Inserisco l'EXPORT
export default {
    name: 'MainProduct',

    data() {
        return {
            store,
            showGlass: true,
            placeholderText: "Search..."
        }
    },

}
</script>

<!-- TEMPLATE -->
<template></template>



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;
</style>
