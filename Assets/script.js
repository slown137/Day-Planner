var currentDayE1 = document.querySelector('#currentDay');
var container = document.querySelector('.container')
var today = moment();
// sets the date on the page using moment.js
currentDayE1.textContent = today.format('dddd, MMMM Do')

