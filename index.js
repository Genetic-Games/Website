/*
 * Main Node Application and Event Handler for Genetic Games Website
 */

// Start Server
// Logging the same way as log.js, just without setting anything up in case something is wrong before that point
var currentDateTime = new Date().toISOString();
console.log(`[ ${currentDateTime} ] - Starting application`);

// Dependencies
var express = require('express'); // Express web server framework
var path = require('path'); // URI and local file paths
var cors = require('cors'); // Cross-origin resource sharing
var vash = require('vash'); // Templating and building HTML files to render

// Custom Modules
const customModulePath = path.join(__dirname, 'modules');
var error = require(path.join(customModulePath, 'error.js'));
var log = require(path.join(customModulePath, 'log.js'));
var home = require(path.join(customModulePath, 'home.js'));
var about = require(path.join(customModulePath, 'about.js'));
var news = require(path.join(customModulePath, 'news.js'));
var games = require(path.join(customModulePath, 'games.js'));
var credits = require(path.join(customModulePath, 'credits.js'));
var contact = require(path.join(customModulePath, 'contact.js'));
var security = require(path.join(customModulePath, 'security.js'));

// Setup Page Handling
const staticFilesPath = path.join(__dirname, 'public');
const viewsFilesPath = path.join(__dirname, 'views');

var app = express();
app.use(express.static(staticFilesPath))
  .use(cors())
  .use(express.urlencoded({ extended: true }));

// Setup Templating Views
app.set('view engine', 'vash')
  .set('views', viewsFilesPath);

// Set / Unset HTTP Response Headers
app.use(security.removeInsecureHeaders);
app.use(security.addSecurityHeaders);

// Home Logic
app.get('/', home.getHomePage);
app.get('/home', home.getHomePage);

// General Purpose Page Logic
app.get('/about', about.getAboutPage);
app.get('/news', news.getNewsPage);
app.get('/games', games.getGamesPage);
app.get('/credits', credits.getCreditsPage);
app.get('/contact', contact.getContactPage);

// Games Page Logic
app.get('/games/Evolution', games.getGamePageForEvolution);

// Error Handling
app.use('/access_denied', error.handleAccessNotAllowed);
app.use('/error', error.handleExpectedError);
app.use(error.handlePageNotFound);
app.use(error.handleUnexpectedError);

// Listening Port
log.logMessage('Listening for requests on port 80');
app.listen(80);
