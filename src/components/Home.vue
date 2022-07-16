<template>
    <div>

      <div class="row justify-content-center">
        <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
            <div class="card card-body">
                <p class="lead">{{ product.name }} <strong>${{ product.price  }}</strong></p>
                <p> <router-link :to=" '/edit-product/' + product.id "><span><button class="btn btn-info btn-sm">Edit</button></span></router-link> <span><button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Delete</button></span></p>
            </div>
        </div>
        <div v-if="products.length <=0" class="col-md-4 my-3">
            <p class="lead text-center fw-bold">No Products Available</p>
            <p> <router-link to="/add-product">Add Product</router-link></p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {

        data(){
            return{
                data:"welcome to the matrix",
            }
        },
        methods:{
        deleteProduct:function(id){
            this.$store.dispatch('deleteProduct',id);
        }

        },
        computed:{
         products(){
            return this.$store.state.products;
         }
        }
        
    }
</script>

<style>

</style>