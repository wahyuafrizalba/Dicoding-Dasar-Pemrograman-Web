function fungsiHeader() {
    var x = document.getElementById("navhp");
    if (x.className === "nav-hp") {
      x.className += " responsive";
    } else {
      x.className = "nav-hp";
    }
}