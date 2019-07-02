$(document).ready(function () {
    $("#btnMainNav").on("click", function () {
        $("#mainNav").toggle();
    });
    $(".btnDeleteMeal").on("click", function () {
        let id = $(this).closest("div.mealCard").data("mealid");
        if (confirm("Are you sure you want to delete this meal?")) {
            deleteMeal(id);
        }
    });
});
function deleteMeal(id) {
    $.ajax(`/meal/${id}`, {
        type: "DELETE"
    }).then(() => {
        console.log("Meal deleted.");
        window.location.reload();
    });
}
