<template>
  <div class="Home">
    <a href="/s"><h1>New Purchase</h1></a>
  </div>
</template>
<script >
export default {
  name: "Home",
};
</script>
  <style scoped>
div {
  display: flex;
  justify-content: center;
  background: rgb(255, 255, 255);
  margin: 0px 10px;
  border-radius: 2px;
}
a {
  margin:1rem 0;
  padding: 0rem 3.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgb(125 211 252);
  text-decoration: none
}
a:hover{
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.5);
}
h1 {
  color: black;
}
</style>
