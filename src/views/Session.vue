<template>
  <div className="box">
    <div className="summary">
      <input placeholder="Name Purchase" />
      <a href="/">
        <button className="Finish" @click="clearTable">Finish</button>
      </a>
    </div>
    <a href="/CreateProd"> <button className="Add-Product">Add Product</button> </a>
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
import {clearTable } from "../api/api.js";
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
    clearTable(){
      clearTable()
    },
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
  background-color: rgb(248 113 113);
  margin:10px 0 10px 20px;
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
.summary{
  padding: 0 10px;
  align-items: center;
}
</style>