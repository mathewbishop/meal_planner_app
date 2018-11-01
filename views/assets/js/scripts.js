$('#weekPlanBtn').click(() => {
    $('#planItems').empty();
    let queryURL = "http://localhost:3000/weeklymealplan";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then((res) => {
        res.forEach(element => {
            let tableCell = $('<td>')
            tableCell.text(element.meal_name)
            $('#planItems').append(tableCell);
        });
    });    
});