

var s = prompt("enter the statment:");
var c = prompt("enter the character: ");

function search(statment , char) {
 var arr1=[];
  
  for (var i = 0; i < statment.length; i++) {
    if (statment[i] === char) {
      arr1.push(i);
    }
  
  }
  return arr1;
var result = search(statment , char) ;
console.log(result); 

}












