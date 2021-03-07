$(document).ready(function() {
    //Save Click
    $(".saveBtn").on("click", function() {
      //Nearby Values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      //Save in LocalStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      //Current # hours
      var currentHour = moment().hours();
  
      //Loop blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        //If passed time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    //Interval = update time
    var interval = setInterval(hourUpdater, 15000);
  
    //Load LocalStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    //Current date display
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });