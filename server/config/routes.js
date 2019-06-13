var pokemon = require('../controllers/controllers');

module.exports = function(app){
    app.get('/', function (req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        pokemon.index(req, res) ;
    })

    // Below is example of post method
    // app.post('/btquote', function (req, res) {
    //     pokemon.btquote(req, res);
    // })
}