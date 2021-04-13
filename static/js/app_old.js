// This is app.js

console.log(`app.js has loaded`)

var UFOSpotters = [
    "John L.", "Milt", "Percy", "Connie",
    "Florence", "Mary", "Diana", "Betty",
    "Miles", "Wayne", "Herbie", "Ron", "Tony",
    "Neal", "Gregg", "Michael S.", "Michael C.", "David Br.", "Carlos", "José",
    "Maurice", "Philip", "Verdine", "Ralph",
    "Ari", "Paloma", "Viv", "Tessa",
    "Tina", "Chris F.", "David By.", "Jerry",
    "Adam C.", "Larry Jr.", "Paul H.", "David E.",
    "Belinda", "Jane", "Margot", "Elissa", 
    "Bob", "Tom S.", "Paul W.", "Chris M.",
    "Mike D.", "Adam Y.", "Adam H.",
    "Thom Y.", "Jonny", "Colin", "Phil", "Ed" 
    ];
console.log(`There are ${UFOSpotters.length} UFO spotters in this practice dataset:`);

// for (var i = 0 ; i < students.length; i++)
    // console.log(students[i]);

// for (var i = 0 ; i < UFOSpotters.length; i++)
    // printName(UFOSpotters[i]);


// This calls an anonymous or callback function:
// UFOSpotters.forEach( function(name) {
    // console.log(name);
// });

function printName(name) {
    console.log(name);
}

// This calls the named function I just created:
UFOSpotters.forEach(printName);

// An object in JS resembles a dictionary in Python.
// It has a name and a series of key-value pairs:
UFObject = {
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green...my front door."
  }
// JSON stands for JavaScript Object Notation.
// A JSON is a list of objects.
// JS most commonly uses dot notation.

console.log(`On ${UFObject.datetime} in/near ${UFObject.city}, ${UFObject.state} ${UFObject.country}, a ${UFObject.shape} was reported for ${UFObject.durationMinutes} ${UFObject.comments}`);

// I can add a key-value pair to the object after the fact if I wish:
randomSpotter = Math.floor(Math.random() * UFOSpotters.length)+1;
// console.log(randomSpotter);
UFObject.spotter = UFOSpotters[randomSpotter];
console.log(`On ${UFObject.datetime} in/near ${UFObject.city}, ${UFObject.state} ${UFObject.country}, ${UFObject.spotter} reported seeing a ${UFObject.shape} for ${UFObject.durationMinutes} ${UFObject.comments}`);

// Similarly, I can delete a key-value pair from the object after the fact:
delete UFObject.comments;
console.log(UFObject);

// I can check for a key-value pair in the JS object:
if ("spotter" in UFObject) {
    console.log(`This JS object has a spotter, ${UFObject.spotter}.`)
}

// I can get the keys in an object:
console.log(`${Object.keys(UFObject)}`);

// I can get the key-value pairs in an object:
console.log(`${Object.entries(UFObject)}`);

// For-each doesn't return values across the = sign, but map does.
// I'm going to use the array UFOSpotters to practice mapping.
mapUFOSpotters = UFOSpotters.map(function(spotter) {
    return spotter;
});
console.log(`Mapping over UFOSpotters returs this:\n${mapUFOSpotters}`);

var mapUFOSpottersWithIndex = [];
mapUFOSpottersWithIndex = mapUFOSpotters.map(function(item, index) {
    return `{ name: "${item}", ID: ${index+1} }`;
});

mapUFOSpottersWithIndex.sort((a,b) => a - b);
console.log(`Sorting the mapped array with index returns this:\n${mapUFOSpottersWithIndex}`);

var names = [];
names = mapUFOSpottersWithIndex.map(function(spotter) {
    return spotter.name;
});
console.log(names);

var IDs = [];
IDs = mapUFOSpottersWithIndex.map(function(spotter) {
    return spotter.ID;
});
console.log(IDs);
