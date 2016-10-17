function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "xml/cars.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Mark</th><th>Model</th><th>Year</th><th>Mileage</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("CAR");
  for (i = 0; i <x.length; i++) {
   table += "<tr><td>" +
    x[i].getElementsByTagName("MARK")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("MODEL")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("MILEAGE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}