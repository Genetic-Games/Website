// Credits Logic
exports.getCreditsPage = async function(req, res, next)
{
    var pageData = {
        selectedTab: "credits"
    };

    // Render the credits page based on a template
    res.location('/credits');
    res.render('credits', pageData);
};

exports.getContactPage = async function(req, res, next)
{
    var pageData = {
        selectedTab: "credits"
    };

    // Render the contact page based on a template
    res.location('/contact');
    res.render('contact', pageData);
}
