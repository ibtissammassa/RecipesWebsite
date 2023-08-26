
const appKey = '7e986d49c32641a2b426a2ba4be8d49a';

document.addEventListener('DOMContentLoaded', getRecipes);

async function getRecipes(){
    const apiUrl = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${appKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const recipesContainers = document.querySelectorAll('.cards');
        recipesContainers.forEach(recipesContainer=>{
            displayRecipes(recipesContainer,data.recipes);
        })
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }

}

function displayRecipes(recipesContainer,recipes){
        console.log('in display recipes');
        recipesContainer.innerHTML = '';
        recipes.forEach(recipe => {
            console.log(recipe);
            //Card
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('card');
            //image
            const recipeImage = document.createElement('img');
            recipeImage.classList.add('w-full');
            recipeImage.classList.add('object-cover');
            recipeImage.classList.add('h-32');
            recipeImage.classList.add('sm:h-28');
            recipeImage.src = recipe.image;
            recipeElement.appendChild(recipeImage);
            //titles
            const titles = document.createElement('div');
            titles.classList.add('m-4');
            const title = document.createElement('span');
            const type = document.createElement('span');
            title.classList.add('block');
            title.classList.add('font-bold');
            type.classList.add('text-sm');
            type.classList.add('text-gray-400');
            title.textContent = recipe.title;
            type.textContent = recipe.dishTypes[0];
            titles.appendChild(title);
            titles.appendChild(type);
            recipeElement.appendChild(titles);
            //time
            const badge = document.createElement('div');
            badge.classList.add('badge');
            badge.innerHTML = "<svg class=\"w-4 mr-1\" xmlns=\"http:\/\/www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z\" /></svg>"
            const time = document.createElement('span');
            time.textContent = `${recipe.readyInMinutes} MINS`
            badge.appendChild(time);
            recipeElement.appendChild(badge);

            recipesContainer.appendChild(recipeElement);
        }); 
}