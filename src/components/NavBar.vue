<template>
 <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
  <div class="container">
    <router-link to="/" class="navbar-brand">DreamShop</router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span class="navbar-toggler-icon lead"></span></button>
    <div id="navmenu" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link to="/" class="nav-link text-warning">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link text-warning">Products</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link text-warning">About</router-link></li>
      </ul>
    </div>
  </div>
 </nav>
</template>


<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');

.navbar-brand, .nav-link {
    font-family: 'Lato', sans-serif;
}

.navbar-nav {
  margin-left: 30vw;
}
</style>