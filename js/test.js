
//Puts a pokemon index of information into the console
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}

// read this as: make a request to URL, WHEN it finishes THEN run convertToJson
// WHEN it finishes THEN run doStuff
fetch(url).then(convertToJson).then(doStuff);
// meanwhile...continue with the rest of the program...
console.log("second: ", results);