const db = require('./db');
const Place = require('./Place');

const Restaurant = db.define('restaurant', {
  name: {
    type: db.Sequelize.STRING
  },
  cuisine: {
    type: db.Sequelize.STRING
  },
  price: {
    type: db.Sequelize.INTEGER,
    validate: { min: 1, max: 5 }
  }
},{
  defaultScope: {
    include: [ Place ]
  },
  getterMethods: {
    type: function(){
      return 'restaurant';
    }
  }
})

module.exports = Restaurant;
