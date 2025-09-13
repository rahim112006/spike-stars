document.addEventListener("DOMContentLoaded", function() {
    var icons = document.querySelectorAll(".icon");
    icons.forEach(function(icon) {
      icon.addEventListener("click", function() {
        var tooltip = this.querySelector("::after");
        tooltip.style.opacity = "1";
        setTimeout(function() {
          tooltip.style.opacity = "0";
        }, 2000); 
      });
    });
  });
  