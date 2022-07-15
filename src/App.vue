<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add-product">Add Product</router-link>
    </nav>
    <div class="container"><router-view/></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.card{
  background-color: #cb285c;
  color: #fff;
  box-shadow: 2px 3px 0 #83072e;
}
.card:hover{
  box-shadow: 3px 4px 2px #83072e;
}
</style>
