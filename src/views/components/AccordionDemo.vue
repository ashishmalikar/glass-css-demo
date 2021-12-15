<template>
  <div class="gls-container" style="margin-top: 2em;">
    <div class="demo-page-header"></div>
    
    <div class="gls-accordion gls-raised gls-inverted" id="accordion">
      <div class="gls-accordion-item">
        <div class="gls-accordion-item-title" style="display: flex;">  
          <div style="margin-right: 1em;">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)"></path>
            </svg>
          </div>
          <span style="padding-top: 0.1em;">
            Accordion Title
          </span>
        </div>
        <div class="gls-accordion-item-content">
          Do eiusmod esse sit fugiat labore est officia eiusmod reprehenderit sint culpa. Est do laborum esse sunt dolor in amet tempor proident ad. Labore consectetur et enim in non ut deserunt reprehenderit aliquip labore consectetur minim sunt cupidatat. Ea ullamco exercitation quis consectetur veniam. Fugiat voluptate enim irure sit enim dolore esse proident ex officia excepteur veniam. Ea aliquip voluptate enim ex fugiat elit laborum laboris cillum. Elit minim minim voluptate non ut officia.

          Excepteur tempor occaecat in duis incididunt dolore aliqua consectetur consectetur sint sunt id veniam ad. Ullamco sint laboris magna nostrud in. Magna mollit proident esse amet elit ad dolore laboris irure magna cillum velit eu eu. Incididunt eu culpa non nostrud ullamco cillum aute aliquip voluptate id. Est cupidatat veniam non esse aliquip non. Officia cupidatat incididunt nulla quis voluptate qui.

          Pariatur tempor amet officia aute dolor dolore ipsum est esse. Exercitation esse adipisicing nisi commodo ipsum labore commodo nisi eiusmod pariatur consectetur irure. In officia consectetur irure tempor aliquip ad mollit aliqua adipisicing mollit irure fugiat. Anim officia incididunt velit ea in occaecat dolor consectetur qui eiusmod deserunt. Laborum sint consequat tempor eu do adipisicing laboris ex aliquip sint ut minim. Consectetur eiusmod exercitation magna cupidatat nulla sint culpa. Magna ullamco fugiat voluptate sit.

          Ut pariatur proident officia aute ea nisi. Labore eu ipsum reprehenderit deserunt sunt. Excepteur commodo cupidatat commodo deserunt. Sint dolor irure aute minim cillum qui ex est nostrud officia voluptate consectetur. Ea eiusmod laboris aliquip nulla ex fugiat quis. Adipisicing amet culpa Lorem ea proident est incididunt sint deserunt id deserunt fugiat reprehenderit excepteur. Aliqua eiusmod mollit nulla eiusmod.

          Duis commodo laborum magna dolor anim ut officia velit. Aliquip labore ad irure exercitation qui esse. Ex deserunt do quis consequat laborum minim in tempor cupidatat ea occaecat ad ex Lorem. Do fugiat incididunt ea amet velit adipisicing tempor magna. Esse consequat nulla nisi dolore eiusmod labore laboris cupidatat nostrud Lorem cupidatat nisi qui.
        </div>
      </div>
      <div class="gls-accordion-item gls-active">
        <div class="gls-accordion-item-title"> 
          Accordion Title 
          <i class="fas fa-caret-down"></i>
        </div>
        <div class="gls-accordion-item-content">
          Accordion Content
        </div>
      </div>
      <div class="gls-accordion-item">
        <div class="gls-accordion-item-title"> 
          Accordion Title 
          <i class="fas fa-caret-down"></i>
        </div>
        <div class="gls-accordion-item-content">
          Accordion Content
        </div>
      </div>
      <div class="gls-accordion-item">
        <div class="gls-accordion-item-title"> 
          Accordion Title 
          <i class="fas fa-caret-down"></i>
        </div>
        <div class="gls-accordion-item-content">
          Accordion Content
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  mounted () {
    this.initAccordion();
  },
  methods: {
    initAccordion () {
      this.accordion(this.$el.querySelector("#accordion"), {
        exclusive: false
      })
    },
    accordion (sel, options) {
      let items = sel.querySelectorAll(".gls-accordion-item")

      // console.log("Items: ", items)

      items.forEach(item => {
        
        let title = item.querySelector(".gls-accordion-item-title");

        title.addEventListener('click', event => {
          
          item.classList.toggle('gls-active')

        })

      });

    }
  }
}
</script>











