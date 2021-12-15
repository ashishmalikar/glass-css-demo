<template>
  <div class="gls-container gls-is-fluid">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.gls-container.gls-is-fluid {
  width: 100%;
}
</style>