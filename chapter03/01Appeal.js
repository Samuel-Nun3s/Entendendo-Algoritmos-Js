function salute(name) {
  console.log(`Hello, ${name}!`);
  salute2(name);
  console.log("Getting ready to say goodbye");
  goodbye();
}

function salute2(name) {
  console.log(`How is ${name}?`);
}

function goodbye() {
  console.log("Ok, tchau!");
}

salute("Samuel");


function fat(x) {
  if (x == 1) {
    return 1;
  } else {
    return x * fat(x-1);
  }
}

console.log(fat(3));