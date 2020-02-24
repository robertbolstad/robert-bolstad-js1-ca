//storing the URL into a variable
const baseURL = "https://rickandmortyapi.com/api/character/";
// Passing the URL(baseURL) to the fetch method
fetch(baseURL)
    .then(function(response) {
        //Converting the data form the API into JSON using the json() method.
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function() {
        //Redirect to error.html if an error occurs.
        document.location.href = "error.html";
    });

function handleJson(json) {
    const data = json.results;
    const results = document.querySelector(".results");

   //declare a variable to hold the HTML
    let html = "";
    //Looping through the data(json.results)
    for (let i = 0; i < data.length; i++) {
        let object = data[i];

        if (object.type === "") {
            //if the property of "type" is empty, it will be assigned to Unknown
            object.type = "Unknown";
        }
        // adding the HTML string to my varible
        html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                        <img class="image" src=${object.image} alt=${object.name}>
                        <div class="details">
                            <h4 class="name">${object.name}</h4>
                            <p>Type: ${object.type}</p>    
                            <p>Episode count: ${object.episode.length}</p>                                  
                            <a class="btn btn-primary" href="details.html?id=${object.id}">Details</a>
                        </div>
                    </div>
                </div>`;
                    
    };
    //Assign the newly created HTML string to be the innerHTML property of results
    results.innerHTML = html;

}