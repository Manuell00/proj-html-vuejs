import { reactive } from 'vue'

export const store = reactive({

    // Variabile per loader
    loading: true,

    // Devo crearmi i data per le mie card
    charactersListPet: [
        {
            id: "1",
            src: "../../public/images/product-8.jpg",
            title: "Bed",
            quantities: "1",
        },
        {
            id: "2",
            src: "../../public/images/product-3.jpg",
            title: "Food",
            quantities: "6",
        },
        {
            id: "3",
            src: "../../public/images/product-2.jpg",
            title: "Toys",
            quantities: "6",
        },
        {
            id: "4",
            src: "../../public/images/product-4.jpg",
            title: "Transport",
            quantities: "6",
        },



    ]
});