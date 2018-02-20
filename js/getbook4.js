/* Sooreechine, Tida
   CS290 HOW-TO GUIDE: GOOGLE BOOKS API
   May 19, 2016
*/

document.addEventListener("DOMContentLoaded", bindButton);

function bindButton() {
  document.getElementById("isbnSubmit").addEventListener("click", function(event) {
    var req = new XMLHttpRequest();
    var apiKey = "AIzaSyB0BRhPAFxpNIirkTfzKZnQZPTap8e2vHQ";
    var payload = {"isbnNumber": "null"};
    payload.isbnNumber = document.getElementById("isbnNumber").value;
    req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=isbn:" + payload.isbnNumber + "&key=" + apiKey, true);
    req.addEventListener("load", function() {
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        response = response.items[0];
        document.getElementById("title").textContent = response.volumeInfo.title;
        document.getElementById("subtitle").textContent = response.volumeInfo.subtitle;
        document.getElementById("author").textContent = response.volumeInfo.authors;

        var isbnList = "";
        for (var i=0; i< response.volumeInfo.industryIdentifiers.length; i++)
          isbnList += response.volumeInfo.industryIdentifiers[i].identifier + ", ";
        isbnList = isbnList.substring(0, isbnList.lastIndexOf(','));
        document.getElementById("isbn").textContent = isbnList;

        document.getElementById("pic").textContent = response.volumeInfo.imageLinks.large;
      } else {
        console.log("Error in network request: " + request.statusText);
      }
    });
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });
}
