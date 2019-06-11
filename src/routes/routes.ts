'use strict';

module.exports = function(app: any) {
  var jogo = require('../controller/JogoController.ts');

  app.route('api/findGames')
    .get(jogo.list_all_games);
};
