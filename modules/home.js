// Home Logic
exports.getHomePage = async function(req, res, next)
{
    // Render the home page based on a template
    res.location('/home');
    res.render('home');
};
