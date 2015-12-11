var entete = document.getElementById('entete');


var la = document.querySelectorAll("article:nth-of-type(even)");

for (var j = 0; j < la.length; j++)
  {
    var art = la[j];
    art.style.backgroundColor = 'hotpink';
    
  }





entete.innerHTML = "<h1>plop</h1>";

var x = document.getElementsByTagName("article");

for (var i=0; i < x.length; i++)
{
  var articleCourant = x[i];
  
  console.log(articleCourant.children.length);
  console.log(articleCourant.childNodes.length);
  
  articleCourant.childNodes[0].nodeType
  
  var titre = articleCourant.querySelector("h2");
  titre.innerHTML = "HELLO";
  
  var p2 = document.createElement("img");
  
  //p2.innerHTML = "plop";
  p2.setAttribute("src", "/images/logo2.png");
  p2.setAttribute("alt", "description");
  
  articleCourant.appendChild(p2);
}