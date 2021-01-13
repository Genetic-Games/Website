// Log Handling Logic
exports.logMessage = function(message)
{
    var currentDateTime = new Date().toISOString();
    // Console logging to standard output writes to static file on the server
    console.log(`[ ${currentDateTime} ] - ${message}`)
}

exports.logErrorMessage = function(message)
{
    var currentDateTime = new Date().toISOString();
    // Console logging to standard error writes to static file on the server
    console.error(`[ ${currentDateTime} ] - ${message}`)
}
