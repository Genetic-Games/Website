// Contact Logic
exports.getContactPage = async function(req, res, next)
{
    // Render the contact page based on a template
    res.location('/contact');
    res.render('contact');
}
