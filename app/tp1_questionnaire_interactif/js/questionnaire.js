$(function() {

  // Dissimule les réponses aux questions
  $(".reponse").hide();

  /**
   * Mise en forme
   */
   $(".question").css({
    "border": "4px groove black",
    "margin": "20px",
    "background-color": "#9EEAE0",
    "width": "900px",
    "height": "250px"
   });
   $(".texte").css({
    "float": "left",
    "width": "90%"
  });
   $(".question > img").css({
    "float": "right",
    "margin-top": "80px"
   });

   /**
    * Evénements
    */
   $("a").hover(function() {
    $(".reponse").show();
     // Traitement réponse 1
     if ($("#r1:checked").val()) {
      $("#img1").attr("src", "bon.png");
      $("#reponse1").css("color", "green");
     } else {
      $("#img1").attr("src", "mauvais.png");
      $("#reponse1").css("color", "red");
     }

     // Traitement réponse 2
     if ($("#r4:checked").val()) {
      $("#img2").attr("src", "bon.png");
      $("#reponse2").css("color", "green");
     } else {
      $("#img2").attr("src", "mauvais.png");
      $("#reponse2").css("color", "red");
     }

     // Traitement réponse 3
     if ($("#r8:checked").val()) {
      $("#img3").attr("src", "bon.png");
      $("#reponse3").css("color", "green");
     } else {
      $("#img3").attr("src", "mauvais.png");
      $("#reponse3").css("color", "red");
     }
   }, function() {
     $(".reponse").hide();
     $("#img1, #img2, #img3").attr("src", "question.png");
   });
});
