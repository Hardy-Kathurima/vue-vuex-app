import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        products:[
          {id:"1",name:"TimberLand",price:5000},
          {id:"2",name:"Gucci",price:3000},
        ]
    },
    mutations:{
        addProduct:(state,payload)=>{
            state.products.push(payload);
        },
        deleteProduct:(state,payload)=>{

           state.products = state.products.filter(product => product.id !== payload);

        },
        updateProduct:(state,payload)=>{
  
       const updatedProduct = payload;

       state.products.filter(product => product.id === payload.id).map(product => {
        product.name=payload.name;
        product.price=payload.price;
       })
        

        }
       


    },
    actions:{

      addProduct:(context,payload)=>{
        context.commit('addProduct',payload);
      },
      updateProduct:(context,payload)=>{

        context.commit('updateProduct',payload);

      },
      deleteProduct:(context,payload)=>{
        context.commit('deleteProduct',payload);
      }

    }
})