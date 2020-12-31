// Credits Logic
exports.getCreditsPage = async function(req, res, next)
{
    var pageData = {
        pageTitle: "Credits",
        selectedTab: "credits",
        faviconImagePath: "/images"
    };

    // Render the credits page based on a template
    res.location('/credits');
    res.render('credits', pageData);
};
