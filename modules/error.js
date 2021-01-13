// Dependencies
var path = require('path'); // URI and local file paths

// Custom Modules
const customModulePath = __dirname;
var log = require(path.join(customModulePath, 'log.js'));

// Error Handling Logic
exports.handlePageNotFound = function(req, res)
{
    var pageData = {
        pageTitle: "Not Found"
    };

    log.logMessage(`HTTP 404 Response - Request to ${req.method} ${req.originalUrl}`);
    res.location('/not_found');
    res.status(404);
    res.render('not_found', pageData);
}

exports.handleAccessNotAllowed = function(req, res)
{
    var pageData = {
        pageTitle: "Not Allowed"
    };

    log.logMessage(`HTTP 403 Response - Request to ${req.method} ${req.originalUrl}`);
    res.location('/access_denied');
    res.status(403);
    res.render('error', pageData);
}

exports.handleExpectedError = function(req, res)
{
    var pageData = {
        pageTitle: "Error"
    };

    log.logMessage(`HTTP 500 Response - Expected Error - Request to ${req.method} ${req.originalUrl}`);
    res.location('/error');
    res.status(500);
    res.render('error', pageData);
}

exports.handleUnexpectedError = function(err, req, res, next)
{
    var pageData = {
        pageTitle: "Error"
    };

    log.logErrorMessage(`HTTP 500 Response - Unexpected Error - Request to ${req.method} ${req.originalUrl}`);
    res.location('/error')
    res.status(500);
    res.render('error', pageData);
    next(err);
}
