$(function() {
    /**
     * Getters et setters
     */
    // Boucle sur tous les éléments de type a
    // et affiche, pour chaque la valeur de l"attribut href
    // $("a").each(function() {
    // Affiche, pour chaque la valeur de l"attribut href
    // console.log($(this).attr("href"));
    // });

    // Ajoute à chaque élément de type a, les attributs class et id avec les valeurs passées
    // $("a").attr({
    //   class: "maClasse",
    //   id: "monId"
    // });

    // Ajoute à chaque élément de type a, un attribut target dont la valeur correspond la valeur retournée par la fonction passée en paramètre
    // $("a").attr("target", function() {
    //   if(this.host === this.location) {
    //     return "_self";
    //   } else {
    //     return "_blank";
    //   }
    // });

    /**
     * Accéder aux attributs HTML et aux propriétés CSS
     */
    // Supprime l"attribut href de toutes les balises a
    //  $("a").removeAttr("href");

    //  Affiche/Change la taille de chaque élément a
    //  $("a").each(function() {
    //    console.log($(this).css("font-size"));
    //    $(this).css("font-size", "24px");
    //  });

    /**
     * Travailler avec l"attribut class
     */
    // Rajout des classes vert et grand à l"id julia
    //  $("#julia").addClass("vert grand");

    // Affichage de l"id eric en rouge
    // $("#eric").removeClass("vert").addClass("rouge");

    // Affichage de l"id paul en petits caractères rouge
    // $("#paul").removeClass("vert grand").addClass("rouge");
    // $("#paul").toggleClass("vert grand rouge");

    // Teste la classe rouge de l"id paul
    // console.log($("#paul").hasClass("rouge"));

    /**
     * Travailler avec les formulaires
     */
    // Lit le nom de l"utilisateur
    // console.log($("#nom").val());
    // Lit le mot de passe
    // console.log($("#pass").val());
    // console.log($("input:password").val());
    // Lit l"état du bouton radio H. Renvoie true si le bouton est sélectionné, sinon false ??????????????
    // console.log($(":radio#H:checked").val());
    // Lit l"élément sélectionné dans la liste déroulante
    // console.log($("#fonction").val());
    // Ecrit le nom Michel dans la zone nom
    // $("#nom").val("Michel");
    // Ecrit abcde dans la zone mot de passe
    // $("#pass").val("abcde");
    // $("input:password").val("abcde");
    // Sélectionne le bouton H
    // $("input:radio").val(["H"]);
    // console.log("blabla :: " + $(":radio#H:checked").val());
    // Sélectionne Retraité dans la liste déroulante
    // $("#fonction").val("retraite");

    /**
     * Travailler avec les valeurs stockées dans des éléments
     */
    //  console.log($("a").text());
    //  $("a").text(function(index, text) {
    //    console.log("Paragraphe " + (index+1) + " :: " + text);
    //  });

     /**
      * Position et taille des éléments
      */
     // offset().left et offset().top pour connaître la position absolue d"un élément
     // position().left et position().top pour connaître la position d"un élément dans son parent
    //  var posParent = $("#parent").offset();
    //  var posEnfant = $("#enfant").offset();
    //  var posParent = $("#parent").position();
    //  var posEnfant = $("#enfant").position();
    //  $("span#res").text("Parent : x=" + posParent.left + ", y=" + posParent.top + " Enfant : x= " + posEnfant.left + ", y=" + posEnfant.top);
    //  posEnfant.left = 100;
    //  posEnfant.top = 100;
    //  $("#enfant").offset(posEnfant);
    // var dimensions = "width=" + $("#maDiv").width() + ", innerWidth=" + $("#maDiv").innerWidth() + ", outerWidth=" + $("#maDiv").outerWidth() + ", outerWidth(true)=" + $("#maDiv").outerWidth(true);
    // dimensions = dimensions + ", height=" + $("#maDiv").height() + ", innerHeight=" + $("#maDiv").innerHeight() + ", outerHeight=" + $("#maDiv").outerHeight() + ", outerHeight(true)=" + $("#maDiv").outerHeight(true);
    // $("#res").text(dimensions);

    /**
     * Associer des données aux balises
     */
    // $("#maDiv > p").data("mesValeurs", {
    //   premier: "bonjour",
    //   deuxieme: 12,
    //   troisieme: "http://www.siteduzero.com"
    // });
    // $("#sp1").text($("#maDiv > p").data("mesValeurs").premier);
    // $("#sp2").text($("#maDiv > p").data("mesValeurs").deuxieme);
    // $("#sp3").text($("#maDiv > p").data("mesValeurs").troisieme);
});
