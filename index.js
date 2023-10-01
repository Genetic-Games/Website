/*
 * Main Node Application and Event Handler for Genetic Games Website
 */

// Start Server
console.log('Starting application');

// Dependencies
var express = require('express'); // Express web server framework
var path = require('path'); // URI and local file paths
var cors = require('cors'); // Cross-origin resource sharing
var vash = require('vash'); // Templating and building HTML files to render
var helmet = require('helmet'); // HTTP header security

console.log('Imported major dependencies');

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

log.logMessage('Imported custom modules');

// Setup Page Handling
const staticFilesPath = path.join(__dirname, 'public');
const viewsFilesPath = path.join(__dirname, 'views');

// Setup Application
const helmetConfiguration = {
    contentSecurityPolicy: {
        directives: {
            "worker-src": [
                "blob:",
                "'self'",
                "'unsafe-inline'"
            ],
            "script-src": [
                "'self'",
                "'unsafe-eval'",
                "'unsafe-inline'"
            ],
            "script-src-elem": [
                "blob:",
                "'self'",
                "'unsafe-inline'"
            ]
        },
        useDefaults: true
    }
};

const app = express();
app.use(express.static(staticFilesPath))
  .use(cors())
  .use(helmet(helmetConfiguration))
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
