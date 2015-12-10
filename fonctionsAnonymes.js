function additionner(a,b)
{
  return a+b;
}

var soustraire = function(a,b)
                  {
                    return a-b;
                  };


function calculer(a,b,operation)
{
  console.log("opérandes : " + a + ", " + b);
  console.log("resultat : " + operation(a,b));
}


calculer(38,4,additionner);

calculer(51,9,soustraire);


calculer(1,1, function(a,b){
                  console.log("Je suis une fonction anonyme");
                  return 42;
               });

var tab = ['a','b','c'];

var x = 12;

tab.forEach(function(elt, i){
  console.log(i + " : " + elt);
  
      });












