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
// TODO - Create these modules
// var error = require(path.join(customModulePath, 'error.js'));
var home = require(path.join(customModulePath, 'home.js'));
var about = require(path.join(customModulePath, 'about.js'));
var news = require(path.join(customModulePath, 'news.js'));
var games = require(path.join(customModulePath, 'games.js'));

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

// Home Logic
app.get('/', home.getHomePage);
app.get('/home', home.getHomePage);

// General Purpose Page Logic
app.get('/about', about.getAboutPage);
app.get('/news', news.getNewsPage);
app.get('/games', games.getGamesPage);

// Error Handling
// TODO - Use these to get various error pages
// app.use('/access_denied', error.handleAccessNotAllowed);
// app.use(error.handlePageNotFound);
// app.use(error.handleUnexpectedError);

// Listening Port
console.log('Listening for requests on port 80');
app.listen(80);
