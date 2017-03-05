const db = require('./db');
const Place = require('./Place');

const Activity = db.define('activity', {
  name: {
    type: db.Sequelize.STRING
  },
  age_range: {
    type: db.Sequelize.STRING
  }
},{
  defaultScope: {
    include: [Place]
  },
  getterMethods: {
    type: function(){
      return 'activity';
    }
  }
})


module.exports = Activity;
