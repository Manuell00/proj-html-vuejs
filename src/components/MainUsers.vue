<script>
// Importo lo STORE
import { store } from '../store.js';

// Importo i COMPONENTI
import SingleCardUser from './SingleCardUser.vue'

// Inserisco l'EXPORT
export default {
    name: 'MainUsers',

    components: {
        SingleCardUser,
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

            ]
        }
    },

}
</script>

<!-- TEMPLATE -->
<template>
    <div class="container-fluid">
        <div class="container">
            <h2>Users testimonials</h2>

            <!-- Inserisco le card degli users -->
            <div class="user-testimonials">
                <SingleCardUser v-for="character in charactersListUsers" :key="character.id" :detailsUser="character" />
            </div>

        </div>
    </div>
</template>



<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.container-fluid {
    height: auto;
    width: 100%;
    background-color: $bg-darkgreen;
    color: white;
    padding-top: 100px;
    padding-bottom: 250px;

    .container {
        text-align: center;

        h2 {
            font-weight: 400;
            font-size: 50px;
            font-family: 'Times New Roman', Times, serif;
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
</style>
