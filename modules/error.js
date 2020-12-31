// Error Handling Logic
exports.handlePageNotFound = function(req, res)
{
    var pageData = {
        pageTitle: "Not Found",
        faviconImagePath: "/images"
    };

    res.location('/not_found');
    res.status(404);
    res.render('not_found', pageData);
}

exports.handleAccessNotAllowed = function(req, res)
{
    var pageData = {
        pageTitle: "Not Allowed",
        faviconImagePath: "/images"
    };

    res.location('/access_denied');
    res.status(403);
    res.render('error', pageData);
}

exports.handleExpectedError = function(req, res)
{
    var pageData = {
        pageTitle: "Error",
        faviconImagePath: "/images"
    };

    res.location('/error');
    res.status(500);
    res.render('error', pageData);
}

exports.handleUnexpectedError = function(err, req, res, next)
{
    var pageData = {
        pageTitle: "Error",
        faviconImagePath: "/images"
    };

    // TODO - Eventually, log errors to a file on the server to have an error log
    res.location('/error')
    res.status(500);
    res.render('error', pageData);
    next(err);
}
