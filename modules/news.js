// News Logic
exports.getNewsPage = async function(req, res, next)
{
    var pageData = {
        pageTitle: "News",
        selectedTab: "news",
        faviconImagePath: "/images"
    };

    // Render the news page based on a template
    res.location('/news');
    res.render('news', pageData);
};
