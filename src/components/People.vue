<template>
  <div className="box">
    <div className="summary">
      <p className="summary-p">Participants:{{membars}}</p>
      <p className="summary-p">Total: R$ {{total}}</p>
    </div>
    <div v-for="p in participant" className="tableFor" :key="p.id">
      <p className="peopleName">{{p.name}}</p>
      <p className="peopleTotal">R$ {{this.findHowMuchEachToPay(p.name)}}</p>
    </div>
  </div>
</template>
<script >
import { getUser, getProduct } from "../api/api.js";
export default {
  name: "People",
  components: {
  },
  data() {
    return {
      product: [],
      participant: [],
      total: 0,
      membars: null
    };
  },
  methods: {
    async fgetUser() {
      this.participant = await getUser()
    },
    async fgetProduct() {
      this.product = await getProduct()
      this.findMabers()
      this.findTotal()
    },
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
    this.fgetUser(),
      this.fgetProduct()
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

.peopleName {
  margin: 12px;
}

.peopleTotal {

  margin: 12px;
  border-left-width: 2px;
  border-style: solid;
  border-color: rgb(156 163 175);
  padding-left: 8px;
  border-bottom: none;
  border-top: none;
  border-right: none;
}
</style>
