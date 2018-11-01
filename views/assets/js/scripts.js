$('#weekPlanBtn').click(() => {
    let queryURL = "http://localhost:3000/weeklymealplan";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then((response) => {
        console.log(response);
    })    
});