// Dictionnaire de données
var dict = {
  "CSS": ["Côté client", "https://avatars.mds.yandex.net/i?id=ab0e29bc343303b427d9588e7329e4abea230c79-5469877-images-thumbs&n=13", "Feuilles de style en cascade: est l'un des langages principaux du Web ouvert et a été standardisé par le W3C"],
  "HTML": ["Côté client", "https://avatars.mds.yandex.net/i?id=059a88b05545cb5c817cb3b214d5371d614e8c7a-8174408-images-thumbs&n=13", "HyperText Markup Language: langage de balisage conçu pour représenter les pages web."],
  "PHP": ["", "https://avatars.mds.yandex.net/i?id=4b542470beb720b5789a1e08ae067bc187e27abc-8514130-images-thumbs&n=13", "Hypertext Preprocessor: langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur web."],
  "BDD": ["", "", "Une base de données permet de stocker et de retrouver des données structurées, semi-structurées ou des données brutes ou de l'information, souvent en rapport avec un thème ou une activité ; celles-ci peuvent être de natures différentes et plus ou moins reliées entre elles."],
  "Côté Client": ["Développement Web", "", "fait référence à tout ce qui est affiché ou se déroule dans une application Web sur le client (appareil de l'utilisateur final)"],
  "Côté serveur": ["Développement Web", "https://avatars.mds.yandex.net/i?id=ce52b07bcbee5a42d916fbd26717367a48428197-10165663-images-thumbs&n=13", " côté serveur signifie tout ce qui se passe sur le serveur, et non sur le client. Dans le passé, la quasi-totalité de la logique opérationnelle s'exécutait du côté serveur, ce qui incluait de rendre des pages web dynamiques, d'interagir avec les bases de données, d'authentifier l'identité et de lancer des notifications."],
  "Développement Web": ["", "", "Le développement Web désigne de manière générale les tâches associées au développement de sites Web destinés à être hébergés via un intranet ou Internet."],
  "Conception":["","https://avatars.mds.yandex.net/i?id=67a7d51b9ffff178adc8b1b7b58162462bffbb12-8185142-images-thumbs&n=13","« Ensemble de méthodes, techniques et outils pour la production et la maintenance de composants logiciels de qualité. » utilisation optimale des ressources matérielles (processeur, mémoires, réseau, …) aptitude d 'un logiciel à protéger son code contre des accès non autorisés."],
  "Réseau informatique":["","https://avatars.mds.yandex.net/i?id=e74663e2a3544dfb55bc43237a8fe59e416f3cea-10414372-images-thumbs&n=13","« Un réseau informatique est un ensemble d'équipements reliés entre eux pour échanger des informations. Par analogie avec un filet, on appelle nœud l'extrémité d'une connexion, qui peut être une intersection de plusieurs connexions ou équipements."]
};


//create elements
const div1 = document.createElement('div');
const butt = document.createElement('button');
const container = document.createElement('div');
const contain = document.createElement('div');

const h1 = document.createElement('h1');
const table = document.createElement('table');
const tr1 = document.createElement('tr');
const td1 = document.createElement('td');
const div = document.createElement('div');
const tr2 = document.createElement('tr');
const td2 = document.createElement('td');
const div2 = document.createElement('div');
const img = document.createElement('img');


// Ajout des classes
div1.className = 'div1';
div2.className = 'div2';
div.className = 'description';
img.className = 'img';
 
// Crée l'élément <ol> de premier niveau
var firstOl = document.createElement('ol');
firstOl.className = 'first';

// Crée une fonction pour ajouter des éléments de liste et des boutons
function createListItem(text, hasSublist, hasExpend) {
  var listItem = document.createElement('li');

  // Crée le bouton pour développer/réduire
  if(hasExpend){
    var expandButton = document.createElement('span');
    expandButton.className = 'devRed' + (hasSublist ? ' dev' : ' reduit');
    expandButton.textContent = hasSublist ? '⟏' : '⧁';
    listItem.appendChild(expandButton);

  }

  // Ajoute le texte de l'élément de liste
  var itemText = document.createElement('span');
  itemText.className = 'text';
  itemText.textContent = text;
  listItem.appendChild(itemText);

  // Crée les boutons d'insertion avant et après
  var insertBeforeButton = document.createElement('span');
  insertBeforeButton.className = 'insertBefore';
  insertBeforeButton.textContent = '⊷';
  listItem.appendChild(insertBeforeButton);

  var removeButton = document.createElement('span');
  removeButton.className = 'remove';
  removeButton.textContent = '⋫';
  listItem.appendChild(removeButton);

  var insertAfterButton = document.createElement('span');
  insertAfterButton.className = 'insertAfter';
  insertAfterButton.textContent = '⊶';
  listItem.appendChild(insertAfterButton);

  return listItem;
}

