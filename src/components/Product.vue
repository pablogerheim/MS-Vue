<template>
  <div className="box">
    <div className="summary">
      <p className="summary-p">Products: {{product.length}}</p>
      <p className="summary-p">Total: R$ {{total}}</p>
    </div>
    <div v-for="p in participant" :key="p.id">
      <p className="productName">{{p.name}}</p>
      <div className="tableFor">
        <p>By 7</p>
        <p className="productTotal">R$ {{this.findHowMuchEachToPay(p.name)}}</p>
       <a href="/u">
         <button>U</button>
       </a>
        <button>D</button>
      </div>
    </div>
  </div>
</template>
<script >
import { participants, products } from "../assets/mock.js";
export default {
  name: "Product",
  components: {
    participants,
    products,
  },
  data() {
    return {
      product: products,
      participant: participants,
      total: 0,
      membars: null
    };
  },
  methods: {
    findHowMuchEachToPay(name) {
      return this.product.map(p => p.participants.includes(name)
        ? (parseInt(p.price) * parseInt(p.quantity)) / p.participants.length : 0,
      ).reduce((pv, cv) => pv + cv, 0).toFixed(2).replace('.', ',')
    },
    findTotal() {
      this.total = this.product.reduce((pv, cv) => pv + parseInt(cv.price) * parseInt(cv.quantity), 0).toFixed(2).replace('.', ',')
    },
    findMabers() {
      let arrMembers = []
      this.product.forEach(prod => prod.participants.forEach(name => {
        if (!arrMembers.includes(name)) {
          arrMembers.push(name)
        }
      }))
      this.membars = arrMembers.length
    }
  },
  mounted() {
    this.findTotal(),
      this.findMabers()
  }

};
</script>
<style scoped>
.summary-p {
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 8px;
  padding: 8px;
}

.productName {
  margin: 12px;
}
.tableFor {
  justify-content: space-around;
}

button{ padding: 2px;}
</style>
