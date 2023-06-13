<script>
// Importo lo STORE
import { store } from '../store.js';

// Importo i COMPONENTI
import SingleCardPet from './SingleCardPet.vue'

// Inserisco l'EXPORT
export default {
    name: 'MainCategory',

    components: {
        SingleCardPet,
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
    <div class="container-fluid">
        <div class="container">
            <div class="title">
                <h1>Browse by category</h1>
                <p>Augue purus et, tincidunt condimentum mauris. At nihb retrum mi in. Nisi, vite interdum eleifend,
                    consequat
                    nulla rhoncus dictum. Viverra</p>
            </div>

            <div class="cards">
                <SingleCardPet v-for="character in store.charactersListPet" :key="character.id" :detailsPet="character" />
            </div>
        </div>

    </div>
</template>



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;


.container-fluid {
    text-align: center;
    width: 100%;
    background-color: #fff;
    padding-top: 150px;

    .title {
        width: 50%;
        margin: 0 auto;

        h1 {
            font-family: 'Times New Roman', Times, serif;
        }

        p {
            padding-top: 20px;
        }
    }

}
</style>
