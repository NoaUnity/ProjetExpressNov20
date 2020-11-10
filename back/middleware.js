//#region requires

const product = require("./products");
const { isExistPath } = require("./router");
const url = require('url');
const querystring = require("querystring");

//#endregion requires

let flagDelete = true;

//#region functions

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }


function Middleware(){}

function handleGetRequest(req, res){
    res.setHeader("Content-Type", "application/json; charset= UTF-8");
    res.statusCode = 200;
    if(isExistPath(res, req)){
        if(req.url === "/products"){

            res.end(JSON.stringify(product.getProduct));
        }
    }
    
}

function handlePostRequest(req, res){
    res.statusCode = 201;
    if(isExistPath(res, req)){

        req.on("data", function(data){

            temp = JSON.parse(data.toString());
            temp.quantity = parseInt(temp.quantity);
            temp.price = parseFloat(temp.price);
            product.saveProduct(temp);
            
        })
        req.on("end", function(){
            
            
            console.log("post effectué");
            res.end(JSON.stringify({message: "post effectué"}));
        })

        
    }
}

async function handleDeleteRequest(req, res){
    if(flagDelete === true){
        flagDelete = false;
        res.statusCode = 204;
    
        if(isExistPath(res, req)){
            let queryUrl = url.parse(req.url).query;
            queryUrl = querystring.parse(queryUrl);
    
            product.deleteProduct(parseInt(queryUrl.idProduct));
    
            console.log("delet effectué");
                res.end(JSON.stringify({message: "delet effectué"}));
        }

        const result = await resolveAfter2Seconds();
        flagDelete = true;
    }


}

function handleUpdateRequest(req, res){

}

//#endregion functions

//#region MAIN

Middleware.prototype.handleGetRequest = handleGetRequest;
Middleware.prototype.handlePostRequest = handlePostRequest;
Middleware.prototype.handleDeleteRequest = handleDeleteRequest;
Middleware.prototype.handleUpdateRequest = handleUpdateRequest;

module.exports = new Middleware();

//#endregion MAIN







