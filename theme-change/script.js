// Code goes here

var theme = localStorage["theme"];

$(document).ready(function() {
  $("body").removeClass("").addClass(theme);
  
  $("#change-theme").click(function() {
    theme = (theme === "light" ? "dark" : "light");
    localStorage["theme"] = theme;
    $("body").removeClass().addClass(theme);
  });
});
