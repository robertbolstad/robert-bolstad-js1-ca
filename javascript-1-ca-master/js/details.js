// ----------------------- Level 1 --------------------------------------------

/*
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const characterUrl = `https://rickandmortyapi.com/api/character/`;
const detailUrl = `${characterUrl}${id}`;

fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });

    function createDetails(json) {
    console.dir(json);

    const image = document.querySelector(".details-image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const status = document.getElementById("status")
    status.innerHTML = json.status;

    const species = document.getElementById("species")
    species.innerHTML = json.species;

    const origin = document.getElementById("origin")
    origin.innerHTML = json.origin.name;

    const location = document.getElementById("location")
    location.innerHTML = json.location.name;

    document.title = json.name + " | " + document.title;

}
*/

// ----------------------- Level 2 --------------------------------------------

//additional code added to details.html:
/* 
    <div class="loader"></div>
*/

const loader = document.querySelector(".loader")
const details = document.querySelector(".detail-container");
//hideing the html
details.style.visibility = "hidden";

// get the query string
const queryString = document.location.search;
// get the parameters in the query string
const params = new URLSearchParams(queryString);

let id;

// check if the id parameter exists
if (params.has("id")) {
    // assign the id parameter to the id variable
    id = params.get("id");
} else {
    // if the id paramter doesn't exist, redirect to index.html
    document.location.href = "index.html";
}

const characterUrl = `https://rickandmortyapi.com/api/character/`;
// adding the id variable to the URL we will use in the fetch method
const detailUrl = `${characterUrl}${id}`;

fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
        // remove loader div
        loader.style.display = "none";
        // set the details of the character page to visible
        details.style.visibility = "visible";
    })
    .catch(function() {
        document.location.href = "error.html";
    });

function createDetails(json) {
    //selecting the HTML from details.html and assigning new properties to the placeholders from JSON

    const image = document.querySelector(".details-image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const status = document.getElementById("status")
    status.innerHTML = json.status;

    const species = document.getElementById("species")
    species.innerHTML = json.species;

    const origin = document.getElementById("origin")
    origin.innerHTML = json.origin.name;

    const location = document.getElementById("location")
    location.innerHTML = json.location.name;

    //Setting the title of the page to be the name of the character.
    document.title = json.name + " | " + document.title;

};