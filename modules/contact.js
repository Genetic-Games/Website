// Contact Logic
exports.getContactPage = async function(req, res, next)
{
    var pageData = {
        pageTitle: "Contact",
        faviconImagePath: "/images"
    };

    // Render the contact page based on a template
    res.location('/contact');
    res.render('contact', pageData);
}
