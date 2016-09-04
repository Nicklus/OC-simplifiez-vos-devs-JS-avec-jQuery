$(function() {

    // Dissimule les formulaires
    $("form").hide();

    $("#btnLabel").on("click", function() {
        $("form").hide();
        $("form#formLabel").show();
        $("#submitFormLabel").click(function(event) {
          event.preventDefault();
          $("#gauche").append("<span>" + $("[name='valLabel']").val() + "</span>");
        });
    });

    $("#btnZoneTexte").on("click", function() {
        $("form").hide();
        $("form#formZoneTexte").show();
        $("#submitFormZoneTexte").click(function(event) {
          event.preventDefault();
          $("#gauche").append("<input id=\"" + $("[name='valZoneTexte']").val() + "\" type=\"text\"><br>");
        });
    });

    $("#btnBouton").on("click", function() {
        $("form").hide();
        $("form#formBouton").show();
        $("#submitFormBouton").click(function(event) {
          event.preventDefault();
          $("#gauche").append("<button>" + $("[name='valBouton']").val() + "</button>");
        });
    });

});
