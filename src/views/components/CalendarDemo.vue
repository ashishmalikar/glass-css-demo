<template>
  <div class="gls-container" style="margin-top: 2em;">
    <div style="height: 30vh;">
      <div class="gls-calendar" id="calendar">
        <div class="gls-calendar-header">
          <div class="gls-calendar-header-title">
            November 2021
          </div>
          <div class="gls-calendar-header-actions">
            <div class="gls-button-group" style="margin: 0px;">
              <button class="gls-button">
                &lt;
              </button>
              <button class="gls-button">&gt;</button>
            </div>
          </div>
        </div>
        <div class="gls-calendar-body">
          <div class="gls-calendar-body-container">
            <table class="gls-calendar-month-table" border="1">
              <thead>
                <tr class="gls-calendar-month-name-row">
                  <th v-for="day in days" :key="day">{{day}}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday" ]
    }
  }
}
</script>