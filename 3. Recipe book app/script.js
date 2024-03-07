const API_KEY = "905ca578801c4be4a4e5acda9da95781";
const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`;

let recipeListElm = document.querySelector("#recipe-list");

function displayRecipes(recipes){

    // we are going to empty our ul HTML first(if nnot comment on html files)
    // recipeListElm.innerHTML = "";

    // now we use for each method for all the array comes from api 
    // bec of recipe has array of object for that we use array methods.
    recipes.forEach((recipe) => {
        //firstly we have to create a list and add a style class for that
        const recipeItemElm = document.createElement("li");
        recipeItemElm.classList.add("recipe-item");

        // now create list items we have
        recipeImageElm = document.createElement("img");
        recipeImageElm.src = recipe.image;
        recipeImageElm.alt = "recipe-image";

        recipeTitleElm = document.createElement("h2");
        recipeTitleElm.innerText = recipe.title;

        recipeIngredientsElm = document.createElement("p");
        recipeIngredientsElm.innerHTML = `<strong>Ingredients: </strong> 
        ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}`;

        recipeViewElm = document.createElement("a");
        recipeViewElm.href = recipe.spoonacularSourceUrl;
        recipeViewElm.innerText = "View More";

        // lastly we append these in the ul and and li 
        recipeListElm.appendChild(recipeItemElm);
        recipeItemElm.appendChild(recipeImageElm);
        recipeItemElm.appendChild(recipeTitleElm);
        recipeItemElm.appendChild(recipeIngredientsElm);
        recipeItemElm.appendChild(recipeViewElm);

        
    });
}

async function getRecipes(){
    try{
    const response = await fetch(url);
    const data = await response.json();
    return data.recipes;
}catch(err){
    console.log("Error found", err);
}
} 

async function init(){
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init()