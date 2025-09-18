function capitalized(namess) {
  return namess.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

let namess = ["eman", "rana", "malak", "hana"];
let capitalizedd = capitalized(namess);
console.log(capitalizedd); 

