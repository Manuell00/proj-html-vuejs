<script>
// Importo lo STORE
import { store } from '../store.js';


// Inserisco l'EXPORT
export default {
    name: 'SingleCardUser',
    props: {
        detailsUser: Object
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
        <div class="img-container">
            <img :src="detailsUser.src" alt="" class="img">
        </div>
        <span class="descriptions">{{ detailsUser.description }}</span>
        <span class="light">{{ detailsUser.name }}, ThemeFusion</span>
    </div>
</template>
  
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;

.prod-card {
    width: calc((100% / 3));
    height: 250px;
    background-color: transparent;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s, box-shadow 0.3s;

    .descriptions {
        line-height: 1.8;
        font-weight: 700;
        width: 350px;
        padding: 20px 0;
        font-weight: 300;
        color: white;
    }

    span {
        width: 300px;
        text-align: center;
    }

    .light {
        opacity: 0.5;
    }

    .img-container {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }


    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
}
</style>
  