<script>
// Importo lo STORE
import { store } from '../store.js';

// Importo i COMPONENTI
import SingleCardPet from './SingleCardPet.vue'
import SingleCardFood from './SingleCardFood.vue'

// Inserisco l'EXPORT
export default {
    name: 'MainCategory',

    components: {
        SingleCardPet,
        SingleCardFood,
    },

    data() {
        return {
            store,
            charactersListPet: [
                {
                    id: "1",
                    src: "../../public/images/product-9.jpg",
                    title: "Bed",
                    quantities: "1",
                    actualPrice: "$18 - $26",
                    oldPrice: "$18 - $26"
                },
                {
                    id: "2",
                    src: "../../public/images/product-3.jpg",
                    title: "Food",
                    quantities: "6",
                    actualPrice: "$18",
                    oldPrice: "$29"
                },
                {
                    id: "3",
                    src: "../../public/images/product-2.jpg",
                    title: "Toys",
                    quantities: "6",
                    actualPrice: "$29",
                    oldPrice: "$29"
                },
                {
                    id: "4",
                    src: "../../public/images/product-4.jpg",
                    title: "Transport",
                    quantities: "6",
                    actualPrice: "$29",
                    oldPrice: "$29"
                },
                {
                    id: "5",
                    src: "../../public/images/product-21.jpg",
                    title: "Transport cage",
                    actualPrice: "$25",
                    oldPrice: "$25"
                },
                {
                    id: "6",
                    src: "../../public/images/product-20.jpg",
                    title: "Dog leash",
                    actualPrice: "$25",
                    oldPrice: "$25"
                },
                {
                    id: "7",
                    src: "../../public/images/product-16.jpg",
                    title: "Transport cage",
                    actualPrice: "$25",
                    oldPrice: "$35"
                },
                {
                    id: "8",
                    src: "../../public/images/product-11.jpg",
                    title: "Colorful cat leash",
                    actualPrice: "$12",
                    oldPrice: "$12"
                },
            ],
            charactersListPetFood: [
                {
                    id: "1",
                    src: "../../public/images/food-transparent-18.png",
                    title: "Kibble",
                    description: "Dry dog food",
                    type: "dry"
                },
                {
                    id: "2",
                    src: "../../public/images/food-transparent-17.png",
                    title: "Moist",
                    description: "Canned dog food",
                    type: "moist"

                },
                {
                    id: "3",
                    src: "../../public/images/food-transparent-17.png",
                    title: "Frozen",
                    description: "Freeze-Dried food",
                    type: "frozen"

                },
            ],
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
                    consequat nulla rhoncus dictum. Viverra</p>
            </div>

            <!-- Inserisco le carte con gli oggetti per gli animali -->
            <div class="cards">
                <SingleCardPet v-for="(character, index) in charactersListPet.slice(0, 4)" :key="character.id"
                    :detailsPet="character" />
            </div>

            <!-- Inserisco le carte con il mangiare per i cani -->
            <div class="food-cards">
                <SingleCardFood v-for="character in charactersListPetFood" :key="character.id" :detailsPet="character" />
            </div>

            <!-- Inserisco l'immagine dei nuovi arrivi -->
            <div class="new-arrivals">
                <div class="overlay"></div> <!-- Aggiunto div di classe overlay -->
                <div class="arrivals-text">
                    <h5>FIND THE BEST ANIMAL SUPPLIES</h5>
                    <h1>New arrivals weekly</h1>
                    <button>Learn more about us</button>
                </div>
            </div>

            <!-- Inserisco le carte con gli oggetti per gli animali -->
            <div class="cards">
                <SingleCardPet v-for="character in charactersListPet.slice(4, 8)" :key="character.id"
                    :detailsPet="character" />
            </div>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.container-fluid {
    text-align: center;
    width: 100%;
    background-color: #fff;
    padding-top: 100px;

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

    .cards {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 40px;
        flex-direction: row;
    }

    .food-cards {
        padding-top: 150px;
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        flex-direction: row;

    }

    .new-arrivals {
        margin-top: 150px;
        width: 100%;
        height: 450px;
        position: relative;
        /* Aggiunto position: relative per creare un contesto di posizionamento per gli elementi figlio */
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(../../public/images/banner-3-2x-scaled.jpg);
            background-size: cover;
            background-position: center;
            filter: brightness(0.8);
        }

        .arrivals-text {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            position: relative;
            z-index: 1;

            h1 {
                font-size: 55px;
                font-family: 'Times New Roman', Times, serif;
            }

            h5 {
                font-family: monospace;
                font-size: 18px;
                font-weight: 500;
            }

            button {
                font-size: small;
                font-weight: 600;
                padding: 10px 20px;
                border-radius: 50px;
                border: 0;
                transition: background-color 0.5s;
                transform: 0.5s;
            }

            button:hover {
                background-color: #ccc;
                transform: scale(1.1);
            }
        }
    }
}
</style>
  