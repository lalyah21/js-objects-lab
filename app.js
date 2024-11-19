import pokemon from './data.js';  

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

// Exercise 4: Select a starter Pokémon and add it to the game party
let starterPokemon = pokemon.filter(p => p.starter === true);
game.party.push(...starterPokemon);  
console.log(game.party);

// Exercise 5: Add additional Pokémon to the party
const party1 = [];  
party1.push(pokemon[0]); 
party1.push(pokemon[2]); 
party1.push(pokemon[3]); 
console.log(party1);  

// Exercise 6: Set completed property for gyms with difficulty < 3

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }
}

console.log(game.gyms);

// Exercise 7: Evolve the starter Pokémon in the party
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

// Exercise 8: Print the names of each Pokémon in the party
let party = [
  { id: 2, name: "Ivysaur" },
  { id: 5, name: "Charmeleon" },
  { id: 8, name: "Wartortle" },
  { id: 26, name: "Raichu" }
];

for (let i = 0; i < party.length; i++) {
  console.log(party[i].name);
}

// Exercise 9: Print out all the starter Pokémon
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

/*
Exercise 11: Modify catchPokemon to also decrease the number of pokeballs
1. Copy the catchPokemon method and paste it below.
2. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
*/


game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);

    
    for (let item of this.items) {
        if (item.name === "pokeball") {
            item.quantity -= 1;  
            break;
        }
    }
};


let pokemonToCatch2 = { id: 25, name: "Pikachu" };
game.catchPokemon(pokemonToCatch2);


console.log(game.items);  

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


for (let gym of game.gyms) {
  if (gym.difficulty < 6) {
      gym.completed = true; 
  }
}


console.log(game.gyms);

/*
Exercise 14

Solve Exercise 14 here:
*/

game.partyCount = function() {
  // Count the number of Pokémon in the party
  return this.party.length;
};

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for (let gym of game.gyms) {
  if (gym.difficulty < 8) {
      gym.complete = true;
  }
}


console.log(game.gyms);

console.log(game);




