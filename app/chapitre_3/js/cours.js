$(function() {
  /**
   * Sélecteurs d'attributs
   */
  // Image dont l'attribut border contient partiellement ou totalement la valeur « 1 ».
  // $("[border*='1']").css("border-color", "red");

  // Image dont l'attribut title contient le mot « foto » délimité par une espace.
  // $("[title~='foto']").css("border-color", "red");

  // Image dont l'attribut src se termine par « 0.jpg ».
  // $("[src$='0.jpg']").css("border-color", "red");

  // Image qui ne possède pas un attribut border égal à « 4 ».
  // $("[border!='4']").css("border-color", "red");

  // Image dont l'attribut src commence par « tn_1 ».
  // $("[src^='tn_1']").css("border-color", "red");

  /**
   * Sélecteurs hiérarchiques
   */
  // Éléments ul directement descendants d'éléments li
  // $("li > ul").css("color", "red");

  // Éléments li directement précédés d'un élément li
  // $("li + li").css("color", "red");

  // Premier élément li enfant
  // $("li:first-child").css("color", "red");

  // Premier élément li
  // $("li:first").css("color", "red");

  // Dernier élément li
  // $("li:last").css("color", "red");

  // Dernier élément li enfant
  // $("li:last-child").css("color", "red");

  // Éléments li enfants uniques de leur parent
  // $("li:only-child").css("color", "red");

  // Deuxième enfant li
  // $("li:nth-child(2)").css("color", "red");

  /**
   * Pseudo-sélecteurs d'éléments sélectionnés
   */
  // Éléments p pairs
  // $("#pseudoSel > p:even").css("color", "red");

  // Éléments p impairs
  // $("#pseudoSel > p:odd").css("color", "red");

  // Éléments p après le deuxième
  // $("#pseudoSel > p:gt(1)").css("color", "red");

  // Élément p d'index 3
  // $("#pseudoSel > p:eq(3)").css("color", "red");

  // Éléments p avant le quatrième
  // $("#pseudoSel > p:lt(3)").css("color", "red");

  /**
   * Sélecteurs d'éléments particuliers
   */
  // Sélection de tous les titres
  // $(":header").css("color", "red");

  // Affichage des éléments cachés
  // On cache d'abord la div
  // $("#partSel > div").hide();
  // $("#partSel > div:hidden").show();

  // Dissimulation de tous les titres sauf le titre <h1>
  // $(":header:not(h1)").hide();

  /**
   * Pseudo-sélecteurs spécifiques aux formulaires
   */
  // Coloration de tous les champs de saisie
  // $(":input").css("background-color", "red");

  // Coloration d'un champ de saisie particulier
  // $(":password").css("background-color", "red");

  // Redimensionnement d'un champ de type image
  // $(":image").css("width", "100px");

  // Focus au premier champ de saisie et coloration en jaune
  // document.forms[0].nom.focus(); // Donne le focus au premier champ de saisie name="nom"
  // $(":focus").css("background-color", "red"); // Colore le champ du focus en rouge

  /**
   * Sélecteurs utilisés dans les tableaux
   */
  // Coloration de la première cellule
  // $("td:first").css("background-color", "red");

  // Coloration de la dernière ligne
  // $("tr:last").css("background-color", "red");

  // Coloration des cellules vides
  // $("td:empty").css("background-color", "red");

  // Coloration des lignes paires
  // $("tr:even").css("background-color", "red");

  // Coloration des cellules paires
  // $("td:even").css("background-color", "red");

  // Coloration des lignes d'index supérieur à 2
  // $("tr:gt(2)").css("background-color", "red");

  // Coloration des lignes d'index supérieur à 1, et, dans le sous-ensemble correspondant, des lignes d'index inférieur à 5
  // $("tr:gt(0):lt(4)").css("background-color", "red");

  // Coloration des cellules d'index supérieur à 5, et, dans le sous-ensemble correspondant, des cellules d'index inférieur à 11
  // $("td:gt(5):lt(11)").css("background-color", "red");

  // Coloration de toutes les lignes à l'exception de la dernière
  // $("tr:not(tr:last)").css("background-color", "red");

  /**
   * Parcourir les éléments sélectionnés
   */
  // Parcours des images et changement de chemin
  // $("img").each(function() {
  //   var res = this.src.split("/");
  //   var img = res[res.length - 1];
  //   this.src = "images/" + img;
  // });

  // divs est un tableau contenant l'ensemble des div du document HTML
  // var divs = $("div").get();
  // Affichage du contenu de la 1re div
  // console.log(divs[0].innerHTML);
});
