<template>
  <div class="container px-4 px-lg-5 mt-5">
    <div
      class="
        row
        gx-4 gx-lg-5
        row-cols-2 row-cols-md-3 row-cols-xl-4
        justify-content-center
      "
    >
      <ProductCard
        v-for="product in $store.state.products"
        :product="product"
        :key="product.id"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductsView",
  components: {
    ProductCard,
  },
  async created() {
    const res = await fetch("http://localhost:3000/products");
    this.$store.state.products = await res.json();
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>