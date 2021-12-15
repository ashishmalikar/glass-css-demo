<template>
  <article class="gls-card gls-raised" :class="classList">
    <div class="gls-content">
      <div class="gls-header">
        <div class="gls-content">
          {{title}}
          <div class="gls-sub-header">
            {{description}}
          </div>
        </div>
      </div>
    </div>
    <div class="gls-content">
      <slot></slot>
    </div>
    <div class="gls-extra gls-content">
      <slot name="extra"></slot>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    description: String,
    compact: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      classList: {
        'gls-fluid': !this.compact
      }
    }
  }
}
</script>