// Crée la structure de liste imbriquée
var topLevel = createListItem('Développement Web', true, true);
firstOl.appendChild(topLevel);





var clientSublist = document.createElement('ol');
topLevel.appendChild(clientSublist);
clientSublist.className = 'two';

var coteClient = createListItem('Côté Client', true, true);
clientSublist.appendChild(coteClient);


var clientSublist2 = document.createElement('ul');
coteClient.appendChild(clientSublist2);


clientSublist2.appendChild(createListItem('HTML', false,false));
var css = createListItem('CSS', false, false);
css.classList.add('active');
clientSublist2.appendChild(css);
clientSublist2.appendChild(createListItem('...', false, false));
clientSublist2.appendChild(createListItem('...', false, false));

clientSublist.appendChild(createListItem('Côté serveur', false, true));
clientSublist.appendChild(createListItem('...', false, true));

firstOl.appendChild(createListItem('Conception', false, true));
firstOl.appendChild(createListItem('BDD', false, true));
firstOl.appendChild(createListItem('Réseau informatique', false, true));
firstOl.appendChild(createListItem('...', false, true));

// Ajoute la liste au corps du document
div1.appendChild(firstOl);

//gerer le click event dans chaque li


document.body.addEventListener('click', function(event) {
  
  if (event.target.classList.contains('insertBefore')) {
    updateStats();
    insertBefore(event.target);

  } else if (event.target.classList.contains('insertAfter')) {
    updateStats();
    insertAfter(event.target);
    
    
  } else if (event.target.classList.contains('text')) {
    displayInfo(event.target);
    active(event.target.parentElement);
    updateStats();

  }else if (event.target.classList.contains('remove')) {

    updateStats();
    event.target.parentElement.remove();

  }else if (event.target.classList.contains('devRed')) {
    if (event.target.classList.contains('reduit')) {
      event.target.classList.add('dev'); 
      event.target.classList.remove('reduit'); 
      dev(event.target);

    } else {
      event.target.classList.add('reduit'); 
      event.target.classList.remove('dev'); 
      reduit(event.target);
    }
  }  
  
}
);


//fucntion pour que l'utilisateur donne le neauveau nom au nouveau elements

function ask(newElement) {
  let iteam = window.prompt("Please enter the name of the new iteam");
  if (iteam != null) {
    newElement.innerHTML ="<span class=\"clickable text\">"+iteam + "</span><span class=\"insertBefore\" >⊷</span><span class=\"remove\" > ⋫ </span><span class=\"insertAfter\" > ⊶ </span>";
  }else{
    newElement.innerHTML ="<span class=\"insertBefore\" >⊷</span><span class=\"remove\" > ⋫ </span><span class=\"insertAfter\" > ⊶ </span>";
  }
};

//fonction d'insertion avant

function insertBefore(ele) {
  'use strict';
  var newElement = document.createElement('li');
  ask(newElement);
  ele.parentElement.insertAdjacentElement('beforebegin', newElement);
};

//fonction d'insertion apres

function insertAfter(ele) {
  'use strict';
  var newElement = document.createElement('li');
  var newElement = document.createElement('li');
  ask(newElement);
  ele.parentElement.insertAdjacentElement('afterend', newElement);
};

//fonction de reduit la liste
function reduit(ele) {
  'use strict';
  ele.textContent = '⧁';
  const sublist = ele.parentElement.querySelector('ol'); 
  const sublist2 = ele.parentElement.querySelector('ul');
  if (sublist) {
    sublist.style.display = 'none'; 
    
  }
  if(sublist2){
    sublist2.style.display= 'none';
  }
};

//fonction de développer la liste
function dev(ele) {
  'use strict';
  ele.textContent = '⟏';
  const sublist = ele.parentElement.querySelector('ol');
  const sublist2 = ele.parentElement.querySelector('ul');
  
  if (sublist) {
    sublist.style.display = 'block';
  }
  if(sublist2){
    sublist2.style.display= 'block';
  }
};

//active class

function active(ele){
  
  if (ele.tagName === 'LI') {
    document.body.querySelectorAll('li').forEach(item => {
      item.classList.remove('active');
    });
    
    ele.classList.add('active');
  }
};


