const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config - for express to know about handlebars
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') //made a path for the views folder
const partialsPath = path.join(__dirname, '../templates/partials');
//setup handlebars and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath) // we changed the views folder to templates
hbs.registerPartials(partialsPath);
//for static assets
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'FolioMinimal',
        name: 'Vijay Tadimeti',
        
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Vijay Tadimeti'
    })
})

app.get('/education', (req, res) => {
    res.render('education', {
        title: 'Education',
        name: 'Vijay Tadimeti'
    })
})

app.get('/experience', (req, res) => {
    res.render('experience', {
        title: 'Experience',
        name: 'Vijay Tadimeti'
    })
})

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects',
        name: 'Vijay Tadimeti'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        contactText: 'I can reached at :',
        title: 'Contact',
        name: 'Vijay Tadimeti'
    })
})


app.get('/help/*', (req, res) =>{
    res.render('404', {
        helperror: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found'
    });
});

app.listen(8000, () => {
    console.log('Server is up on port 8000.')
})