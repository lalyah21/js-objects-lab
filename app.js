import pokemon from './data.js';  // Import the pokemon data

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
};

console.dir(pokemon, { maxArrayLength: null });

let newGame = {};  
newGame.difficulty = "Medium";  
console.log(newGame);  

let starterPokemon = pokemon.filter(p => p.starter === true);
game.party.push(...starterPokemon);  
console.log(game.party);

// Exercise 5
const party1 = [];  
party1.push(pokemon[0]); 
party1.push(pokemon[2]); 
party1.push(pokemon[3]); 
console.log(party1);  

// Exercise 6
let gyms = [
    { name: "Gym A", difficulty: 2, completed: false },
    { name: "Gym B", difficulty: 4, completed: false },
    { name: "Gym C", difficulty: 1, completed: false }
];

for (let i = 0; i < gyms.length; i++) {
    if (gyms[i].difficulty < 3) {
        gyms[i].completed = true;
    }
}

console.log(gyms);

// Exercise 7
let party2 = [
    { id: 1, name: "Bulbasaur" },
    { id: 4, name: "Charmander" },
    { id: 7, name: "Squirtle" },
    { id: 25, name: "Pikachu" }
];

for (let i = 0; i < party2.length; i++) {
    switch (party2[i].id) {
        case 1:
            party2.splice(i, 1, { id: 2, name: "Ivysaur" });
            break;
        case 4:
            party2.splice(i, 1, { id: 5, name: "Charmeleon" });
            break;
        case 7:
            party2.splice(i, 1, { id: 8, name: "Wartortle" });
            break;
        case 25:
            party2.splice(i, 1, { id: 26, name: "Raichu" });
            break;
    }
}

console.log(party2); 

// Exercise 8
let party = [
  { id: 2, name: "Ivysaur" },
  { id: 5, name: "Charmeleon" },
  { id: 8, name: "Wartortle" },
  { id: 26, name: "Raichu" }
];

for (let i = 0; i < party.length; i++) {
  console.log(party[i].name);
}

// Exercise 9
let starterIds = [1, 4, 7, 25];

for (let i = 0; i < pokemon.length; i++) {
  if (starterIds.includes(pokemon[i].id)) {
      console.log(pokemon[i].name);
  }
}

// Exercise 10: Catch Pokémon using a method in the game object
game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
};

let pokemonToCatch = { id: 16, name: "Pidgey" };
game.catchPokemon(pokemonToCatch);

console.log(game.party);  // Check that the Pokémon was added to the party

