
function capitalized(names) {
  return names.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}


function isLowerCase(str) {
  return str == str.toLowerCase();
}


let names = ["eman", "Rana", "malak", "Hana"];


names.forEach((name) => {
  if (isLowerCase(name)) {
    console.log(`${name} is lowercase`);
  } else {
    console.log(`${name} is NOT lowercase`);
  }
});


let capitalizedd = capitalized(names);
console.log("Capitalized names:", capitalizedd);
