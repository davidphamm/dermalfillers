var btnContainer = document.getElementById("nav");
var btn = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}