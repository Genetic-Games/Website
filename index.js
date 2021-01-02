/*
 * Main Node Application and Event Handler for Genetic Games Website
 */

console.log('Starting application');

// Dependencies
var express = require('express'); // Express web server framework
var path = require('path'); // URI and local file paths
var cors = require('cors'); // Cross-origin resource sharing
var vash = require('vash'); // Templating and building HTML files to render

// Custom Modules
const customModulePath = path.join(__dirname, 'modules');
var error = require(path.join(customModulePath, 'error.js'));
var home = require(path.join(customModulePath, 'home.js'));
var about = require(path.join(customModulePath, 'about.js'));
var news = require(path.join(customModulePath, 'news.js'));
var games = require(path.join(customModulePath, 'games.js'));
var credits = require(path.join(customModulePath, 'credits.js'));
var contact = require(path.join(customModulePath, 'contact.js'));

// Setup Page Handling
const staticFilesPath = path.join(__dirname, 'public');
const viewsFilesPath = path.join(__dirname, 'views');
const applicationPath = process.env.APPLICATION_PATH || '';

var app = express();
app.use(express.static(staticFilesPath))
.use(cors())
.use(express.urlencoded({ extended: true }));

// Setup Templating Views
app.set('view engine', 'vash')
 .set('views', viewsFilesPath);

// Home Logic
app.get(applicationPath + '/', home.getHomePage);
app.get(applicationPath + '/home', home.getHomePage);

// General Purpose Page Logic
app.get(applicationPath + '/about', about.getAboutPage);
app.get(applicationPath + '/news', news.getNewsPage);
app.get(applicationPath + '/games', games.getGamesPage);
app.get(applicationPath + '/credits', credits.getCreditsPage);
app.get(applicationPath + '/contact', contact.getContactPage);

// Games Page Logic
app.get(applicationPath + '/games/Evolution', games.getGamePageForEvolution);

// Error Handling
app.use(applicationPath + '/access_denied', error.handleAccessNotAllowed);
app.use(applicationPath + '/error', error.handleExpectedError);
app.use(error.handlePageNotFound);
app.use(error.handleUnexpectedError);

// Listening Port
console.log('Listening for requests on port 80');
app.listen(80);
