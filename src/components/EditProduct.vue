<template>
    <div>
          <div class="row my-3 justify-content-center">
        <div class="col-md-5">
           <div class="card card-body">
             <form @submit.prevent="updateProduct">
                <div class="mb-3">
                    <label for="name" class="form-label">Product Name</label>
                <input type="text" name="name" class="form-control" v-model="product.name" required>
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Product Price</label>
                <input type="number" name="price" class="form-control" min="100" max="5000"  v-model="product.price" required>
                </div>
                <div>
                    <button type="submit" class="btn btn-warning">Submit</button>
                </div>
             </form>
           </div>
        </div>
    </div>

    </div>
</template>

<script>
import { onMounted } from 'vue';
import router from '../router';
    export default {
         data(){
            return{
                id:this.$route.params.id,
                product:{
                    name:"",
                    price:""
                }
                   
                    
                ,
            }
        },
         methods:{

            showProduct(e){
                const  {id,name,price} = this.$store.state.products.find(product => product.id === this.id);
                this.product.name=name;
                this.product.price=price;
            
            },
            updateProduct(){
                this.$store.dispatch('updateProduct',{id:this.id,name:this.product.name,price:this.product.price})
                router.push('/');
            }
         },
        mounted(){
            this.showProduct();
        }
            
        
        
    }
</script>

<style>

</style>