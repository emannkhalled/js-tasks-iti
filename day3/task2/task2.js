function doSomeThing() {
  var text = document.getElementById("txt").value;
  var statment = text.split(" ");
 var result;

  for (var i = 0; i < statment.length; i++) {
    if (statment[i]) {
      var fchar = statment[i][0].toUpperCase();
      var str = statment[i].slice(1);
      result =result+ fchar + str ; 
    }
  }

  document.getElementById("txt1").value =   result; 
  console.log(result); 
}
