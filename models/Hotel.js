const db = require('./db');
const Place = require('./Place');

const Hotel = db.define('hotel', {
  name: {
    type: db.Sequelize.STRING
  },
  num_stars: {
    type: db.Sequelize.FLOAT,
    validate: { min: 1, max: 5 }
  },
  amenities: {
    type: db.Sequelize.STRING
  }
},{
  defaultScope:{
    include: [ Place ]
  },
  getterMethods: {
    type: function(){
      return 'hotel';
    }
  }
})

module.exports = Hotel;
