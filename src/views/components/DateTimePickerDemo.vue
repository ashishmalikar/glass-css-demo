<template>
  <div class="gls-container" style="margin-top: 1em;">
    <gls-card title="Time Picker">
      <div id="timepicker-selectbox"></div>
    </gls-card>

    <gls-card title="Date Time Picker">
      <div style="height: 50vh;">
        <div class="gls-grid">
          <div class="gls-col gls-size__5-of-12">
            <div class="gls-dropdown-2" style="display: none;">
              <div class="gls-text">India</div>
              <input type="hidden" name="">
              <div class="menu">
                <div class="item">India</div>
                <div class="item">USA</div>
                <div class="item selected">Russia</div>
                <div class="item">France</div>
                <div class="item">Germany</div>
                <div class="item">Canada</div>
                <div class="item">France</div>
                <div class="item">Germany</div>
                <div class="item">Canada</div>
                <div class="item">France</div>
                <div class="item">Germany</div>
                <div class="item">Canada</div>
              </div>
            </div>
          </div>
          <div class="gls-col gls-size__5-of-12">
            <div class="gls-input gls-icon">
              <label for="Pick a date" style="display: block;">Pick a Date</label> <br>
              <input type="text" id="tui-date-picker-target" aria-label="Date-Time" style="display: block; font-size: 1rem; border-radius: 0.5em;" v-model="defaultDate"/>
            </div>
            <div id="tui-date-picker-container" style="z-index: 199 !important;margin-top: -1px; border-radius: 0.5em;"></div>
          </div>
          <div>
            <div class="gls-col gls-size__4-of-12"></div>  
          </div>
        </div>
      </div>
    </gls-card>
  </div>
</template>
<script>

const TimePicker = require('glass-css/src/js/time-picker');
const DatePicker = require('glass-css/src/js/calendar')

export default {
  data () {
    return {
      defaultDate: '2021-11-11'
    }
  },
  mounted () {
    var tpSelectbox = new TimePicker('#timepicker-selectbox', {
                initialHour: 3,
                initialMinute: 3,
                disabledHours: [1, 2, 14],
                inputType: 'selectbox',
            });

    const container = document.getElementById('tui-date-picker-container');
    const target = document.getElementById('tui-date-picker-target');


const instance = new DatePicker(container, {
  date: new Date(),
    input: {
        element: target,
        format: 'yyyy-MM-dd HH:mm A'
    },
    timePicker: {
          layoutType: 'tab',
          inputType: 'spinbox'
        }
});


instance.getDate();

this.initDropdown();
  },
  methods: {
    dropdown () {
      let container = document.querySelector('.gls-dropdown-2')

      container.addEventListener('click', event => {

        let menu = container.querySelector('.menu')

        let display = menu.style.display;

        if(display === 'block') {
          menu.style.display = 'none';
          container.classList.remove('active')
          
        } else {
          menu.style.display = 'block';
          container.classList.add('active')
        }

        
event.stopPropagation();
        
      })

      container.addEventListener('blur', event => {
         let menu = container.querySelector('.menu')

        menu.style.display = 'none';

        container.classList.remove('active')
        event.stopPropagation();
      })
    },
    initDropdown () {
      this.dropdown();
    }
  }
}
</script>