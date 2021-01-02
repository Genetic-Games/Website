// About Logic
exports.getAboutPage = async function(req, res, next)
{
    var pageData = {
        pageTitle: "About",
        selectedTab: "about"
    };

    // Render the about page based on a template
    res.location('/about');
    res.render('about', pageData);
};
