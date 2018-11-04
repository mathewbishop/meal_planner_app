//==============================================================
// Global Vars
//==============================================================
let planContainer = $('#meal-data');

//==============================================================
// Display Meal Plan
//==============================================================
$('#get-plan-btn').click(() => {
    planContainer.empty();
    $.get("http://localhost:3000/api/meal-plan", res => {
        res.forEach(item => {
            let card = $('<div class=card>');
            let cardBody = $('<div class=card-body>');
            let cardTitle = $('<p class=card-title>');
            let cardSubtitle = $('<small class=card-subtitle>');
            $(cardTitle).text(item.meal_name);
            $(cardSubtitle).text(item.category);
            cardBody.append(cardTitle,cardSubtitle);
            card.append(cardBody);
            planContainer.append(card);
        })
    })
})

//==============================================================
// Display All Meals
//==============================================================
$('#view-all-btn').click(() => {
    planContainer.empty();
    $.get("http://localhost:3000/api/all-meals", res => {
        res.forEach(item => {
            let meal = $('<p>');
            $(meal).text(item.meal_name);
            planContainer.append(meal);
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

