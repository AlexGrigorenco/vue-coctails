import { defineStore } from "pinia";
import axios from "axios";
import {INGREDIENTS_URL, COCTAILS_BY_INGREGIENT_URL, CATEGORIES_URL} from '@/constants'

export const useRootStore = defineStore('root', {
    state: () => ({
        ingredients: [],
        ingredient: null,
        coctails: [],
        categories: [],
    }),
    actions: {
        async getIngredients() {
            const data = await axios.get(INGREDIENTS_URL);
            this.ingredients = data?.data?.drinks
        },
        async getCoctails(ingredient) {
            const data = await axios.get(`${COCTAILS_BY_INGREGIENT_URL}${ingredient}`);
            this.coctails = data?.data?.drinks
        },
        setIngredient(val){
            this.ingredient = val
        },
        async getCategories() {
            const data = await axios.get(CATEGORIES_URL);
            this.categories = data?.data?.drinks
        },
        
    }
})