$(function() {
  /**
   * Insérer du contenu
   */
  // Ajout d'une espace et de trois astérisques à la suite de chaque titre <h2>
  // $("h2").append(" ***");
  // Ajout de trois astérisques et d'une espace avant chaque titre <h2>
  // $("h2").prepend("*** ");
  // Ajout d'une ligne de séparation horizontale avant le titre <h2> #trois
  // $("#trois").before("<hr>");
  // Insertion de deux sauts de ligne après chaque balise <hr>
  // $("hr").after("<br><br>");

  /**
   * Remplacer des éléments
   */
  // Remplace les hr par des br
  // $("hr").replaceWith("<br>");
  // Remplace tous les titres h2 par h3
  // $("h2").each(function() {
  //   $(this).replaceWith("<h3>" + $(this).text() + "</h3>");
  // });
  
  /**
   * Insérer des éléments
   */
  // Ajout d'un élément de liste à puces après le deuxième élément
  // $("<li>Deuxième élement bis</li>").insertAfter($("li:nth-child(2)"));
  // Ajout d'une balise <hr> avant chaque titre <h2>
  // $("<hr>").insertBefore("h2");

  /**
   * Déplacer du contenu
   */
  // Déplacement du titre #deux après le titre #un
  // #deux = l'élément à déplacer ; #un endroit (avant/après) où mettre l'élément à déplacer
  // $("#un").after($("#deux"));
  
  /**
   * Dupliquer des élements
   */
  // Duplique le paragraphe #deux puis insére avant le paragraphe #un
  // $("#deux + p").clone().insertBefore($("#un + p"));
  // Duplique la liste à puce après le titre #un
  // $("ul").clone().insertAfter($("#un"));
  // Création d'un sommaire
  // $("h2:first").before("<h1>Sommaire</h1>");
  // $("h2").clone().insertAfter($("h1"));
  
  /**
   * Entourer des éléments
   */
  // Entourer les éléments li de la liste à puces par une balise <i>
  // $("li").wrap("<i></i>");
  
  /**
   * Supprimer des éléments
   */
  // Supprime tous les titres h2
  // $("h2").remove();
  // Supprime la 3ème puce de la liste
  // $("li:nth-child(3)").remove();
  // Supprime tous les titres h2 contenant le mot "suite"
  // $("h2").remove(":contains('suite')");
  
});
