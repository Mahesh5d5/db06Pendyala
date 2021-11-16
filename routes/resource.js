var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var game_controller = require('../controllers/game');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// game ROUTES ///
// POST request for creating a game.
router.post('/resource/game', game_controller.game_create_post);
// DELETE request to delete game.
router.delete('/resource/game/:id', game_controller.game_delete);
// PUT request to update game.
router.put('/resource/game/:id', game_controller.game_update_put);
// GET request for one game.
router.get('/resource/game/:id', game_controller.game_detail);
// GET request for list of all game items.
router.get('/resource/game', game_controller.game_list);
module.exports = router;