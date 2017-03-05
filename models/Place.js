const db = require('./db');

const Place = db.define('place', {
  address: {
    type: db.Sequelize.STRING
  },
  city: {
    type: db.Sequelize.STRING
  },
  state: {
    type: db.Sequelize.STRING
  },
  phone: {
    type: db.Sequelize.STRING
  },
  location: {
    type: db.Sequelize.ARRAY(db.Sequelize.DOUBLE)
  }
})

module.exports = Place;
