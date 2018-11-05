//==============================================================
// Global Vars
//==============================================================
let planContainer = $('#meal-data');
//==============================================================
// Display Meal Plan
//==============================================================
$('#get-plan-btn').click(() => {
    let groceryBill = [];
    planContainer.empty();
    $.get("http://localhost:3000/api/meal-plan", res => {
        res.forEach(item => {
            let mealCard = $('<div class=card>');
            let cardBody = $('<div class=card-body>');
            let cardTitle = $('<p class=card-title>');
            let cardSubtitle = $('<small class=card-subtitle>');
            $(cardTitle).text(item.meal_name);
            $(cardSubtitle).text(item.category);
            cardBody.append(cardTitle, cardSubtitle);
            mealCard.append(cardBody);
            planContainer.append(mealCard);
            groceryBill.push(item.avg_price);
        })
        groceryBill = groceryBill.reduce((total, num) => total + num);
        let priceCard = $('<div class=card>');
        let price = $('<p class=card-text>');
        $(price).html(`Estimated Grocery Bill: $${groceryBill}`);
        priceCard.append(price);
        planContainer.append(priceCard);
    })
})

//==============================================================
// Display All Meals
//==============================================================
$('#view-all-btn').click(() => {
    planContainer.empty();
    $.get("http://localhost:3000/api/all-meals", res => {
        res.forEach(item => {
            let mealCard = $('<div class=card>');
            let cardBody = $('<div class=card-body>');
            let cardTitle = $('<p class=card-title>');
            let cardSubtitle = $('<small class=card-subtitle>');
            $(cardTitle).text(item.meal_name);
            $(cardSubtitle).text(item.category);
            cardBody.append(cardTitle, cardSubtitle);
            mealCard.append(cardBody);
            planContainer.append(mealCard);
        })
    })
})

//==============================================================
// Get Recipes
//==============================================================
$('#find-recipes-btn').click(() => {
    $('#recipe-search-div').show();
})

$('#recipe-search-btn').click(() => {
    planContainer.empty();
    let searchTerm = $('#recipe-search-input').val().trim();
    let APP_ID = "cb6593fa";
    let API_KEY = "51c433b80e9216aebf68cc2186aaab47"
    let queryURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10`;
    $.get(queryURL, res => {
        console.log(res);
        let arry = res.hits;
        arry.forEach(item => {
            console.log(item.recipe.label);
            console.log(item.recipe.url);      
        })
    })
})

$('#hide-recipe-search').click(() => {
    $('#recipe-search-div').hide();
})
