$(document).ready(function(){

    //#region requires

    //#endregion requires

    //#region DOM

    afficher = $("#afficher");
    supprimer = $("#supprimer");

    //#endregion DOM

    //#region variables

    let index = 0;

    let tab = [];

    let mySelect = $("#mySelect");

    $.ajax({
        url: "http://localhost:3000/products",
        method: "GET",
        dataType: "json"
    })
    .done(function(data){
        tab = data;
    })

    //#endregion variables

    //#region functions


    function createList() {
        
        tab.forEach(function(products){
            var z = document.createElement("option");
            z.setAttribute("value", products.id);
            var t = document.createTextNode(products.name);
            z.appendChild(t);
            document.getElementById("mySelect").appendChild(z);

        })
    }

    
    
    //#endregion functions
    
    //#region MAIN
    
    afficher.click(function(){
        createList();
        mySelect = $("#mySelect");
        afficher.hide();
        supprimer.show();
    })


    $("form").submit(function(e){


        index = mySelect.val();

        $.ajax({
            method: "DELETE",
            url: "http://localhost:3000/products?idProduct=" + index,
            dataType: "json",

            error: function(request, error){
                console.log(error)
            }
        })
        
        console.log("bonjour");
        

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
