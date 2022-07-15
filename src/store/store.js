import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        products:[]
    },
    mutations:{
        addUser:(state,payload)=>{
            state.products.push(payload);
        },
        deleteUser:(state,payload)=>{

           state.products = state.products.filter(product => product.id !== payload);

        }
       

    },
    actions:{

      addUser:(context,payload)=>{
        context.commit('addUser',payload);
      },
      deleteUser:(context,payload)=>{
        context.commit('deleteUser',payload);
      }

    }
})