<template>
  <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" :src="product.image" alt="..." />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">{{product.title}}</h5>
                                    ${{product.price}}
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add To Cart</a></div>
                                <div class="text-center"><router-link :to="`/item/${product.id}`" class="btn btn-outline-dark mt-auto" @click="loadPreview(product)">Info</router-link></div>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["product"],
    methods: {
        loadPreview(_product) {
            this.$store.state.itemPreview.id = _product.id;
            this.$store.state.itemPreview.title = _product.title;
            this.$store.state.itemPreview.description = _product.description;
            this.$store.state.itemPreview.price = _product.price;
            this.$store.state.itemPreview.image = _product.image;
        }
    }
}
</script>

<style scoped>
.card-img-top {
     width: 200px;
    height: 200px;
}
</style>