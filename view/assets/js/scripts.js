//==============================================================
// Global Vars
//==============================================================
function Recipe(image, label, url) {
    this.image = image,
    this.label = label,
    this.url = url
}


//==============================================================
// Vue Instance
//==============================================================
const vm = new Vue({
    el: "#app",
    data: {
        showSearch: false,
        showGetMeal: false,
        showMealDetail: false,
        meals: [],
        recipeSearchResults: [],
        sliderValue: 1
    },
    methods: {
        viewAllMeals: function() {
            let self = this;
            $.get("http://localhost:3000/api/all-meals") 
                .then(res => {
                    self.meals = res;
                });
            },
            getPlan: function() {
                let qty = {
                    sliderValue: $("#meal-qty-slider").val()
                }
                let self = this;
                $.post("/api/meal-plan", qty)
                .then(res => {
                    self.meals = res;
                });     
            },
            searchRecipes: function() {
                let self = this;
                let searchTerm = $('#recipe-search-input').val().trim();
                let APP_ID = "cb6593fa";
                let API_KEY = "51c433b80e9216aebf68cc2186aaab47"
                let queryURL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10`;
                $.get(queryURL)
                .then(res => {
                    let arry = res.hits;
                    arry.forEach(item => {
                        self.recipeSearchResults.push(new Recipe(item.recipe.image, item.recipe.label, item.recipe.url));
                    });
                });
                    
            },
        empty: function() {
            this.meals = [];
            this.recipeSearchResults = [];
        },
        toggleSearch: function() {
            this.showSearch = !this.showSearch;
        },
        toggleMealInput: function() {
            this.showGetMeal = !this.showGetMeal;
        }

    },
    computed: {
        groceryBill: function() {
            let arry = [0];
            this.meals.forEach(item => {
                arry.push(item.avg_price);
            });
            let sum = arry.reduce((total, num) => total + num);
            return sum;
        },
        mealsArryLength: function() {
            return this.meals.length
        }
    }
});
