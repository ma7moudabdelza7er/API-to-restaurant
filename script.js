
const searchMeal = async function(e){
    e.preventDefault();
    const input = document.querySelector(".input");
    const title = document.querySelector(".title");
    const info = document.querySelector(".info");
    const img = document.querySelector(".img");
    const ingredientsOutput = document.querySelector(".ingredents")
    function mealinfo(re){
        let {strMeal,strMealThumb,strInstructions} = re
        title.innerHTML = strMeal
        img.style.backgroundImage = `url(${strMealThumb})`
        info.innerHTML = strInstructions
        ingredients = [];
        for(let i=1;i<=20;i++){
            if(!re[`strIngredient${i}`] == ""){
                // ingredients.push(`${re[`strIngredient${i}`]} - ${re[`strMeasure${i}`]}`)
                ingredients.push(re[`strIngredient`+`${i}`]+"-"+re[`strMeasure`+`${i}`])
            // }else{
                // break;
            }
        }
        console.log(ingredients)
        const h =
        `
        <span>${ingredients.map(function(el){
        
        return `<li class="ing">${el}</li>`}).join("")}</span>`
        ingredientsOutput.innerHTML = h
    }
   async function fetchMealData(val){
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    let data = await response.json()
    result = data.meals
    console.log(result)
    result.forEach(mealinfo)
}    
val = input.value 
data = await fetchMealData(val);
// meals.forEach(mealinfo)
}


const form = document.querySelector("form");
form.addEventListener("submit",searchMeal);

const magnifier = document.querySelector(".fa-solid");
magnifier.addEventListener("click",searchMeal);