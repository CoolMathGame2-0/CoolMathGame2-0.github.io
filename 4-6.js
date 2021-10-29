
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
  // si l'utilisateur choisit l'option de multiplication, ajoute 
  // multiplication a la liste
  tableDeChoix[2] = document.getElementById("multiplication").checked;
  // si l'utilisateur choisit l'option de division, ajoute division
  // a la liste
  tableDeChoix[3] = document.getElementById("division").checked;

  //change true = 1 false = 0
  // fait que si l'option 1 est choisit (addition), elle met le numéro
  // 1 a la liste, sinon, elle met le numéro 0 dans la liste
  if (tableDeChoix[0] === true) {
    tableDeChoix[0] = 1;
  } else if (tableDeChoix[0] === false) {
    tableDeChoix[0] = 0;
  }
  // fait que si l'option 2 est choisit (soustraction), elle met le 
  // numéro 1 a la liste, sinon, elle met le numéro 0 dans la liste
  if (tableDeChoix[1] === true) {
    tableDeChoix[1] = 1;
  } else if (tableDeChoix[1] === false) {
    tableDeChoix[1] = 0;
  }
  // fait que si l'option 3 est choisit (multiplication), elle met le 
  // numéro 1 a la liste, sinon, elle met le numéro 0 dans la liste
  if (tableDeChoix[2] === true) {
    tableDeChoix[2] = 1;
  } else if (tableDeChoix[2] === false) {
    tableDeChoix[2] = 0;
  }
  // fait que si l'option 4 est choisit (division), elle met le numéro
  // 1 a la liste, sinon, elle met le numéro 0 dans la liste
  if (tableDeChoix[3] === true) {
    tableDeChoix[3] = 1;
  } else if (tableDeChoix[3] === false) {
    tableDeChoix[3] = 0;
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
var cocherTout= 0;

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
      quelMath = tableDeChoix[1] * randomQuestion
    } else if (randomQuestion === 2) {
      quelMath = tableDeChoix[2] * randomQuestion;
    } else if (randomQuestion === 3) {
      quelMath = tableDeChoix[3] * randomQuestion;
    } else if (randomQuestion === 4) {
      quelMath = tableDeChoix[4] * randomQuestion;
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
    } else if (quelMath === 3) {
      // si oui, fait fonction de multiplication et ajoute 1 a la 
      // variable j
      multiplication()
      j++;
      // fonction pour voir si la fonction quelMath est égale 
      // a la division
    } else if (quelMath === 4) {
      // si oui, fait fonction de division et ajoute 1 a la variable j
      division()
      j++;
    } else if (quelMath === 0) {
      randomQuestion = Math.floor(Math.random() * 5.9)
      if (randomQuestion === 1) {
        quelMath = tableDeChoix[0] * randomQuestion
      } else if (randomQuestion === 2) {
        quelMath = tableDeChoix[1] * randomQuestion;
      } else if (randomQuestion === 3) {
        quelMath = tableDeChoix[2] * randomQuestion;
      } else if (randomQuestion === 4) {
        quelMath = tableDeChoix[3] * randomQuestion;

      }
      loopInf += 1;
      console.log("loop " + loopInf);
    }
  }

}

// fonction pour l'Addition
function addition() {
  // définit le premier nombre a un chiffre hazard de 0 a 25
  var nombre1A = Math.floor(Math.random() * 25)+2;
  // définit le deuxième nombre a un chiffre hazard de 0 a 25
  var nombre2A = Math.floor(Math.random() * 25)+2;
  // définit le troisième nombre a un chiffre hazard de 0 a 25
  var nombre3A = Math.floor(Math.random() * 25)+2;
  // définit le total a tout les trois nombres ensembles
  total = (nombre1A + nombre2A + nombre3A)
  // console log le total pour verifié si la fonction marche
  console.log(total)
  // imprime le code sur la page web
  document.getElementById("questionDiv").innerHTML = nombre1A + "+" + nombre2A + "+" + nombre3A + "=";
}

// fonction pour la Soustraction
function soustraction() {
  // définit le premier nombre a un chiffre hazard de 50 a 150
  var nombre1S = Math.floor(Math.random() * 100) + 50;
  // définit le deuxième nombre a un chiffre plus petit que le premier
  var nombre2S = Math.floor(Math.random() * nombre1S);
  // met le total a la reponse du 1er nombre - le 2e nombre
  total = (nombre1S - nombre2S)
  // console log le total pour verification
  console.log(total)
  // imprime le code sur la page web
  document.getElementById("questionDiv").innerHTML = nombre1S + "-" + nombre2S + "=";
}

// fonction pour la Multiplication
function multiplication() {
  // définit le premier nombre a un chiffre hazard de 2 a 16
  var nombre1M = Math.floor(Math.random() * 14) + 2;
  // définit le deuxième nombre a un chiffre hazard de 2 a 16
  var nombre2M = Math.floor(Math.random() * 14) + 2;
  // met le total a la reponse du 1er nombre * le 2e nombre
  total = (nombre1M * nombre2M)
  // console log le total pour verification
  console.log(total)
  // imprime le code sur la page web
  document.getElementById("questionDiv").innerHTML = nombre1M + "*" + nombre2M + "="
}

