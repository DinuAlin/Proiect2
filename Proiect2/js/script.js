function ScrollTo(name) {
    ScrollToResolver(document.getElementById(name));
  }
  
  function ScrollToResolver(elem) {
    var jump = parseInt(elem.getBoundingClientRect().top * .5);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
      elem.lastjump = Math.abs(jump);
      setTimeout(function() { ScrollToResolver(elem);}, "100");
    } else {
      elem.lastjump = null;
    }
  }

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "data.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>An</th><th>Populatie</th><th>Procent</th></tr>";
    var x = xmlDoc.getElementsByTagName("ROW");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("POPULATION")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PERCENT_CANGE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }