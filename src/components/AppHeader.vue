<script>
// Importo lo STORE
import { store } from '../store.js';

// Inserisco l'EXPORT
export default {
    name: 'AppHeader',

    data() {
        return {
            store
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
