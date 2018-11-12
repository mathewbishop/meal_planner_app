// //==============================================================
// // Global Vars
// //==============================================================
let planContainer = $('#meal-data');
// //==============================================================
// // Display Meal Plan
// //==============================================================
// $('#get-plan-btn').click(() => {
//     let groceryBill = [];
//     planContainer.empty();
//     $.get("http://localhost:3000/api/meal-plan", res => {
//         res.forEach(item => {
//             let mealCard = $('<div class=card>');
//             let cardBody = $('<div class=card-body>');
//             let cardTitle = $('<p class=card-title>');
//             let cardSubtitle = $('<small class=card-subtitle>');
//             $(cardTitle).text(item.meal_name);
//             $(cardSubtitle).text(item.category);
//             cardBody.append(cardTitle, cardSubtitle);
//             mealCard.append(cardBody);
//             planContainer.append(mealCard);
//             groceryBill.push(item.avg_price);
//         })
//         groceryBill = groceryBill.reduce((total, num) => total + num);
//         let priceCard = $('<div class=card>');
//         let price = $('<p class=card-text>');
//         $(price).html(`Estimated Grocery Bill: $${groceryBill}`);
//         priceCard.append(price);
//         planContainer.append(priceCard);
//     })
// })

// //==============================================================
// // Display All Meals
// //==============================================================
// $('#view-all-btn').click(() => {
//     planContainer.empty();
    // $.get("http://localhost:3000/api/all-meals", res => {
    //     res.forEach(item => {
    //         let mealCard = $('<div class=card>');
    //         let cardBody = $('<div class=card-body>');
    //         let cardTitle = $('<p class=card-title>');
    //         let cardSubtitle = $('<small class=card-subtitle>');
    //         $(cardTitle).text(item.meal_name);
    //         $(cardSubtitle).text(item.category);
    //         cardBody.append(cardTitle, cardSubtitle);
    //         mealCard.append(cardBody);
    //         planContainer.append(mealCard);
    //     })
    // })
// })

// //==============================================================
// // Get Recipes
// //==============================================================
// $('#find-recipes-btn').click(() => {
//     $('#recipe-search-div').show();
// })

// $('#recipe-search-btn').click(() => {
//     planContainer.empty();
//     let searchTerm = $('#recipe-search-input').val().trim();
//     let APP_ID = "cb6593fa";
//     let API_KEY = "51c433b80e9216aebf68cc2186aaab47"
//     let queryURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10`;
//     $.get(queryURL, res => {
//         let arry = res.hits;
//         arry.forEach(item => {
//             let recipeCard = $('<div class=card>');
//             let cardBody = $('<div class=card-body>');
//             let cardImg = $('<img class=card-img-top>');
//             let cardTitle = $('<p class=card-title>');
//             let cardSubtitle = $('<a class=card-subtitle btn>');
//             $(cardImg).attr("src", item.recipe.image);
//             $(cardTitle).html(item.recipe.label);
//             $(cardSubtitle).attr("href", item.recipe.url);
//             $(cardSubtitle).html("View Recipe");
//             cardBody.append(cardTitle, cardSubtitle, cardImg);
//             recipeCard.append(cardBody);
//             planContainer.append(recipeCard);
//         })
//     })
//     document.getElementById("search-form").reset();
// })



const main = new Vue({
    el: "#app",
    data: {
        showSearch: false,
        showGetMeal: false,
        showMealDetail: false,
        meals: [],
        value: 1
    },
    methods: {
        viewAllMeals: function() {
            $.get("http://localhost:3000/api/all-meals", res => {
                    res.forEach(item => {
                        
                    })
                    console.log(res);
                })
            },
            getPlan: function() {
                let qty = {
                    value: $("#meal-qty-slider").val()
                }
                let self = this;
                $.post("/api/meal-plan", qty)
                .then(res => {
                    self.meals = res;
                });
                
            },
        empty: function() {
            $("#meal-data").empty();
        }
    }
})


