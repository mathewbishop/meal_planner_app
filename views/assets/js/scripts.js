//==============================================================
// Global Vars
//==============================================================
let planContainer = $('#meal-data');

function sum(total, num) {
    return total + num;
}

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
        groceryBill = groceryBill.reduce(sum);
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
$('#get-recipes-btn').click(() => {
    let searchTerm;
    let API_KEY = "484238b135b3904515a67e3f7db2eca3";
    let queryURL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${searchTerm}`
})

