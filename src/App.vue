
<template>
  <div className="mainDiv">
    <Toolbar/>
    <RouterView />
  </div>
</template>

  <script >
import Toolbar from './components/Toolbar.vue';

export default {
  name:'App',
  components: {
    Toolbar
  },
};
</script>

<style scoped>
.mainDiv {
  min-height: 700px;
  background: white;
  background-color: white;
}
</style>