//fonction division 
function division() {
  // définit le premier nombre a un chiffre hazard de 142 a 1
  var nombre1D = Math.round(Math.random() * 144 / 2) * 2;
  // définit le deuxième nombre a un chiffre hazard du premier
  // nombre divisé par 3 foi un nombre inconnue + 1
  var nombre2D = Math.round((nombre1D ) * Math.random()) ;
  // loop while qui fait que si le total n'est pas un entier 
  // donner une autre réponse jusqu'a que la reponse l'est
  
  while ((nombre1D % nombre2D) !== 0) {
    if (nombre2D > (nombre1D / 2)) {
      nombre2D--
    } else  {
      nombre2D++
    }

  }
  total = nombre1D / nombre2D;
  console.log(total)
  if (total !== 2 && total !== nombre1D && nombre2D !== 1 && nombre2D !== nombre1D){
  document.getElementById("questionDiv").innerHTML = nombre1D + "/" + nombre2D + " = ";
  } else {
    division()
  }

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

//rentrer reponse 
function valueDeInput() {
  sumbittedReponse = document.getElementById("quantity");
}

//ajoute compt a nombre essai
function plusUnEssai() {
  // ajoute 1 a nombre d'essay
  nombreDeEssai += 1;
  // verification pour voir le nombre d'essay prises totals
  console.log("nombre de essai: " + nombreDeEssai);
}

// trouver si la reponse donner est la bonne reponse et done un point si 
// oui
function checkReponse() {
  if (sumbittedReponse.value == total) {
    nombreDeBonneReponse += 1;
    document.getElementById("montreNombreDeBonneReponse").innerHTML= nombreDeBonneReponse;
    document.getElementById("pasBonneReponse").innerHTML= "Bonne reponse !!";
  } else if (sumbittedReponse.value !=total){
    document.getElementById("pasBonneReponse").innerHTML= "❌ mauvaise reponse";
  }
}
// la fonction qui arrete de demander des questions a la personne
// dès qu'ils répondent a le nombre chioisit de qustions correctement
function arreteQuestion() {
  // si le nombre de reponse est = ou plus grand que le nombre de 
  // qustions choisit, arrête le chronomètre
  if (nombreDeBonneReponse >= toutQuestionBonneBesoin) {
    body3()
    var t2 = performance.now();
    var temp = ((t2-t1)/1000);
    document.getElementById("demontreTemp").innerHTML= "Temps: " + 
    temp.toFixed(2) + 
    " secondes<br> Nombre d'essais:  " + 
    nombreDeEssai + 
    "<br> Nombre de mauvais reponse: " + 
    (nombreDeEssai - toutQuestionBonneBesoin);
    // si le nombre de reponse est plus petit que le nombre de questions
    // choisit, demande une autre question
  } else if (nombreDeBonneReponse < toutQuestionBonneBesoin) {
    randomQuestionFunction();
    sumbittedReponse.value = ``;
  }
}


//tout le code HTML pour le premier body après le page titre
function body1() {
  cocherTout = 0;
  for (var y = 0; y < 4; y++ ){
    if (tableDeChoix[y] !== 1){
      cocherTout++;
      console.log(cocherTout)
    }
  }
  if (cocherTout !== 4){
  document.getElementById("delBody").innerHTML =
    "<h1>À combien de questions voulez-vous répondre?</h1> " +
    "<form>" +
    "<input type='button' id='numDeQust5' onclick='body2(), nombreDeQuestion(5)' value='5'/>" +
    "<input type='button' id='numDeQust10' onclick='body2(), nombreDeQuestion(10)' value='10'/>" +
    "<input type='button' id='numDeQust15' onclick='body2(), nombreDeQuestion(15)' value='15'/>" +
    "</form>" +
    "<a id='PagePrecedente' href='4-6.html'> Page precedent</a>"
  }
  
}

//tout le body HTML qui définit le jeux 
function body2() {
  
  document.getElementById("delBody").innerHTML =
    "<input type='button' value='Commence'  id='Commence' onclick=' start(), randomQuestionFunction()' > " +
    "<div id='questionDiv'> </div>" +
    "<input type='number' id='quantity' name='quantity' min='0'>" +
    "<input type='submit'id='submit' value='entrée' onclick='plusUnEssai(),valueDeInput(), checkReponse(),arreteQuestion()'> " + 
    "<div id='montreNombreDeBonneReponse'></div>" +
    "<div id='pasBonneReponse'></div>"
  
}


//tout le body HTML qui lit a ce qui a faire avec le fin du jeu
function body3() {
  document.getElementById("delBody").innerHTML = "<a id='RetourAccueil' href='index.html'> Retour à l'accueil </a>" +
    "<a id='RecommencerJeux' href='4-6.html'> Recommencer le jeux</a>" +
    "<div id='demontreTemp'></div>"
}
//commence