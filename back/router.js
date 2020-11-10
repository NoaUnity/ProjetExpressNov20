//#region requires

const { handleErrorRequest } = require("./middleError");

//#endregion requires

//#region variables

const requestSupportedMethod = ["GET", "POST", "DELETE", "UPDATE", "OPTIONS"];
const routerPath = {
    get: ["/products"],
    post: ["/products"],
    delete: ["/products", new RegExp(/^\/products\?[a-zA-Z]+=[0-9]+/) ]
}

//#endregion variables




//#region MAIN

class Router {
    constructor(){
        this.routerPathGet = [];
        this.routerPathPost = [];
        this.routerPathDelete = [];
        this.routerPathUpdate = [];
    }

    isExistPath(res, req){
        const methodRequested = req.method.toLowerCase();

        const matcherUrl = routerPath[methodRequested].filter(url=> typeof url === "object");

        let deepVerifyUrl = false;
        let urlMatched;
    
        matcherUrl.forEach(e =>{
            urlMatched = req.url.match(e);
            if(urlMatched && urlMatched.length > 0){
                deepVerifyUrl = true;
            }
        })

        if(routerPath[methodRequested].indexOf(req.url) !== -1 || deepVerifyUrl){
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








