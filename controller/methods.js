const prepareMealDataPOST = (obj) => {
    if (typeof obj.ingredients !== "string" || typeof obj.instructions !== "string") {
        console.log("Ingredients || Instructions was not of type String.");
        return false;
    }
    for (const meal in obj) {
        meal.trim();
    }
    obj.cook_time = parseInt(obj.cook_time);
    return obj;
}

module.exports = {
    prepareMealDataPOST: prepareMealDataPOST
};