// Home Logic
exports.getHomePage = async function(req, res, next)
{
    var pageData = {
        pageTitle: "Home",
        selectedTab: "home",
        faviconImagePath: "/images"
    };

    // Render the home page based on a template
    res.location('/home');
    res.render('home', pageData);
};
