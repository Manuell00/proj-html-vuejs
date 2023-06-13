<script>
// Importo lo STORE
import { store } from '../store.js';


// Inserisco l'EXPORT
export default {
    name: 'SingleCardPet',
    props: {
        detailsPet: Object
    },

    data() {
        return {
            store,
        }
    },

}
</script>

<!-- TEMPLATE -->
<template>
    <!-- Blocco Prodotto (Scopongo in componente figlio) -->
    <div class="prod-card">
        <img :src="detailsPet.src" :alt="detailsPet.title">
        <h3>{{ detailsPet.title }} ({{ detailsPet.quantities }})</h3>
    </div>
</template>



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.prod-card {
    flex-basis: 25%;
    height: auto;
    padding: 20px;
    background-color: $bg-grey;
    border: 2px solid lighten(grey, 70%);

    h3 {
        color: black;
    }

    .img {
        display: flex;
        object-fit: cover;
    }
}
</style>
