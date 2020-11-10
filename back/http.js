//#region requires

const http = require("http");
const { handleGetRequest } = require("./middleware");
const { handlePostRequest } = require("./middleware");
const { handleDeleteRequest } = require("./middleware");
const {requestSupported} = require("./router");

//#endregion requires

//#region MAIN

const server = http.createServer(function(request,response){

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");

    let method = request.headers["access-control-request-method"];

    if(requestSupported(response, request.method)){
        
        //(if ternaire) (si ? alors : sinon)
        request.method = request.method && request.method === "OPTIONS" ? method : request.method;

        if(request.method === "GET"){
            handleGetRequest(request, response);
        }
        else if(request.method === "POST"){
            handlePostRequest(request,response);
        }
        else if(request.method === "DELETE"){
            handleDeleteRequest(request,response);
        }
        else if(request.method === "UPDATE"){
            
        }
    }
    
})

server.listen(3000, function(){
    console.log("server started...");
})

//#endregion MAIN


