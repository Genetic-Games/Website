// About Logic
exports.getAboutPage = async function(req, res, next)
{
    // Render the about page based on a template
    res.location('/about');
    res.render('about');
};
