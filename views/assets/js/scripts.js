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
            let meal = $('<p>');
            $(meal).text(item.meal_name);
            planContainer.append(meal);
        })
    })
})

