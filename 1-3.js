
// declaration du table
let tableDeChoix = [];
// fonction qui laisse decide quel maths est choisit
function trouverQuelMath() {
  // déclaire le tableau de choix pour l'entrée de l'utilisateur
  tableDeChoix = [];
  // si l'utilisateur choisit l'option d'addition, ajoute addition
  // a la liste
  tableDeChoix[0] = document.getElementById("addition").checked;
  // si l'utilisateur choisit l'option de soustraction, ajoute 
  // soustraction a la liste
  tableDeChoix[1] = document.getElementById("soustraction").checked;

  //change true = 1 false = 0
  // fait que si l'option 1 est choisit (addition), elle met le numéreau
  // 1 a la liste, sinon, elle met le numéreau 0 dans la liste
  if (tableDeChoix[0] === true) {
    tableDeChoix[0] = 1;
  } else if (tableDeChoix[0] === false) {
    tableDeChoix[0] = 0;
  }
  // fait que si l'option 2 est choisit (soustraction), elle met le 
  // numéreau 1 a la liste, sinon, elle met le numéreau 0 dans la liste
  if (tableDeChoix[1] === true) {
    tableDeChoix[1] = 1;
  } else if (tableDeChoix[1] === false) {
    tableDeChoix[1] = 0;
  }

  // verification pour voir si le tableau est fait
  console.log(tableDeChoix);
}
// Trouver si toute l



// décalration de variables
var reponse;
var loopInf;
var total = 0;
var nombreDeEssai = 0;
var nombreDeBonneReponse = 0;
var toutQuestionBonneBesoin = 0;
var sumbittedReponse = 0;
var t1;
var cocherTout = 0;

// nombre de questions choisit
function nombreDeQuestion(numDeChoix) {
  toutQuestionBonneBesoin = numDeChoix;

}

//systeme de decision de question

function randomQuestionFunction() {
  //on = 1 off = 0 si la table est "on" on multpiply avec le numero

  var randomQuestion = Math.floor(Math.random() * 4.9)
  var quelMath = 0;
  function decideParChance() {
    if (randomQuestion === 1) {
      quelMath = tableDeChoix[0] * randomQuestion
    } else if (randomQuestion === 2) {
      quelMath = tableDeChoix[1] * randomQuestion;
    }
  }

  var j = 0;
  var loopInf = 0;
  //trouve quelle function on a pris par chances
  while (j < 1) {
    // fonction pour voir si la fonction quelMath est égale 
    // a l'addition
    if (quelMath === 1) {
      // si oui, fait fonction de l'addition et ajoute 1 a la variable j
      addition()
      j++;
      // fonction pour voir si la fonction quelMath est égale 
      // a la soustraction
    } else if (quelMath === 2) {
      // si oui, fait fonction de soustraction et ajoute 1 a la variable 
      // j
      soustraction()
      j++;
      // fonction pour voir si la fonction quelMath est égale 
      // a la multiplication
    } else if (quelMath === 0) {
      randomQuestion = Math.floor(Math.random() * 5.9)
      if (randomQuestion === 1) {
        quelMath = tableDeChoix[0] * randomQuestion
      } else if (randomQuestion === 2) {
        quelMath = tableDeChoix[1] * randomQuestion;
      }
      loopInf += 1;
      console.log("loop " + loopInf);
    }
  }

}

// fonction pour l'Addition
function addition() {
  // définit le premier nombre a un chiffre hazard de 0 a 25
  var nombre1A = Math.floor(Math.random() * 15) + 5;
  // définit le deuxième nombre a un chiffre hazard de 0 a 25
  var nombre2A = Math.floor(Math.random() * 17) + 3;
  total = (nombre1A + nombre2A)
  // console log le total pour verifié si la fonction marche
  console.log(total)
  // imprime le code sur la page web
  document.getElementById("questionDiv").innerHTML = nombre1A + "+" + nombre2A + "=";
}

// fonction pour la Soustraction
function soustraction() {
  // définit le premier nombre a un chiffre hazard de 50 a 150
  var nombre1S = Math.floor(Math.random() * 20) + 5;
  // définit le deuxième nombre a un chiffre plus petit que le premier
  var nombre2S = Math.floor(Math.random() * (nombre1S - 3)) + 3;
  // met le total a la reponse du 1er nombre - le 2e nombre
  total = (nombre1S - nombre2S)
  // console log le total pour verification
  console.log(total)
  // imprime le code sur la page web
  document.getElementById("questionDiv").innerHTML = nombre1S + "-" + nombre2S + "=";
}






// fonction qui laisse la personne commencer le jeux
function start() {
  // definit le nombre d'éssai a 0
  nombreDeEssai = 0;
  // definit le nombre de bonne réponse a 0
  nombreDeBonneReponse = 0;
  // definit le variable "com" par le click du boutton commence
  var com = document.getElementById("Commence");
  // enlève le boutton commence de l'écran
  com.parentNode.removeChild(com);
  // commence le timer a 0 secondes
  t1 = performance.now();
}

