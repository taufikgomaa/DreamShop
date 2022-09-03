<template>
  <section class="bg-image text-white">
    <p class="h1 shop-header-text shadow-lg">
      Make Your <span class="text-danger">Dream</span> Come True With
      <span class="text-warning">Us</span>
    </p>
    <p class="h3 shop-header-text shadow-lg">All Your Needs Is Here</p>
  </section>
  <p class="h1 text-center my-5">What We Have</p>
  <section class="container my-5">
    <div class="row">
      <div class="col">
        <div class="card shadow-lg" style="width: 18rem">
          <img
            src="https://i.gyazo.com/2abee4c1e5e17f88eed75a3c848f9111.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">Get the latest tech.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-lg" style="width: 18rem">
          <img
            src="https://i.gyazo.com/005cc5899fbf0e6f1a922aa3ea2758d6.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              Get well crafted jewels.<br />From all over the globe.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-lg" style="width: 18rem">
          <img
            src="https://i.gyazo.com/506255f2a442f8de02f4042b3e782b0d.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              Get the most stylish designer clothes out there.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <p class="h1 text-center my-5">Great Service</p>
  <section class="container my-5">
    <div class="row text-center">
      <div class="col">
        <p class="h3"><i class="fa-solid fa-truck"></i> Fast Delivery</p>
        <p>Guaranteed wherever you live</p>
      </div>

      <div class="col">
        <p class="h3">
          <i class="fa-sharp fa-solid fa-thumbs-up"></i> High Quality
        </p>
        <p>We believe you deserve better</p>
      </div>

      <div class="col">
        <p class="h3">
          <i class="fa-solid fa-phone-volume"></i> Customer Support
        </p>
        <p>We have a lot of people willing to help you</p>
      </div>
    </div>
  </section>

  <div class="bg-danger d-flex justify-content-around my-5">
    <p class="text-white h4 my-5">Start you Journey With Us</p>
    <router-link to="/products" class="btn bg-light h4 my-5"
      >Get Started</router-link
    >
  </div>
  <p class="h1 text-center my-5">Contact Us</p>
  <section class="row my-5 container">
    <div class="col">
      <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=".." class="img-fluid">
    </div>
    <div class="col">
      <form>
        <div class="form-group">
          <label for="user-name">User Name</label>
          <input
            type="text"
            class="form-control"
            id="user-name"
            placeholder="User Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");

.bg-image {
  background-image: url("https://i.gyazo.com/b29a2b85942a57d8f1da9e9b6b681bbc.jpg");
  background-position: center;
  background-size: cover;
  height: 400px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shop-header-text {
  font-family: "Montserrat", sans-serif;
  background: rgba(0, 0, 0, 0.8);
}
</style>