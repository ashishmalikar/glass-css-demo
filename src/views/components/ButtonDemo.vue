<template>
  <div class="gls-container" style="padding-top: 1em;">
    <gls-action-bar title="Buttons" sub-title="The button component is used to trigger an action.">
      <template #actions>
        <button class="gls-button gls-basic gls-primary">Open Playground</button>
      </template>
    </gls-action-bar>


    <h3 class="gls-header">
      Header 3 Demo
      <div class="gls-sub-header">
        Some Sub header Test
      </div>
    </h3>


    <header>Button Demo</header>
    
    <gls-card title="Variants" description="Standrd Variations of button">
      <gls-button label="Default"></gls-button>
      <gls-button label="Primary" scope="primary"></gls-button>
      <gls-button label="Secondary" scope="secondary"></gls-button>
      <gls-button label="Error" scope="error"></gls-button>
    </gls-card>

    <gls-card title="Base Variants" description="Base variants with transperent background">
      <gls-button basic="true" label="Default"></gls-button>
      <gls-button basic="true" label="Primary" scope="primary"></gls-button>
      <gls-button basic="true" label="Secondary" scope="secondary"></gls-button>
      <gls-button basic="true" label="Error" scope="error"></gls-button>
    </gls-card>

  </div>
</template>
<script>
import GlsButton from "@/components/glass-css/button/Button.vue";
export default {
  components: {
    'gls-button': GlsButton
  }
}
</script>