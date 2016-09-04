$(function() {

    /**
     * La souris
     */
    // Clics et positions de la souris
    // Dimensions de la fenêtre => l'image ne sort pas de la fenêtre
    // var largeur = ($(window).width()) - 200;
    // var hauteur = ($(window).height()) - 133;

    // Affichage de la première image en (100, 100)
    // var p = $("#target").offset();
    // p.left = 100;
    // p.top = 100;
    // $("#target").offset(p);

    // Gestion du click et déplacement de l'image
    // $("#target").click(function() {
    //     var x = Math.floor(Math.random() * largeur);
    //     var y = Math.floor(Math.random() * hauteur);
    //     var p = $("#target").offset();
    //     p.left = x;
    //     p.top = y;
    //     $("#target").offset(p);
    // });

    // La méthode scroll
    // $("div").scroll(function() {
    //   console.log("Scroll dans la div");
    // });

    // $(window).scroll(function() {
    //   console.log("Scroll dans la fenêtre Window");
    // });

    // which et type
    // $("#target").mousedown(function(event) {
    //   $("#rapport").append("<h1>Evénements :: " + event.which + " ## " + event.type);
    // });

    /**
     * Le clavier
     */
    // $("#cible")
    //     .keydown(function(event) {
    //         $("#lumiere").css("background-color", "green");
    //         $("#uneLettre").html("Caractère saisi :: " + String.fromCharCode(event.which));
    //     })
    //     .keyup(function() {
    //         $("#lumiere").css("background-color", "white");
    //     });
        
    /**
     * Les éléments
     */
    // focus() et blur()
    $(".f").focus(function() {
      $("#resultat").text($(this).attr("id"));
      console.log($(this).css("background-color", "red"));
    });
    $(".f").blur(function() {
      $("#resultat2").text($(this).attr("id"));
      console.log($(this).css("background-color", "white"));
    });
});
