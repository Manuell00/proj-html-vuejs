<script>
// Importo lo STORE
import { store } from '../store.js';

// Inserisco l'EXPORT
export default {
    name: 'AppFooter',

    data() {
        return {
            store
        }
    },

}
</script>

<!-- TEMPLATE -->
<template>
    <div class="container-fluid" id="first-container">
        <!-- Centro il contenuto -->
        <div class="container">
            <div class="information">
                <div class="logo">
                    <img src="../../public/images/dark-pet-logo.png" alt="">
                    <p>1234 Avda Avenue Avadaville info@your-company.com</p>
                    <p>Call us:(1) 234 5678</p>
                </div>

                <ol class="shop">
                    <li class="title">Shop by brand</li>
                    <li class="small">bed</li>
                    <li class="small">food</li>
                    <li class="small">toys</li>
                    <li class="small">transport</li>
                </ol>

                <ol class="shop">
                    <li class="title">Useful links</li>
                    <li class="small">my account</li>
                    <li class="small">orders</li>
                    <li class="small">checkout</li>
                    <li class="small">cart</li>
                </ol>

                <div class="subscribe">
                    <span>Subscribe to our newsletter</span>
                    <input type="email" placeholder="Insert your email ...*">
                    <button>Subscribe</button>
                </div>
            </div>

            <hr>
            <ol class="menu">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Shop</li>
            </ol>

            <ol class="menu">
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
            </ol>
        </div>
    </div>

    <div id="second-container">
        <!-- Centro il contenuto -->
        <div class="container text-center">
            <small>©Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</small>
        </div>

    </div>
</template>

<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

#first-container {
    height: auto;
    background-color: $bg-darkgreen;
    color: white;
    margin-bottom: -20px;

    ol {
        list-style-type: none;

        li {
            transition: all 0.5s ease-in-out;
        }

        li:hover {
            color: $bg-green;
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .information {
        padding: 150px 0;
        gap: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-size: 22px;
            padding-bottom: 25px;
        }

        .logo {
            width: calc(100 / 4);
            height: 220px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

            // Grande giocata per cambiare colore immagine
            img {
                filter: invert(100%);
                margin-bottom: 30px;
            }

            p {
                margin: 0;
                padding: 0;
            }
        }

        .shop {
            width: calc(100 / 4);
            height: 220px;

            .small {
                font-size: 15px;
                text-transform: capitalize;
                padding-bottom: 20px;

            }
        }

        .subscribe {
            padding: 15px;
            width: calc(100 / 4);
            height: 270px;
            background-color: rgb(2, 58, 2);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;

            transform: rotate(-20deg) span {
                width: calc(100% - 40px);
                font-size: 22px;
                padding-bottom: 15px;
            }

            input {
                background-color: $bg-grey;
                border-radius: 50px;
                padding: 12px;
                border: 0;
                width: calc(100% - 40px);
                max-width: 350px;

                &:hover {
                    border-color: #999;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                    transition: border-color 1s, box-shadow 1s;
                }
            }

            button {
                padding: 12px 20px;
                background-color: $bg-green;
                color: white;
                font-weight: 500;
                border: 0;
                border-radius: 50px;
                transition: all 0.3s ease-in-out;
                width: calc(100% - 40px);
                /* Larghezza leggermente più larga del pulsante */

                &:hover {
                    background-color: darken($bg-green, 10%);
                    scale: (1.2);
                }
            }
        }
    }

    .menu {
        padding: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-direction: row;
    }
}

#second-container {
    display: flex;
    align-items: center;
    margin-top: 0;
    height: 60px;
    background-color: black;
    color: white;
}
</style>
