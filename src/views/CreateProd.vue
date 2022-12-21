<template>
  <div className="box">
    <div className="control">
      <a href="/Session">
        <button className="control-back"> icon</button>
      </a>
      <button className="control-add" @click="fcreateProduct()">Add Product</button>
    </div>
    <div>
      <div className="flex">
        <label>
          Product Name
          <input v-model="name" />
        </label>
        <button className="select-all" @click="togleAllPart()">Select All</button>
      </div>
      <div className="flex">
        <label>
          Product Price
          <input type="number" v-model="price" />
        </label>
        <label>
          Number Prod
          <input type="number" v-model="quantity" />
        </label>
      </div>
    </div>
    <div v-for="p in participant" className="tableFor " :key="p.id">
      <p>{{p.name}}</p>
      <label>
        <input className="inputFor" type="checkbox" :checked="togleChecked(p.name)" @click="controlPart(p.name)" />
        Will Partcipate
      </label>
    </div>
  </div>
</template>
<script >
// import { getUser, createProduct } from "../api/api.js";
import { participants } from "../assets/mock.js";
export default {
  name: 'CreateProd',

  data() {
    return {
      participant: [],
      name: null,
      price: null,
      quantity: null,
      part: []
    }
  },
  methods: {
    controlPart(name) {
      if (!this.part.includes(name)) {
        this.part.push(name)
      } else this.part = this.part.filter((n) => n !== name)
    },
    togleChecked(name){
     return this.part.includes(name)
    },
    togleAllPart() {
      if (this.part.length < this.participant.length) {
        this.part = this.participant.map(p=>p.name)
      } else this.part = []
    },
    async fgetUser() {
      this.participant = participants
      // await getUser()
    },
    async fcreateProduct() {
      await createProduct({
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        participants: [...this.part]
      })
    }

  },
  mounted() {
    this.fgetUser()
  }
}
</script>
<style scoped>
.tableFor {
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}

.flex {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 0 8px;
}

.control {
  display: flex;
  justify-content: space-around;
  padding: 10px 8px;
}

.control-back {
  padding: 10px;
  background-color: rgb(253 186 116);
}

.control-add {
  padding: 10px;
  background-color: rgb(74 222 128);
}

.select-all {
  background-color: rgb(96 165 250);
  min-width: 130px;
}

.inputFor {
  width: 30px;
}
</style>
