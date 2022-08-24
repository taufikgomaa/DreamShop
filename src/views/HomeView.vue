<template>
  <section class="bg-image text-white">
    <p class="h1 shop-header-text shadow-lg">
      Make Your <span class="text-danger">Dream</span> Come True With <span class="text-warning">Us</span>
    </p>
    <p class="h3 shop-header-text shadow-lg">All Your Needs Is Here</p>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.bg-image {
  background-image: url("https://i.gyazo.com/b29a2b85942a57d8f1da9e9b6b681bbc.jpg");
  background-position: center;
  background-size: cover;
  height: 400px;
  display: flex;
  gap:20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shop-header-text {
  font-family: 'Montserrat', sans-serif;
  background: rgba(0,0,0,.8);
}
</style>