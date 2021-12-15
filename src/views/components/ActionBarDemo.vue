<template>
  <div class="gls-container" style="margin-top: 2em;">
    <div class="gls-action-bar">
      
      <a class="gls-back-action" href="javascript:void(0)" aria-label="Go Back">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
        </svg>
      </a>
      <div>
        <div>
          <div class="gls-action-bar-title">
            Action Bar
            <div class="gls-action-bar-sub-title">
              Some Description
            </div>
          </div>
        </div>
        <div style="padding-left: 0.6em;">
          <select name="" id="dropdown" class="gls-dropdown">
            <option value="Recently Viewed">Recently Viewed</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>
      <div class="gls-action-bar-right-menu">
        <div>
          <div class="gls-action-bar-right-menu-item">
            <div class="gls-button-group">
              <button class="gls-button gls-basic gls-primary">Save</button>
              <button class="gls-button gls-basic gls-primary">Delete</button>
              <button class="gls-button gls-basic gls-primary">Cancel</button>
              <button class="gls-button gls-basic gls-primary gls-icon gls-compact">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="7 7 12 12 17 7"></polyline>
                  <polyline points="7 13 12 18 17 13"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="gls-action-bar-right-menu-item">
            <div class="gls-input gls-search">
              <input type="text">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h2>Action Bar 2</h2>
    <hr> -->
    <!-- <div class="gls-action-bar">
      <div class="gls-action-bar__header">
        <div class="gls-action-bar__back">
          <button aria-label="Go Back" class="gls-button fd-button--transparent gls-button--compact">
             <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
            <i role="presentation" class="fas fa-arrow-left"></i>
          </button>
        </div>
        <div class="fd-action-bar__title">
          <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
          <div class="gls-button-group">
            <button aria-label="button" class="gls-button gls-button--compact">Button</button>
            <button aria-label="button" class="gls-button gls-button--compact gls-button--emphasized">Button</button>
          </div>
        </div>
      </div>
      <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
    </div> -->
  </div>
</template>
<script>
export default {
  mounted () {
    // $("#dropdown").dropdown();
  }
}
</script>