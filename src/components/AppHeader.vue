<script>
// Importo lo STORE
import { store } from '../store.js';

// Inserisco l'EXPORT
export default {
    name: 'AppHeader',

    data() {
        return {
            store,
            showGlass: true,
            placeholderText: "Search..."
        }
    },

    methods: {
        noGlass() {
            this.showGlass = false;
            this.placeholderText = ''
        }
    }

}
</script>

<!-- TEMPLATE -->
<template>
    <!-- Inserisco il container per centrare -->
    <div class="container">

        <!-- Inserisco la prima macro sezione -->
        <div class="firstrow">

            <!-- Logo -->
            <div class="image-container">
                <img src="../../public/images/dark-pet-logo.png" alt="logo">
            </div>

            <!-- Searchbar -->
            <div class="input-container" @click="noGlass">
                <input type="text" :placeholder="placeholderText" class="search-input">
                <i class="fas fa-magnifying-glass" v-show="showGlass"></i>
            </div>

            <!-- Questions -->
            <div class="text">
                <span class="bold">Questions?</span>
                <span class="light">Call us : 1,800.123.4567</span>
            </div>

            <!-- Loghi -->
            <div class="figure">
                <i class="fa-solid fa-bag-shopping"></i>
                <i class="fa-regular fa-user"></i>
            </div>
        </div>
    </div>

    <!-- Inserisco l'hr -->
    <hr>

    <!-- Apro un nuovo container -->
    <div class="container">

        <!-- Inserisco la seconda macro sezione -->
        <div class="secondrow">
            <ul class="menu">
                <li><a href="#">Home <i class="fa-solid fa-chevron-down"></i></a></li>
                <li><a href="#">Shop <i class="fa-solid fa-chevron-down"></i></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Shop by Brand <i class="fa-solid fa-chevron-down"></i></a></li>
            </ul>

        </div>

    </div>
</template>



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

* {
    background-color: $bg-white;
}

.firstrow {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .image-container {
        width: 300px;
        height: 45px;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .input-container {
        position: relative;

        input.search-input {
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

        input::placeholder {
            position: absolute;
            left: 75px;
            transform: translateX(-50%);
            white-space: nowrap;
        }

        i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #333;
        }
    }

    .text {
        span {
            margin-right: 10px;
        }

        .bold {
            color: #333;
            font-weight: 600;
        }

        .light {
            color: grey;
            transition: all 1s;

            &:hover {
                border-radius: 50px;
                color: white;
                padding: 5px;
                background-color: $bg-green;
            }
        }
    }

    .figure {

        i {
            font-size: 25px;
            margin-right: 10px;

            &:hover {
                color: $bg-green;
                transition: color 1s, transform 1s;
                transform: scale(1.2);
            }
        }
    }
}

hr {
    color: grey;
}

.secondrow {
    display: flex;
    justify-content: center;
    align-items: center;

    .menu {
        width: auto;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        gap: 40px;
        list-style-type: none;
        font-size: 18px;

        li a {
            text-decoration: none;
            color: grey;
            font-weight: 600;

            i {
                font-size: 15px;
                color: grey;

                &:hover {
                    color: #333;
                    transition: color 1s;
                }
            }

            &:hover {
                color: #333;
                text-decoration: underline;
                transition: color 1s;
            }
        }

    }
}
</style>
