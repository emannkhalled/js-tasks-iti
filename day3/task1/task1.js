
function doSomeThing() {
    var inp = document.getElementById("txt").value;
    var inputs = inp.split(",");

    var max = inputs[0] ; 
    var min = inputs[0] ;

    for (var i = 1; i < inputs.length; i++) {
      var num = inputs[i]
        if (num > max) max = num;
        if (num < min) min = num;
    }

    document.getElementById("max").value = max;
    document.getElementById("min").value = min;
}