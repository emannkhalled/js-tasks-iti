function doThing(){
    var x1 = document.getElementById("a1").value;
    var x2 = document.getElementById("b2").value;
    var x3 = document.getElementById("c3").value;
    var x4 = document.getElementById("d4").value;

    var res1 = 0, cnt2 = 0, res2 = false, res3 = 0; 

    if (x1) {
        res1 = document.getElementsByTagName(x1).length;
    }on
    if (x2) {
        res2 = document.getElementsByClassName(x2).length;
    }
    if (x3) {
        res2 = !!document.getElementById(x3); 
    }
    if (x4) {
        res3 = document.getElementsByName(x4).length;
    }

    document.getElementById("result").innerHTML =
        "Tag: " + res1 + " | Class: " + res2 + " | ID: " + res2 + " | Name: " + res3;
}
