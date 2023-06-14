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
    <div class="prod-card" v-if="detailsPet.id < 5">
        <div class="img-container">
            <img :src="detailsPet.src" :alt="detailsPet.title" class="img">
        </div>
        <h5>{{ detailsPet.title }} ({{ detailsPet.quantities }})</h5>
    </div>

    <div class="prod-card" v-if="detailsPet.id >= 5">
        <div class="img-container">
            <img :src="detailsPet.src" :alt="detailsPet.title" class="img">
        </div>
        <h5>{{ detailsPet.title }}</h5>
        <div>
            <span v-if="detailsPet.actualPrice != detailsPet.oldPrice" class="oldprice">{{ detailsPet.oldPrice }}</span>
            <span class="light">{{ detailsPet.actualPrice }}</span>
        </div>
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

    h5 {
        padding-top: 20px;
        font-weight: 300;
        color: black;
    }

    .light {
        opacity: 0.7;
    }

    .oldprice {
        font-size: 13px;
        text-decoration: line-through;
        margin-right: 10px;
        opacity: 0.7;
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

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
}
</style>
  