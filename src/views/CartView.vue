<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-lg-9">
        <div class="card">
          <div class="table-responsive">
            <table class="table table-borderless table-shopping-cart">
              <thead class="text-muted">
                <tr class="small text-uppercase">
                  <th scope="col">Product</th>
                  <th scope="col" width="120">Quantity</th>
                  <th scope="col" width="120">Price</th>
                  <th
                    scope="col"
                    class="text-right d-none d-md-block"
                    width="200"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cartItem in $store.state.cart" :key="cartItem.id">
                  <td>
                    <figure class="itemside align-items-center">
                      <div class="aside">
                        <img :src="cartItem.product.image" class="img-sm" />
                      </div>
                      <figcaption class="info">
                        <a href="#" class="title text-dark">{{
                          cartItem.product.title
                        }}</a>
                      </figcaption>
                    </figure>
                  </td>
                  <td class="text-right d-none d-md-block">
                    <span class="btn btn-success" @click="$store.commit('increaseQuantity', cartItem)" :disabled="cartItem.quantity == 4">+</span> {{cartItem.quantity}} <span
                            class="btn btn-danger" @click="$store.commit('decreaseQuantity', cartItem)">-</span>
                  </td>
                  <td>
                    <div class="price-wrap">
                      <var class="price">${{ cartItem.product.price }}</var>
                    </div>
                  </td>
                  <td class="text-right d-none d-md-block">
                    <a href="" class="btn btn-light" @click.prevent="$store.commit('removeItem', cartItem.product)"> Remove</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </aside>
      <aside class="col-lg-3">
        <div class="card">
          <div class="card-body">
            <dl class="dlist-align">
              <dt>Total price:</dt>
              <dd class="text-right ml-3">${{ getPrice() }}</dd>
            </dl>
            <dl class="dlist-align">
              <dt>Discount:</dt>
              <dd class="text-right text-danger ml-3">- ${{(getPrice() * .1).toFixed(2)}}</dd>
            </dl>
            <dl class="dlist-align">
              <dt>Total:</dt>
              <dd class="text-right text-dark b ml-3">
                <strong>${{(getPrice() - (getPrice() * .1))}}</strong>
              </dd>
            </dl>
            <hr />
            <a
              href="#"
              class="btn btn-out btn-primary btn-square btn-main"
            >
              Make Purchase
            </a>
            <router-link to="/products" class="btn btn-out btn-success btn-square btn-main mt-2">Continue Shopping</router-link>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    getPrice() {
      let price = 0;
      for (let cartItem of this.$store.state.cart) {
        price += cartItem.product.price * cartItem.quantity;
      }
      return price.toFixed(2);  
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
body {
  background-color: #eeeeee;
  font-family: "Open Sans", serif;
  font-size: 14px;
}
.container-fluid {
  margin-top: 70px;
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.4rem;
}
.img-sm {
  width: 80px;
  height: 80px;
}
.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}
.table-shopping-cart .price-wrap {
  line-height: 1.2;
}
.table-shopping-cart .price {
  font-weight: bold;
  margin-right: 5px;
  display: block;
}
.text-muted {
  color: #969696 !important;
}
a {
  text-decoration: none !important;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0px;
}
.itemside {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.dlist-align {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
[class*="dlist-"] {
  margin-bottom: 5px;
}
.coupon {
  border-radius: 1px;
}
.price {
  font-weight: 600;
  color: #212529;
}
.btn.btn-out {
  outline: 1px solid #fff;
  outline-offset: -5px;
}
.btn-main {
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer;
  color: #fff;
  width: 100%;
}
.btn-light {
  color: #ffffff;
  background-color: #f44336;
  border-color: #f8f9fa;
  font-size: 12px;
}
.btn-light:hover {
  color: #ffffff;
  background-color: #f44336;
  border-color: #f44336;
}
.btn-apply {
  font-size: 11px;
}
</style>