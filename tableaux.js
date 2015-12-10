// tableau indicé :

var tab = [];

var banana = "hello, world, of, js";

var mots = banana.split(", ");

for (var i = 0; i < mots.length; i++)
  {
    console.log(mots[i]);
  }

// tableau associatif :

var ta = new Object;

ta.nom = "marley";
ta.prenom = "bob";
ta["ile de france"] = "paris";
ta["rhone"] = 'lyon';
ta["bouches du rhone"] = "marseille";

for (var cle in ta)
  {
    console.log(cle + ' : ' + ta[cle]);
  }



