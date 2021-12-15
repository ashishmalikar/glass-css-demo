<template>
  <div class="gls-card">
    <div class="gls-content">
      <div class="gls-header" style="display: flex;">
        <div class="gls-content">
          Introduction
          <div class="gls-sub-header">
            Glass css is next generation CSS framework, created for glass like UI components texture.
          </div>
        </div>
        <div class="gls-header-right-menu" style="display: block; margin-left: auto;">
          <button class="gls-button gls-basic gls-primary">View on Github</button>
        </div>
      </div>
    </div>
    <div class="gls-content">
      <div class="gls-header">
        Quick Start
      </div>
      <p>
        Looking to quickly add Glass css to your project? Use jsDelivr, a free open source CDN. Using package manager ir need to download the source files.
      </p>
      <div class="gls-header">CSS</div>
      <div class="gls-header">JS</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
