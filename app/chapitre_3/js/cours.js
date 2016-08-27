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
});
