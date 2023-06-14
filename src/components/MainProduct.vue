<script>
// Importo lo STORE
import { store } from '../store.js';

import SingleCardArrivals from './SingleCardArrivals.vue'

// Inserisco l'EXPORT
export default {
    name: 'MainProduct',

    components: {
        SingleCardArrivals,
    },

    data() {
        return {
            store,
            charactersList: [
                {
                    id: "1",
                    src: "../../public/images/product-8.jpg",
                    title: "Colored pet bed",
                    quantities: "1",
                    actualPrice: "$18 - $26",
                    oldPrice: "$18 - $26"
                },
                {
                    id: "2",
                    src: "../../public/images/product-2.jpg",
                    title: "Colorful ball set",
                    quantities: "6",
                    actualPrice: "$29",
                    oldPrice: "$29"
                },
                {
                    id: "3",
                    src: "../../public/images/product-3.jpg",
                    title: "Dog bone",
                    quantities: "6",
                    actualPrice: "$18",
                    oldPrice: "$29"
                },
                {
                    id: "4",
                    src: "../../public/images/product-4.jpg",
                    title: "Animal transport bag",
                    quantities: "6",
                    actualPrice: "$29",
                    oldPrice: "$29"
                },
                {
                    id: "5",
                    src: "../../public/images/product-5.jpg",
                    title: "Animal transport cage",
                    actualPrice: "$25",
                    oldPrice: "$25"
                },
                {
                    id: "6",
                    src: "../../public/images/product-10.jpg",
                    title: "Closable cat litter",
                    actualPrice: "$25",
                    oldPrice: "$25"
                },
            ],
        }
    },

}
</script>

<!-- TEMPLATE -->
<template>
    <div class="container-fluid">
        <div class="container text-center">
            <div class="title">
                <h1>New products arrival</h1>
                <span>Latest production</span>
            </div>

            <!-- Inserisco le carte con gli oggetti per gli animali -->
            <div class="cards">
                <SingleCardArrivals v-for="(character, index) in charactersList" :key="character.id"
                    :characterPet="character" />
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
    height: auto;
    width: 100%;
    background-color: #fff;
    padding-top: 100px;
    padding-bottom: 150px;

    .container {
        height: auto;

        .title {
            width: 50%;
            margin: 0 auto;
            padding-bottom: 50px;

            h1 {
                font-family: 'Times New Roman', Times, serif;
            }

            p {
                padding-top: 20px;
            }
        }

        .cards {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            row-gap: 100px;
            flex-direction: row;
        }
    }


}
</style>
