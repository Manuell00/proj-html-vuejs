<script>
// Importo lo STORE
import { store } from '../store.js';

// Inserisco l'EXPORT
export default {
    name: 'MainJumbotron',

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
            <!-- Inserisco il menu -->
            <div class="text">
                <div>
                    <span class="bold"><i class="fa-solid fa-book"></i> International </span>
                    <span class="light">Shipping Services</span>
                </div>

                <div>
                    <span class="bold"><i class="fa-regular fa-clock"></i> </span>
                    <span class="light"> See our </span>
                    <span class="bold">store hours </span>
                    <span class="light">and services</span>
                </div>

                <div>
                    <span class="bold"><i class="fa-solid fa-check"></i></span>
                    <span class="light"> We price match to give you the </span>
                    <span class="bold">best deals</span>
                </div>
            </div>

        </div>

        <!-- Inserisco il container contenente l'immagine di bg -->
        <div class="bg-container">

            <!-- Inserisco un contenitore per l'opacità -->
            <div class="overlay"></div>

            <!-- Inserisco il container con le scritte -->
            <div class="title">
                <div id="find">
                    FIND THE BEST ANIMAL SUPPLIES
                </div>

                <h1>We know animals are a part of your family, let us help take care of them</h1>

                <button>Learn more about us</button>
            </div>
        </div>

        <div id="price">
            <div class="container">
                <div class="image-container">
                    <img src="../../public/images/food-transparent-5.png" alt="">
                </div>

                <span>Get $25 OFF your first purchase of our homemade pet food!</span>
                <div class="light">Visit the shop</div>

            </div>

        </div>

    </div>
</template>



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.container-fluid {
    background-color: $bg-darkgreen;
    color: white;

    .text {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .bold {
            font-weight: 700;

            i {
                font-weight: 700;
                margin-right: 5px;
            }
        }

        .light {
            opacity: 0.7;
        }
    }


    .bg-container {
        height: 700px;
        width: 100%;
        position: relative;

        .overlay {
            z-index: 0;
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-image: url(../../public/images/demo-pet-supplies2.jpg);
            background-size: cover;
            background-position: center;
            filter: brightness(0.8) saturate(1.1);
        }



        .title {
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            left: 15%;
            z-index: 100;
            height: 100%;
            filter: brightness(1.8) saturate(1.1);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            position: absolute;
            width: 600px;
            height: 400px;

            #find {
                font-family: monospace
            }

            h1 {
                font-size: 55px;
                font-family: 'Times New Roman', Times, serif;
            }


            button {
                font-size: small;
                font-weight: 600;
                padding: 10px 20px;
                border-radius: 50px;
                border: 0;
            }
        }

    }

    #price {
        height: 150px;
        font-size: 1.3rem;

        .container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;

            .image-container {
                height: 80%;
                width: auto;
                align-self: flex-end;

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }

            .light {
                opacity: 0.6;
                text-decoration: underline;
            }
        }
    }

}
</style>
