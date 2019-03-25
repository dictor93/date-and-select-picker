window.moment = require("./moment.js");

import './daterangepicker.min.js';
import './bootstrap-select.min.js';

function dateRangeCallback(start, end) {}

$(document).ready(function() {

  
  $('input[name="daterange"]').daterangepicker({
    ranges: {
    "Today": [window.moment(), window.moment()],
    "Yesterday": [window.moment().subtract(1, "days"), window.moment().subtract(1, "days")],
    "Last 7 Days": [window.moment().subtract(6, "days"), window.moment()],
    "Last 30 Days": [window.moment().subtract(29, "days"), window.moment()],
    "This Month": [window.moment().startOf("month"), window.moment().endOf("month")],
    "Last Month": [window.moment().subtract(1, "month").startOf("month"), window.moment().subtract(1, "month").endOf("month")]
    }
  }, dateRangeCallback);

  $('.selectpicker').selectpicker();
});