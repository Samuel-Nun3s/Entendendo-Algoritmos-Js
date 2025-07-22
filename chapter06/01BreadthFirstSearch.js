let graph = {};

graph["voce"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "maggy"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["maggy"] = [];

function personAndSeller(name) {
  return name[0] == "m";
}


function search(name) {
  let search_queue = [];
  search_queue = search_queue.concat(graph[name]);
  let verified = [];

  while (search_queue.length > 0) {
    let person = search_queue.shift();
    if (!verified.includes(person)) {
      if (personAndSeller(person)) {
        console.log(person + " e um vendedor de manga");
        return true;
      } else {
        search_queue = search_queue.concat(graph[person]);
        verified.push(person);
      }
    }
  }

  return false;
}

console.log(search("voce"));