<template>
  <div class="Session">
    <a href="/c">
      <h1>Session</h1>
    </a>

    <div>
      <input placeholder="Name Purchase" />
      <button className="Finish">Finish</button>
    </div>
    <a href="/c"> <button className="Add-Product">Add Product</button> </a>
    <div>
      <button @click="selecPage(true)" className="By-People">By People</button>
      <button @click="selecPage(false)" className="By-Product">By Product</button>
    </div>
    <div>
      <People v-show="page" />
      <Product v-show="!page" />
    </div>
  </div>
</template>
<script >
import People from "../components/People.vue";
import Product from "../components/Product.vue";
export default {
  name: "Session",
  components: {
    People,
    Product
  },
  data() {
    return {
      page: true,
    };
  },
  methods: {
    selecPage(bolean) {
      this.page = bolean
    },
    mounted() {

    }
  },
};
</script>
<style scoped>
.Finish {
  background-color: rgb(248 113 113)
}

.Add-Product {
  background-color: rgb(125 211 252)
}

.By-People {
  background-color: rgb(110 231 183)
}

.By-Product {
  border: none;
  background-color: rgb(255, 255, 255)
}
</style>