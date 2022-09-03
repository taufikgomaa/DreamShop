<template>
  <header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container px-5">
        <h1 class="masthead-heading mb-0">We Sell Dreams</h1>
        <h2 class="masthead-subheading mb-0">Join Us</h2>
        <router-link to="/products" class="btn btn-primary btn-xl rounded-pill mt-5"
                >Products</router-link
              >
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
  </header>
  <!-- Content section 1-->
  <section id="scroll">
    <div class="container px-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img
              class="img-fluid rounded-circle"
              src="https://images.pexels.com/photos/11924729/pexels-photo-11924729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="..."
            />
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Been In Service For A Long Time</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
              exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
              molestiae adipisci, beatae obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Content section 2-->
  <section>
    <div class="container px-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6">
          <div class="p-5">
            <img
              class="img-fluid rounded-circle"
              src="https://images.pexels.com/photos/8356962/pexels-photo-8356962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="..."
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-5">
            <h2 class="display-4">We Have A Great Work Culture</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
              exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
              molestiae adipisci, beatae obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Content section 3-->
  <section>
    <div class="container px-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img
              class="img-fluid rounded-circle"
              src="https://images.pexels.com/photos/13070737/pexels-photo-13070737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="..."
            />
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Our Family Welcomes You</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
              exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
              molestiae adipisci, beatae obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
header.masthead {
  position: relative;
  overflow: hidden;
  padding-top: calc(7rem + 72px);
  padding-bottom: 7rem;
  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
}
header.masthead .masthead-content {
  z-index: 1;
  position: relative;
}
header.masthead .masthead-content .masthead-heading {
  font-size: 4rem;
}
header.masthead .masthead-content .masthead-subheading {
  font-size: 2rem;
}
header.masthead .bg-circle {
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%);
}
header.masthead .bg-circle-1 {
  height: 90rem;
  width: 90rem;
  bottom: -55rem;
  left: -55rem;
}
header.masthead .bg-circle-2 {
  height: 50rem;
  width: 50rem;
  top: -25rem;
  right: -25rem;
}
header.masthead .bg-circle-3 {
  height: 20rem;
  width: 20rem;
  bottom: -10rem;
  right: 5%;
}
header.masthead .bg-circle-4 {
  height: 30rem;
  width: 30rem;
  top: -5rem;
  right: 35%;
}

@media (min-width: 992px) {
  header.masthead {
    padding-top: calc(10rem + 55px);
    padding-bottom: 10rem;
  }
  header.masthead .masthead-content .masthead-heading {
    font-size: 6rem;
  }
  header.masthead .masthead-content .masthead-subheading {
    font-size: 4rem;
  }
}
</style>