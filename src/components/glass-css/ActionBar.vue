<template>
  <div class="gls-action-bar">
    <div class="gls-action-bar-title">
      {{title}}
      <div class="gls-action-bar-sub-title">
        {{subTitle}}
      </div>
    </div>
     <div class="gls-action-bar-right-menu">
       <slot name="actions"></slot>
        <!-- <div class="gls-action-bar-right-menu-item">
          <div class="gls-button-group">
            <button class="gls-button gls-basic gls-primary">Save</button>
            <button class="gls-button gls-basic gls-primary">Delete</button>
          </div>
        </div> -->
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
    title: String,
    subTitle: String
  }
}
</script>