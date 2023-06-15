<script>
// Importo lo STORE
import { store } from '../store.js';


// Inserisco l'EXPORT
export default {
    name: 'SingleCardArrivals',
    props: {
        characterPet: Object,
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
    <div class="prod-card" v-if="characterPet.id">
        <div class="img-container">
            <img :src="characterPet.src" :alt="characterPet.title" class="img">
        </div>
        <h5>{{ characterPet.title }}</h5>
        <div>
            <span v-if="characterPet.actualPrice != characterPet.oldPrice" class="oldprice">{{ characterPet.oldPrice
            }},00</span>
            <span class="light">{{ characterPet.actualPrice }},00</span>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.prod-card {
    width: calc((100% / 3) - 10px);
    height: 350px;
    background-color: $bg-grey;
    border: 2px solid lighten(grey, 70%);
    transition: background-color 0.6s;


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
  