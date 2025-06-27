

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();


//this function checks if you have the API key set.
function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
