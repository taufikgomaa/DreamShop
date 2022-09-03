<template>
  <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
    <div class="container d-flex justify-content-between">
      <div>
        <router-link to="/" class="navbar-brand">DreamShop</router-link>
      </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon lead"></span>
        </button>
        <div id="navmenu" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-warning"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link text-warning"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-warning"
                >About</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/login" class="nav-link text-warning"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link text-warning"
                >SignUp</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link text-warning"
                ><i class="fa-solid fa-cart-shopping"></i> Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">{{
                  $store.state.cart.length
                }}</span></router-link
              >
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>


<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap");

.navbar-brand,
.nav-link {
  font-family: "Lato", sans-serif;
}
</style>