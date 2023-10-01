// Dependencies
var path = require('path'); // URI and local file paths

// Security Header Logic
exports.removeInsecureHeaders = function(req, res, next)
{
    res.removeHeader('X-Powered-By');
    next();
}

exports.addSecurityHeaders = function(req, res, next)
{
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
}
