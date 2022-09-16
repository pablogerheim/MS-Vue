<template>
  <div class="Session">
    <a href="/c"><h1>Session</h1></a>

    <div>
      <input placeholder="Name Purchase" />
      <button className="Finish">Finish</button>
    </div>
    <button className="Add-Product">Add Product</button>
    <div>
      <button className="By-People">By People</button>
      <button className="By-Product">By Product</button>
    </div>
    <div>

    </div>
  </div>
</template>
<script >
export default {
  name: "Session",
  data() {
    return {
      // products,
      //  participants,
    };
  },
  methods: {},
};
</script>
<style scoped>
.Finish{
  background-color: rgb(248 113 113)
}
.Add-Product{
  background-color: rgb(125 211 252)
}
.By-People{
  background-color: rgb(110 231 183)
}
.By-Product{
  border:none;
  background-color: rgb(255, 255, 255)
}


</style>