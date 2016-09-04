app.set('view engine', 'pug')
app.set('views', './views')
app.locals.pretty = true // indent produces HTML for clarity


app.get('/about', function (req, res, next) {
    // res.render(<template file/view name>, <data object>)
    const aboutData = {
        author: 'Gleb'
    }
    res.render('about', aboutData)
})
