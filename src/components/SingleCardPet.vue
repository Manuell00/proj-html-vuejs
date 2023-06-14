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
    <div class="prod-card">
        <div class="img-container">
            <img :src="detailsPet.src" :alt="detailsPet.title" class="img">
        </div>
        <h3>{{ detailsPet.title }} ({{ detailsPet.quantities }})</h3>
    </div>
</template>
  
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.prod-card {
    width: calc((100% / 4) - 20px);
    height: 350px;
    background-color: $bg-grey;
    border: 2px solid lighten(grey, 70%);

    h3 {
        padding-top: 20px;
        font-weight: 300;
        color: black;
    }

    .img-container {
        width: 100%;
        height: 100%;
        /* Regola l'altezza del container immagine come preferisci */
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
}
</style>
  