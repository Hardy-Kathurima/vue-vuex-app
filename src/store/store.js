import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        products:[
            {id:1,name:"Toughee",price:300},
            {id:2,name:"Niky Sports",price:700}
        ]
    }
})