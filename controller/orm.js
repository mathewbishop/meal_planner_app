//==============================================================
// Imports
//==============================================================
const connection = require("../config/connection");

const orm = {
  getMealPlan: function(sliderVal, callback) {
    let query = `SELECT meal_name, category, sub_category, avg_price FROM meals ORDER BY RAND() LIMIT ${sliderVal}`;
    connection.query(query, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  selectAllMeals: function(callback) {
    let query = "SELECT * FROM meals";
    connection.query(query, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  addMeal: function() {}
};

module.exports = orm;
