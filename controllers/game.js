var Game = require('../models/game');
// List of all Game
exports.game_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Game list');
};
// for a specific Game.
// for a specific Game.
exports.game_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Game.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle game create on POST.
exports.game_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Game();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"designer":"regular", "quantity":13, "size":43.56}
    document.designer = req.body.designer;
    document.price= req.body.quantity;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Game delete on DELETE.
exports.game_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Game.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Game update form on PUT.
exports.game_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Game.findById( req.params.id)
 // Do updates of properties
 if(req.body.designer)
 toUpdate.designer = req.body.designer;
 if(req.body.quantity) toUpdate.price= req.body.quantity;
 if(req.body.size) toUpdate.size = req.body.size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all Game
exports.game_list = async function (req, res) {
    try {
        theGame = await Game.find();
        res.send(theGame);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.game_view_all_Page = async function (req, res) {
    try {
        theGame = await Game.find();
        res.render('game', {
            title: 'Game Search Results',
            results: theGame
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.game_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Game.findById( req.query.id)
    res.render('gamedetail',
   { title: 'game Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a game.
// No body, no in path parameter, no query.
// Does not need to be async
exports.game_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('gamecreate', { title: 'game Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a game.
// query provides the id
exports.game_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Game.findById(req.query.id)
    res.render('gameupdate', { title: 'Game Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.game_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Game.findById(req.query.id)
    res.render('gamedelete', { title: 'Game Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };