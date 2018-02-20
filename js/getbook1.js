/* Sooreechine, Tida
   CS290 HOW-TO GUIDE: GOOGLE BOOKS API
   May 19, 2016
*/


    var req = new XMLHttpRequest();
    var apiKey = "AIzaSyB0BRhPAFxpNIirkTfzKZnQZPTap8e2vHQ";
    var volumeId = "CxxGPgAACAAJ";

    req.open("GET", "https://www.googleapis.com/books/v1/volumes/" + volumeId + "?" + "key=" + apiKey, true);
    req.addEventListener("load", function() {
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        document.getElementById("author").textContent = response.volumeInfo.authors + ".";
      } else {
        console.log("Error in network request: " + request.statusText);
      }
    });
    req.send();


