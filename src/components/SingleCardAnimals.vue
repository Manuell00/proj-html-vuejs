<script>
// Importo lo STORE
import { store } from '../store.js';


// Inserisco l'EXPORT
export default {
    name: 'SingleCardAnimals',
    props: {
        detailsAnimals: Object
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
            <img :src="detailsAnimals.src" class="img">
        </div>
        <h4>{{ detailsAnimals.description }}</h4>
        <span class="light">{{ detailsAnimals.date }}</span>
    </div>
</template>
  
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.prod-card {
    width: calc((100% / 4) - 20px);
    height: auto;
    border: 2px solid lighten(grey, 70%);
    transition: background-color 0.6s;
    text-align: left;


    h4 {
        padding-top: 20px;
        font-weight: 300;
        color: black;
    }

    .light {
        opacity: 0.7;
        font-size: 12px;
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
  