container.id = 'container';

//donner une valeur au button
butt.innerText = '⊲ ⊳';

// liee les new element to body
container.appendChild(div1);
container.appendChild(butt);
container.appendChild(div2);
document.body.appendChild(container);

// mofifier le style de la page
document.body.style.height= '100vh';
document.body.style.width= '100%';

butt.onclick = function () {
  const tempInnerHTML = div1.innerHTML;
  div1.innerHTML = contain.innerHTML;
  contain.innerHTML = tempInnerHTML;
  
  // Swap the classes
  div1.classList.toggle('div1');
  div1.classList.toggle('contain');
  contain.classList.toggle('div1');
  contain.classList.toggle('contain');
  
};




// volet droite
contain.className= 'contain';
// Crée un élément h1 avec la classe "titel" et du texte "MOTS :"
h1.className = 'titel';
h1.textContent = 'MOTS : CSS';


// Crée un élément div avec la classe "description" et du texte
div.textContent = "Feuilles de style en cascade: est l'un des langages principaux du Web ouvert et a été standardisé par le W3C";

// Place la div dans la cellule
td1.appendChild(div);

// Place la cellule dans la première ligne
tr1.appendChild(td1);




img.src = 'https://avatars.mds.yandex.net/i?id=ab0e29bc343303b427d9588e7329e4abea230c79-5469877-images-thumbs&n=13';
img.alt = 'Aucune image';

// Place l'image dans la div
div2.appendChild(img);

// Place la div dans la cellule
td2.appendChild(div2);

// Place la cellule dans la deuxième ligne
tr2.appendChild(td2);

// Place les lignes dans la table
table.appendChild(tr1);
table.appendChild(tr2);

// Ajoute le h1 et la table au corps du document
contain.appendChild(h1);
contain.appendChild(table);
container.appendChild(contain);


function displayInfo(element) {
  var name = element.textContent;
  var info = dict[name]; // Recherche des informations dans le dictionnaire
  var contain = document.querySelector('div.contain'); // Récupère l'élément "contain" par son ID
  console.log('Displaying info for:', element.textContent);
  
  if (info && contain) {
    var innerHTML = '<h1 class="title">Mot:' + name + '</h1><table>' +
    '<tr><td><div class="description">' + info[2] + '</div></td></tr>' +
    '<tr><td><div class="div2">' +
    '<img class="img" src="' + info[1] + '" alt="Aucune image">' +
    '</div></td></tr></table>';
    contain.innerHTML = innerHTML;
  }
}

const para = document.createElement('p');
const liElements = document.body.querySelectorAll('li');
const dis = document.body.querySelector('.description').textContent.split(/\s+/).length;
let totalCategories = 0;
let totalSubcategories = 0;

liElements.forEach((li) => {
  totalCategories++;
  if (li.querySelector('ul') || li.querySelector('ol')) {
    totalSubcategories++;
  }
});


const averageSubcategories = totalSubcategories / totalCategories;
const averageWordsPerCategory = totalword() / totalCategories;

para.textContent = "-Nombre de mots: "+ dis +" -Nombre de catégories: "+totalCategories+" -Nombre moyen de sous-catégories: "+ averageSubcategories +" -Nombre moyen de mots par catégorie: "+averageWordsPerCategory;



document.body.appendChild(para);
function countWords(str) {
  return str.split(/\s+/).length;
}

// Function to calculate the average number of words for each category
function totalword() {
  let wordsTotalCount= 0;
  for (var category in dict) {
    var description = dict[category][2];
     wordsTotalCount = wordsTotalCount + countWords(description);

  }
  return wordsTotalCount;
}


function updateStats() {
  const liElements = document.body.querySelectorAll('li');
  const dis = document.body.querySelector('.description').textContent.split(/\s+/).length;
  let totalWords = liElements.length;
  let totalCategories = 0;
  let totalSubcategories = 0;
  
  liElements.forEach((li) => {
    totalCategories++;
    if (li.querySelector('ul') || li.querySelector('ol')) {
      totalSubcategories++;
    }
  });
  
  const averageSubcategories = totalSubcategories / totalCategories;
  const averageWordsPerCategory = totalword() / totalCategories;
  
  
  // Calculate and display the average number of words for each category

  para.textContent = "- Nombre de mots: " + dis + " - Nombre de catégories: " + totalCategories + " - Nombre moyen de sous-catégories: " + averageSubcategories + " - Nombre moyen de mots par catégorie: " + averageWordsPerCategory;
}

