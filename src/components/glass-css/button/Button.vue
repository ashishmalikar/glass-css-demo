<template>
  <button class="gls-button" :class="classList">{{label}}</button>
</template>
<script>
export default {
  props: {
    scope:{
      type: String
    },
    label: String,
    basic: {
      type: Boolean
    }
  },
  data () {
    return {
      classList: {
        'gls-primary': this.scope == 'primary',
        'gls-error': this.scope == 'error',
        'gls-secondary': this.scope == 'secondary',
        'gls-basic': this.basic
      }
    }
  }
}
</script>