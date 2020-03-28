<template>
  <div id="home">
    <calculation-history/>
    <key-board/>
  </div>
</template>

<script>
// @ is an alias to /src
import CalculationHistory from "../components/CalculationHistory";
import KeyBoard from "../components/KeyBoard";

export default {
  name: 'Home',
  components: {
    CalculationHistory,
    KeyBoard
  }
}
</script>

<style scoped>
  #home{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
