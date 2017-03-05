const db = require('./db');

const Place = require('./Place')
const Hotel = require('./Hotel');
const Restaurant = require('./Restaurant');
const Activity = require('./Activity');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = db;

// const sync = () => {
//   return db.sync();
// }
// module.exports = {
//   sync,
//   models: {
//     Place,
//     Hotel,
//     Restaurant,
//     Activity
//   }
// }




