// Games Logic
exports.getGamesPage = async function(req, res, next)
{
    var pageData = {
        pageTitle: "Games",
        selectedTab: "games"
    };

    // Render the games page based on a template
    res.location('/games');
    res.render('games', pageData);
};

exports.getGamePageForEvolution = async function(req, res, next)
{
    var pageData = {
        pageTitle: "Evolution",
        selectedTab: "games"
    };

    // Render the Evolution game page based on a template
    res.location('/games/Evolution');
    res.render('games/evolution', pageData);
};
