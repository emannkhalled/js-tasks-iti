function doThing() {
  var input = document.getElementById("txt").value;

  document.getElementById("c1").className = "c";
  document.getElementById("c2").className = "c";
  document.getElementById("c3").className = "c";

  if (input == 1) {
    document.getElementById("c1").className = "c colored";
  }
  
  else if (input == 2) {
    document.getElementById("c2").className = "c colored";
  }
 
  else if (input == 3) {
    document.getElementById("c3").className = "c colored";
  }
}
