<template>
    <div>

      <div class="row justify-content-center">
        <div class="col-md-4" v-for="product in products" :key="product.id">
            <div class="card card-body">
                <p class="lead">{{ product.name }} <strong>${{ product.price  }}</strong></p>
            </div>
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
        computed:{
         products(){
            return this.$store.state.products;
         }
        }
        
    }
</script>

<style>

</style>