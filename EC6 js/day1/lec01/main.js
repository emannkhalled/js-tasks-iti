function Add(x, y, ...rest) {
  let sum = x + y;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  console.log(sum);
}

function sayHello() {
  console.log("Hello");
}

var trakName = "PHP";

export { Add, sayHello, trakName };
