<script>
// Importo lo STORE
import { store } from '../store.js';


// Inserisco l'EXPORT
export default {
    name: 'SingleCardFood',
    props: {
        detailsPet: Object
    },

    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div class="prod-card">
        <h2>{{ detailsPet.title }}</h2>
        <h5>{{ detailsPet.description }}</h5>
        <div class="img-container">
            <img :src="detailsPet.src" :alt="detailsPet.title" class="img">
        </div>

        <button class="shop-btn">Shop {{ detailsPet.type }} food</button>
    </div>
</template>
  
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.prod-card {
    width: calc((100% / 3) - 20px);
    height: 600px;
    padding-bottom: 50px;
    background-color: $bg-darkgreen;
    border: 2px solid lighten(grey, 70%);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        font-family: 'Times New Roman', Times, serif;
        padding-top: 50px;
        font-weight: 400;
        color: white;
    }

    h5 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: $bg-green;
    }

    .img-container {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }

    .shop-btn {
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
</style>
  