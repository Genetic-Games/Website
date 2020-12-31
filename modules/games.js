// Games Logic
exports.getGamesPage = async function(req, res, next)
{
    var pageData = {
        selectedTab: "games"
    };

    // Render the games page based on a template
    res.location('/games');
    res.render('games', pageData);
};
