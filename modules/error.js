// Error Handling Logic
exports.handlePageNotFound = function(req, res)
{
    var pageData = {
        pageTitle: "Not Found"
    };

    res.location('/not_found');
    res.status(404);
    res.render('not_found', pageData);
}

exports.handleAccessNotAllowed = function(req, res)
{
    var pageData = {
        pageTitle: "Not Allowed"
    };

    res.location('/access_denied');
    res.status(403);
    res.render('error', pageData);
}

exports.handleExpectedError = function(req, res)
{
    var pageData = {
        pageTitle: "Error"
    };

    res.location('/error');
    res.status(500);
    res.render('error', pageData);
}

exports.handleUnexpectedError = function(err, req, res, next)
{
    var pageData = {
        pageTitle: "Error"
    };

    // TODO - Eventually, log errors to a file on the server to have an error log
    res.location('/error')
    res.status(500);
    res.render('error', pageData);
    next(err);
}
