<template>
    <div>

    <div class="row my-3 justify-content-center">
        <div class="col-md-5">
           <div class="card card-body">
             <form @submit="addUser">
                <div class="mb-3">
                    <label for="name" class="form-label">Product Name</label>
                <input type="text" name="name" class="form-control" v-model="product.name" required>
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Product Price</label>
                <input type="number" name="price" class="form-control" min="100" max="5000" step="50" v-model="product.price" required>
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
import { v4 as uuidv4} from 'uuid';
import router from '../router';
    export default {

        data(){
            return{
                userId:uuidv4(),
                product:[],
            }
        },
        methods:{

            addUser(e){
                e.preventDefault();
                this.$store.dispatch('addUser',{id:this.userId,name:this.product.name,price:this.product.price})
                router.push('/');
            }

        }
        
    }
</script>

<style>

</style>