let voted = {};

function check_voter(name) {
  if (voted.name == name) {
    console.log("Mande embora!");
  } else {
    voted.name = name;
    console.log("Deixe votar!");
  }
}

console.log(check_voter("Samuel"));
console.log(check_voter("Salomao"));
console.log(check_voter("Salomao"));