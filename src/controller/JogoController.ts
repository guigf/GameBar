// app.get('api/findGames', (req: any, res:any) => {
//     console.log(req);
//     return res.json({test: "test"});
// })

import { games } from "../mocks/games.json";

exports.list_all_games = function(req: any, res: any) {
    res.json(games)
};