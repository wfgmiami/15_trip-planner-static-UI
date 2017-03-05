const router = require('express').Router();
const db = require('../models');
const Hotel = db.models.hotel;
const Restaurant = db.models.restaurant;
const Activity = db.models.activity;

router.get('/', (req,res,next)=>{

const findingHotels = Hotel.findAll();
const findingRestaurants = Restaurant.findAll();
const findingActivities = Activity.findAll();

Promise.all( [findingHotels, findingRestaurants, findingActivities] )
  .then( ([hotels, restaurants, activities ]) =>{

    res.render('index', { hotels, restaurants, activities })
  })

// const cont = {};
// db.models.hotel.findAll()
// .then( hotels => {
//   cont.hotels = hotels;
//   return db.models.restaurant.findAll()
// })
// .then( rests => {
//   cont.rests = rests;
//   return db.models.activity.findAll()
// })
// .then( activities => {
//   res.render('index', {
//     hotels: cont.hotels,
//     restaurants: cont.rests,
//     activities: cont.activities

//   })
// })
// .catch(next);
})

module.exports = router;

// const User = db.define('user')
// const User = require('./User')
// module.exports = { models: {User} }
// const db = require('./models')
// const User = db.models.User
// User = db.models.user  ---> true
