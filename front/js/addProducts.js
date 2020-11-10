$(document).ready(function(){

    //#region requires

    //#endregion requires

    //#region DOM

    nameP = $("#name");
    quantityP = $("#quantity");
    imgP = $("#img");
    priceP = $("#price");

    validerP = $("#valider");
    annulerP = $("#annuler");

    test = $("#test");

    //#endregion DOM

    //#region variables

    //#endregion variables

    //#region functions

    //#endregion functions

    //#region MAIN

    $("form").submit(function(e){
        if(nameP.val().length > 0 && quantityP.val() > 0 && imgP.val().length > 0 && priceP.val() > 0){

            $.ajax({
                url: "http://localhost:3000/products",
                method: "POST",
                dataType: "json",
                data: JSON.stringify({name: nameP.val(), quantity: quantityP.val(), img: imgP.val(),price: priceP.val()})
            })
            .done(function(){
                alert("le produit a bien été ajouté !");
                // nameP.val() = "";
                // quantityP.val() = 0;
                // imgP.val() = "";
                // priceP.val() = 0;
            })
            
        }
        else{
            alert("erreur saisie");
        }

        e.preventDefault();
    })

    $("#v").click(function(){
        $.ajax({
            url: "http://localhost:3000/products",
            method: "GET",
            dataType: "json"
        })
        .done(function(data){
            console.log(data);
        })
    })

    


    //#endregion MAIN

})
