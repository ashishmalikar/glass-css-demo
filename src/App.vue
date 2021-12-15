<template>
  <div>
    <nav class="gls-shellbar" style="">
      <a class="gls-item" href="javascript:void(0)" title="Home">
        <div class="gls-icon gls-home"></div>
      </a>
      <a href="javascript:void(0)" class="gls-item">
        <div class="gls-header">
          Glass css
        </div>
      </a>
      <div class="gls-right-menu">
        <a href="javascript:void(0)" class="gls-item">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          </svg>
        </a>
      </div>
    </nav>
    <div class="gls-grid" style="margin-top: 1rem;">
      <div class="gls-col gls-size__3-of-16">
        <div class="gls-menu gls-vertical" style="max-height: 97vh; overflow: auto;">
          <div class="gls-item">
            <h2>Glass CSS</h2>
          </div>
          <div class="gls-item">
            <div class="gls-search">
              <div class="gls-input gls-icon">
                <input type="text" placeholder="Search docs...">
                <i class="gls-icon gls-search-icon"></i>
              </div>
            </div>
          </div>
          <a class="gls-item" href="javascript:void(0)">
            Geting Started
          </a>
          <!-- <a class="gls-item" href="javascript:void(0)">
            Whats New
          </a> -->
          <a class="gls-item" href="javascript:void(0)">
            Introduction
          </a>
          <div class="gls-item">
            <h4 class="gls-header">Components</h4>
            <div class="gls-menu gls-vertical" style="margin-top: 15px;">
              <router-link v-for="cmp in components" :to="{ name: cmp.name }" class="gls-item" :key="cmp.name">
                {{cmp.label}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="gls-col gls-size__13-of-16">
        <router-view/>
      </div>
    </div>
    <div class="gls-segment" style="margin: 0px; background: none; backdrop-filter: blur(15px) saturate(0.5); margin-top: 2rem;">
      <div style="margin-top: 5rem;margin-bottom: 5rem;" class="gls-container">
        <div class="gls-grid">
          <div class="gls-col gls-size__2-of-4">
            <div style="margin: 1rem;">
              <h2 class="gls-header">Open Source</h2>
              Glass css is open-sourced on GitHub. Contributions and feedback are welcome!
              <div>
                <button class="gls-button gls-secondary">
                  <i class="gls-icon gls-brand-github"></i>
                  Contribute on Github
                </button>
              </div>
            </div>
          </div>
          <div class="gls-col gls-size__2-of-4">
            <h1>Keep in touch</h1>
            <p><i class="gls-icon gls-brand-twitter"></i> &nbsp; Follow on Twitter</p>
            <p>Follow on Linkedin</p>
            <p><i class="gls-icon gls-brand-github"></i>Share Feedback on Github</p>
          </div>
        </div>
        <hr>
        <div>
          <p>
            Created and maintained by Haasts UI Architecture design team.
          </p>
          <p>
            © Haasts 2021
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['theme'],
  data () {
    return {
      components: []
    }
  },
  created () {
    this.components = require("./components").default
  }
}
</script>
<style>
html, body {
  /* height: 100vh; */
  /* overflow: auto; */
  background: url(./assets/background1.jpg);
}
/* .gls-shellbar {
  background: transparent !important;
  color: white;
  backdrop-filter: blur(15px) saturate(0.5) !important;
}
.gls-shellbar::after {
  background: transparent !important;
  color: white !important;
  mix-blend-mode:difference;
  backdrop-filter: blur(15px) saturate(0.5) !important;
}
.gls-shellbar, 
.gls-shellbar > *,
.gls-shellbar * {
  color: white !important;
  /* mix-blend-mode:difference; */
/* } */
.gls-shellbar {
  /* color: white; */
  /* mix-blend-mode:difference; */
}
</style>
