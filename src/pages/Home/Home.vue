<template>
  <div>
    <div class="text">This is Home</div>
    <router-link to="/list">列表</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home'

}
</script>

<style scoped>
  .text {
    font-size: 20px;
  }
</style>
