$('#get-plan-btn').click(() => {
    $.get("http://localhost:3000/api/meal-plan", res => {
        res.forEach(item => {
            console.log(item.meal_name);
        })
    })
})