//declar reponse 
function valueDeInput() {
  sumbittedReponse = document.getElementById("quantity");
}

//ajoute compt a nombre essai
function plusUnEssai() {
  // ajoute 1 a nombre d'essay
  nombreDeEssai += 1;
  // verification pour voir le nombre d'essay prises totals
  console.log("nombre d'essais: " + nombreDeEssai);
}

// trouver si la reponse donner est la bonne reponse et done un point si 
// oui
function checkReponse() {
  if (sumbittedReponse.value == total) {
    nombreDeBonneReponse += 1;
    document.getElementById("montreNombreDeBonneReponse").innerHTML = nombreDeBonneReponse;
    document.getElementById("pasBonneReponse").innerHTML = "✅Bonne réponse✅";
    document.getElementById("montreNombreDeBonneReponse").style.background = "rgb(97, 235, 52)";
  } else if (sumbittedReponse.value != total) {
    document.getElementById("pasBonneReponse").innerHTML = "❌ Mauvaise réponse❌";
    document.getElementById("montreNombreDeBonneReponse").style.background = "rgb(217, 52, 52)";
  }
}
// la fonction qui arrete de demander des questions a la personne
// dès qu'ils répondent a le nombre chioisit de qustions correctement
function arreteQuestion() {
  // si le nombre de reponse est = ou plus grand que le nombre de 
  // qustions choisit, arrête le chronomètre et demontre le score
  if (nombreDeBonneReponse >= toutQuestionBonneBesoin) {
    body3()
    var t2 = performance.now();
    var temp = ((t2 - t1) / 1000);
    document.getElementById("demontreTemp").innerHTML = "Temps: " +
      temp.toFixed(2) +
      " secondes<br> Nombre d'essais:  " +
      nombreDeEssai +
      "<br> Nombre de mauvaises réponses: " +
      (nombreDeEssai - toutQuestionBonneBesoin);
    // si le nombre de reponse est plus petit que le nombre de questions
    // choisit, demande une autre question
  } else if (nombreDeBonneReponse < toutQuestionBonneBesoin) {
    randomQuestionFunction();
    sumbittedReponse.value = ``;
  }
}

//montre les input pour renter nombre
function demontreBouton() {
  document.getElementById("quantity").style.display = "inline";
  document.getElementById("submit").style.display = "inline-block";
  document.getElementById("montreNombreDeBonneReponse").style.background = "rgba(39, 93, 243, 0.281)";
  document.getElementById("montreNombreDeBonneReponse").style.border = "2px solid black";
}
//quand tu rentre enter tu joue les fonction dans sumbit
function enter(){
  var input = document.getElementById("quantity");
    input.addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("submit").click();
    }
  });
}



//tout le code HTML pour le premier body après le page titre
function body1() {
  //loup qui trouve si tout lex checkbox son pas checker et arrete de aller au prochain si il y a aucun 
  cocherTout = 0;
  for (var y = 0; y < 2; y++) {
    if (tableDeChoix[y] !== 1) {
      cocherTout++;
      console.log(cocherTout)
    }
  }
  if (cocherTout !== 2) {
    document.getElementById("delBody").innerHTML =
      "<h1>À combien de questions voulez-vous répondre correctement?</h1> " +
      "<form>" +
      "<input type='button' id='numDeQust5' onclick='body2(), nombreDeQuestion(5), enter()' value='5'/>" +
      "<input type='button' id='numDeQust10' onclick='body2(), nombreDeQuestion(10), enter()' value='10'/>" +
      "<input type='button' id='numDeQust15' onclick='body2(), nombreDeQuestion(15), enter()' value='15'/>" +
      "</form>" +
      "<a id='PagePrecedente' href='4-6.html'> Page précedente</a>"
  }

}

//tout le body HTML qui définit le jeux 
function body2() {

  document.getElementById("delBody").innerHTML =
    "<input type='button' value='Commence'  id='Commence' onclick=' start(), randomQuestionFunction(), demontreBouton()' > " +

    "<div id='jeux'><div id='questionDiv'> </div>" +
    "<input type='number' id='quantity' name='quantity' min='0'>" +
    "<input type='submit'id='submit' value='entrée' onclick='plusUnEssai(), valueDeInput(), checkReponse(),arreteQuestion()'></div>" +
    "<div id='montreNombreDeBonneReponse'></div>" +
    "<div id='pasBonneReponse'></div>"
}

//tout le body HTML qui lit a ce qui a faire avec le fin du jeu
function body3() {
  document.getElementById("delBody").innerHTML = "<a id='RetourAccueil' href='1-3.html'> Retour à l'accueil </a>" +
    "<a id='RecommencerJeux' href='1-3.html'> Recommencer le jeux</a>" +
    "<div id='demontreTemp'></div>" + "<a id='RetourAccueil' href='index.html'> Retour à l'accueil </a>";
}
//commence