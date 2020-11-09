//#region requires

const { handleErrorRequest } = require("./middleError");

//#endregion requires

//#region variables

const requestSupportedMethod = ["GET", "POST", "DELETE", "UPDATE"];
const routerPathGet = ["/products"];

//#endregion variables

//#region MAIN

class Router {
    constructor(){
        this.routerPathGet = [];
        this.routerPathPost = [];
        this.routerPathDelete = [];
        this.routerPathUpdate = [];
    }

    isExistGetPath(res, url){
        if(routerPathGet.indexOf(url) !== -1){
            return true;
        }
        else{
            handleErrorRequest(res, 404, `${url} doesn't exist in your GET router`);
        }
    }

    requestSupported(res, method){
        if(requestSupportedMethod.indexOf(method) !== -1){
            return true;
        }
        handleErrorRequest(res, 501, `${method} isn't yet supported by the server`);
    }
}

module.exports = new Router();

//#endregion MAIN








