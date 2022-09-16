<template>
  <div>
    <h1>People</h1>
  </div>
</template>
<script >
import { participants, products } from "../assets/mock.js";
export default {
  name: "People",
components:{
  participants,
  products
},
  data() {
    return {
      product: products,
      participant: participants,
    };
  },
  methods: {},
};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
