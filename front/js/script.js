$(document).ready(function(){

    //#region requires

    //#endregion requires

    //#region DOM

    //navbar
    navbarHeader = $("#navbarHeader");
    headerNavbarToggler = $("#headerNavbarToggler");

    //panier
    basketContent = $("#basketContent");
    basketAmount = $("#basketAmount");
    basketValid = $("#basketValid");
    basketSave = $("#basketSave");
    basketDelete = $("#basketDelete");

    //number of products
    nbrTomate = $("#nbrTomate");
    nbrOrange = $("#nbrOrange");
    nbrPomme = $("#nbrPomme");

    nbrEau = $("#nbrEau");
    nbrLait = $("#nbrLait");
    nbrCoca = $("#nbrCoca");

    nbrCereale = $("#nbrCereale");
    nbrChips = $("#nbrChips");
    nbrKinder = $("#nbrKinder");

    //price of products
    priTomate = $("#priTomate");
    priOrange = $("#priOrange");
    priPomme = $("#priPomme");

    priEau = $("#priEau");
    priLait = $("#priLait");
    priCoca = $("#priCoca");

    priCereale = $("#priCereale");
    priChips = $("#priChips");
    priKinder = $("#priKinder");

    //add buttons
    addToBasket = $(".add"); //index list : 0 tomate, 1. orange, 2 pomme, 3 eau, 4 lait, 5 coca, 6 cereale, 7 chips, 8 kinder 
    btn0 = $("#btn0");
    btn1 = $("#btn1");
    btn2 = $("#btn2");

    btn3 = $("#btn3");
    btn4 = $("#btn4");
    btn5 = $("#btn5");

    btn6 = $("#btn6");
    btn7 = $("#btn7");
    btn8 = $("#btn8");

    //paragraph in Basket
    par0 = $("#par0");
    par1 = $("#par1");
    par2 = $("#par2");

    par3 = $("#par3");
    par4 = $("#par4");
    par5 = $("#par5");

    par6 = $("#par6");
    par7 = $("#par7");
    par8 = $("#par8");
    
    //#endregion DOM  
    
    //#region variables

    let total = 0.00;

    const tomate = 0.40;
    const orange = 0.60;
    const pomme = 0.70;

    const eau = 1.00;
    const lait = 1.20;
    const coca = 1.50;

    const cereale = 2.50;
    const chips = 1.30;
    const kinder = 3.50;

    const listNbr = [nbrTomate, nbrOrange, nbrPomme, nbrEau, nbrLait, nbrCoca, nbrCereale, nbrChips, nbrKinder];
    const listPri = [priTomate, priOrange, priPomme, priEau, priLait, priCoca, priCereale, priChips, priKinder];
    const listVal = [tomate, orange, pomme, eau, lait, coca, cereale, chips, kinder];
    const listBtn = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];
    const listPar = [par0, par1, par2, par3, par4, par5, par6, par7, par8];
    const listNames = ["Tomates", "Oranges", "Pommes", "Volvic", "Lactel", "Coca-Cola", "Golden Grahams", "Lay's", "Kinder"];
    const priceToBasket = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let priceInsideBasket = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let numberInBasket = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    let products = [];

    //#endregion variables
    
    //#region functions
    
    function navbarShowHide(){
        if(navbarHeader.hasClass("show")){
            navbarHeader.toggleClass("show");
        }
        else{
            navbarHeader.toggleClass("collapse");
            navbarHeader.toggleClass("collapsing");

            navbarHeader.animate({height: "245px"},300,function(){
                navbarHeader.toggleClass("collapsing");
                navbarHeader.toggleClass("collapse");
                navbarHeader.toggleClass("show");
                navbarHeader.css("height", "");
            });
        }
    }

    function prettyPrice(ugly){
        pretty = "";
        temp = 0;
        if(ugly === 0){
            pretty = "0.00 €";
        }
        else {
            temp = ugly.toFixed(2);
            pretty = temp + " €";
        }
        return pretty;
    }

    function multiply(element, index){
        priceToBasket[index] = element.val() * listVal[index];
        listPri[index][0].innerHTML = prettyPrice(priceToBasket[index]);
    }

    function GoToBasketName(index){
        temp = "";
        temp = numberInBasket[index] + " x " + listNames[index] + " = " + priceInsideBasket[index];
        listPar[index][0].innerHTML = temp;
    }

    function GoToBasketPrice(index){
        total += priceToBasket[index];
        basketAmount[0].innerHTML = "Montant total : " + prettyPrice(total);
        priceInsideBasket[index] = prettyPrice(priceToBasket[index]);
        numberInBasket[index] += parseInt(listNbr[index].val(),10);
        console.log(numberInBasket[index]);
        priceToBasket[index] = 0;
        listPri[index][0].innerHTML = prettyPrice(0);
        listNbr[index][0].selectedIndex = 0;
    }

    function EmptyBasket(){
        priceInsideBasket = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        numberInBasket = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        listPar.forEach(e => {
            e[0].innerHTML = "";
        });
        total = 0;
        basketAmount[0].innerHTML = "Montant total : " + prettyPrice(0);
    }


    //#endregion functions
    
    //#region MAIN
    
    
    // $.ajax({
    //     url: "http://localhost:3000/products",
    //     method: "GET",
    //     dataType: "json"
    // })
    // .done(function(data){
    //     products = data;
    // })



    
    headerNavbarToggler.click(function(){
        navbarShowHide();
    })

    basketValid.click(function(){
        //priTomate[0].innerHTML = prettyPrice(5);
        //console.log(products[3].name);
    })

    basketSave.click(function(){
        //console.log(listNbr[3].val());

    })

    basketDelete.click(function(){
        //console.log(listNbr[3].val());
        EmptyBasket();
    })

    listNbr.forEach(function(e, index){
        e.change(function(){
            multiply(e, index);
        });
    })

    listBtn.forEach(function(e, index){
        e.click(function(){
            if(priceToBasket[index] !== 0){
                GoToBasketPrice(index);
                GoToBasketName(index);
            }
            else{
                alert("Vous n'avez pas choisi de quantité à ajouter");
            }
        })
    })
    
    //#endregion MAIN

})
