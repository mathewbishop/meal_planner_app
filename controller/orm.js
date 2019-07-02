//==============================================================
// Imports
//==============================================================
const connection = require("../config/connection");

const orm = {
    getMealPlan: function (sliderVal, callback) {
        let query = `SELECT meal_name, category, sub_category, avg_price FROM meals ORDER BY RAND() LIMIT ${sliderVal}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    selectAllMeals: function (callback) {
        let query = "SELECT * FROM meals";
        connection.query(query, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    selectById: function (id, callback) {
        let query = "SELECT * FROM meals WHERE id = ?";
        connection.query(query, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    addMeal: function (obj, callback) {
        let query = "INSERT INTO meals SET ?";
        connection.query(query, [obj], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    deleteMeal: function (id, callback) {
        let query = "DELETE FROM meals WHERE id = ?";
        connection.query(query, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;
