<script>
// Importo lo STORE
import { store } from '../store.js';

// Importo i COMPONENTI
import SingleCardUser from './SingleCardUser.vue'
import SingleCardAnimals from './SingleCardAnimals.vue'

// Inserisco l'EXPORT
export default {
    name: 'MainUsers',

    components: {
        SingleCardUser,
        SingleCardAnimals,
    },

    data() {
        return {
            store,
            charactersListUsers: [
                {
                    id: "1",
                    src: "../../public/images/avatar-3.jpg",
                    description: "Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.",
                    name: "Lisa Smith"
                },
                {
                    id: "2",
                    src: "../../public/images/avatar-1.jpg",
                    description: "Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit..",
                    name: "Melissa Green"
                },
                {
                    id: "3",
                    src: "../../public/images/avatar-4.jpg",
                    description: "Curabitur arcu erat. accumsan id imprendiet et, porttitor at sem. Proin eget tortor risus vestibulum ente Ipsum",
                    name: "Sam Lewis"
                },

            ],

            charactersListAnimals: [
                {
                    id: "1",
                    src: "../../public/images/blog-1.jpg",
                    description: "How to 'loose leash walk' your dog",
                    date: "April 21st,2020"
                },
                {
                    id: "2",
                    src: "../../public/images/blog-2.jpg",
                    description: "Stop cats from scratching furniture",
                    date: "April 19th,2020"
                },
                {
                    id: "3",
                    src: "../../public/images/blog-3.jpg",
                    description: "Where to buy the best pet food",
                    date: "April 18th,2020"
                },
                {
                    id: "4",
                    src: "../../public/images/blog-4.jpg",
                    description: "Proper care for your pet toys",
                    date: "April 17th,2020"
                },

            ]
        }
    },

}
</script>

<!-- TEMPLATE -->
<template>
    <!-- Definisco la prima sezione -->
    <div class="container-fluid" id="first-container">
        <div class="container">
            <h2>Users testimonials</h2>

            <!-- Inserisco le card degli users -->
            <div class="user-testimonials">
                <SingleCardUser v-for="character in charactersListUsers" :key="character.id" :detailsUser="character" />
            </div>
        </div>
    </div>

    <!-- Definisco la seconda sezione -->
    <div class="container-fluid" id="second-container">

        <!-- Inserisco il container di mezzo -->
        <div class="container" id="middle-container">
            <div class="text-letter">
                <h2>Join our newsletter</h2>
                <p>Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.
                </p>

                <form>
                    <input type="email" placeholder="Insert your email ...*">
                    <button>Subscribe</button>
                </form>
            </div>
        </div>

        <!-- Inserisco il container per la terza sezione -->
        <div class="container text-center" id="third-container">
            <h2>Get the best tips & tricks</h2>
            <span class="light">Recent articles</span>

            <!-- Inserisco le card degli animals -->
            <div class="animals">
                <SingleCardAnimals v-for="character in charactersListAnimals" :key="character.id"
                    :detailsAnimals="character" />
            </div>

            <button>Read all the articles</button>
        </div>
    </div>


    <div class="container-fluid" id="double-image">
        <div class="images-container">

            <!-- Inserisco la prima image -->
            <div class="first-image">
                <div class="images-text">
                    <h5>FIND THE BEST ANIMAL SUPPLIES</h5>
                    <h1>Popular accessories</h1>
                    <button>View all toys accesories</button>
                </div>
                <div class="overlay"></div>
            </div>

            <!-- Inserisco la seconda image -->
            <div class="second-image">
                <div class="images-text">
                    <h5>FIND THE BEST FOOD</h5>
                    <h1>New food arrival</h1>
                    <button>View all food products</button>
                </div>
                <div class="overlay"></div>
            </div>
        </div>


        <!-- Inserisco il container per la quarta sezione -->
        <div class="container text-center" id="fourth-container">
            <div class="emoji">
                <i class="fa-solid fa-truck"></i>
                <span class="light">Free worldwide deliveries</span>
            </div>
            <div class="emoji">
                <i class="fa-solid fa-window-restore"></i>
                <span class="light">Find stores near you</span>
            </div>
            <div class="emoji">
                <i class="fa-solid fa-dollar-sign"></i>
                <span class="light">Best prices guarranteed</span>
            </div>
            <div class="emoji">
                <i class="fa-regular fa-credit-card"></i>
                <span class="light">All credit card accepted</span>
            </div>
        </div>

    </div>
</template>



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

// Definisco il primo grande container con gli user
#first-container {
    height: auto;
    width: 100%;
    background-color: $bg-darkgreen;
    color: white;
    padding-top: 100px;
    padding-bottom: 250px;
    z-index: 1;

    .container {
        text-align: center;

        h2 {
            font-weight: 400;
            font-size: 50px;
            margin-bottom: 50px;
        }

        .user-testimonials {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
            gap: 20px;
        }

    }
}

// Definisco il secondo grande container
#second-container {
    height: auto;
    width: 100%;
    background-color: white;
    color: black;
    padding-bottom: 100px;
    position: relative;
    z-index: 2;

    // Definisco il container che si troverà in mezzo
    #middle-container {
        height: 450px;
        position: relative;
        top: -100px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-image: url(../../public/images/banner-7-2x-scaled.jpg);
        background-size: cover;
        padding-left: 50px;

        h2 {
            font-size: 60px;
            font-weight: 200;
            padding-bottom: 15px;
        }

        p {
            padding-bottom: 25px;
        }


        .text-letter {
            line-height: 1.8;
            width: 45%;
            height: auto;

            input {
                background-color: $bg-grey;
                border-radius: 50px;
                padding: 10px;
                padding-right: 40px;
                border: 0;
                width: 350px;

                &:hover {
                    border-color: #999;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                    transition: border-color 1s, box-shadow 1s;
                }
            }

            button {
                padding: 10px 20px;
                background-color: $bg-green;
                color: white;
                font-weight: 500;
                border: 0;
                border-radius: 50px;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background-color: darken($bg-green, 10%);
                    scale: (1.2);
                }
            }

        }

    }

    // Definisco il terzo container con le card per i besti tips
    #third-container {
        width: 100%;
        height: auto;

        h2 {
            font-size: 45px;
        }

        .light {
            font-weight: 500;
            opacity: 0.5;
            font-size: 20px;
        }

        .animals {
            margin: 40px 0;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
        }

        button {
            font-size: small;
            padding: 10px 20px;
            background-color: $bg-green;
            color: white;
            font-weight: 500;
            border: 0;
            border-radius: 50px;
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: darken($bg-green, 10%);
                scale: (1.2);
            }
        }
    }
}

// Definisco l'ultimo grande container
#double-image {
    width: 100%;
    height: auto;
    background-color: $bg-darkgreen;


    // Definisco il container per le doppie image
    .images-container {
        width: 100%;
        height: 450px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        .images-text {
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

        .first-image {
            width: 50%;
            height: 100%;

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                background-image: url(../../public/images/banner-8-2x.jpg);
                background-size: cover;
                background-position: center;
                filter: brightness(0.8);
            }
        }

        .second-image {
            width: 50%;
            height: 100%;

            .overlay {
                position: absolute;
                top: 0;
                right: 0;
                width: 50%;
                height: 100%;
                background-image: url(../../public/images/banner-9-2x.jpg);
                background-size: cover;
                background-position: center;
                filter: brightness(0.8);
            }
        }

    }

    #fourth-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 300px;
        color: white;

        i {
            font-size: 40px;
            display: block;
            padding-bottom: 25px;
        }

        .light {
            opacity: 0.6;
        }
    }
}
</style>
