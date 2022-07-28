var currentDayEl = $('#currentDay');

//For displaying the current day using moment.js

function currentDay() {
  var today = moment().format('dddd, MMM Do YYYY');
  currentDayEl.text(today);
}
setInterval(currentDay);

// Time block function & the text for that event is saved in local storage

$("#hr9").on('click', function () {
  var eventName = $("#txtAreaHr9").val();
  localStorage.setItem(9, eventName);
})

$("#hr10").on('click', function () {
  var eventName = $("#txtAreaHr10").val();
  localStorage.setItem(10, eventName);
})

$("#hr11").on('click', function () {
  var eventName = $("#txtAreaHr11").val();
  localStorage.setItem(11, eventName);
})

$("#hr12").on('click', function () {
  var eventName = $("#txtAreaHr12").val();
  localStorage.setItem(12, eventName);
})
$("#hr13").on('click', function () {
  var eventName = $("#txtAreaHr13").val();
  localStorage.setItem(13, eventName);
})

$("#hr14").on('click', function () {
  var eventName = $("#txtAreaHr14").val();
  localStorage.setItem(14, eventName);
})

$("#hr15").on('click', function () {
  var eventName = $("#txtAreaHr15").val();
  localStorage.setItem(15, eventName);
})

$("#hr16").on('click', function () {
  var eventName = $("#txtAreaHr16").val();
  localStorage.setItem(16, eventName);
})
$("#hr17").on('click', function () {
  var eventName = $("#txtAreaHr17").val();
  localStorage.setItem(17, eventName);
})

var tagNames = $("textarea");
for (var tagName of tagNames){
  var parentId = $(tagName).parent().attr("id");
  $(tagName).text(localStorage.getItem(parentId));
}

setInterval(refreshHour, 10000);

function refreshHour() {  
  for (var tagName of tagNames) {
    var parentId = $(tagName).parent().attr("id");
    var elementId = $(tagName).attr("id");
    var intParentId = parseInt(parentId);
    var intCurrentHr = parseInt(currentHr);
    console.log("currentHr::" + currentHr + "parentId:: " + parentId + "  elementId::" + elementId);
    if (intCurrentHr < intParentId) {
      $(tagName).removeClass("bg-success").addClass('future')
    }
    if (intCurrentHr > intParentId) {
      $(tagName).removeClass("bg-success").addClass('past')
    }
    if (intCurrentHr === intParentId) {
      $(tagName).removeClass("bg-success").addClass('present')
    }
  }
}

