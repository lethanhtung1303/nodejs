const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db');

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// Override method
app.use(methodOverride('_method'));

// HTTP log
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

// Set view engine
app.set('view engine', 'hbs');

// Static file & SCSS
app.use(express.static(path.join(__dirname, '/public')));
app.use('*/css', express.static(path.join(__dirname, '/public/css')));
app.set('views', path.join(__dirname, '/resources/views'));

// Connect database
db.connect();

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
