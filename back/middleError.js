//#region requires

const http = require("http");

//#endregion requires

//#region functions

function MiddlewareError(){}

function handleErrorRequest(res, statusCode, message){
    res.statusCode = statusCode;
    res.end(JSON.stringify({error: http.STATUS_CODES[statusCode], message: message}));
}

//#endregion functions

//#region MAIN

MiddlewareError.prototype.handleErrorRequest = handleErrorRequest;

module.exports = new MiddlewareError();

//#endregion MAIN







