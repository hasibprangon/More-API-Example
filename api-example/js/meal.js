const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
};
const displayMeals = meals => {
    // console.log(meals);
    // s1: get container elements
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal);
        // s2: create child for each elements
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // s3: set content of the child element
        mealDiv.innerHTML = `
    <div class="card h-100">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
                <button onclick = "loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetailsModal">
                Details
                </button>
            </div>
          </div>
    `;
        mealsContainer.appendChild(mealDiv);
    });

}
const searchMeal = () => {
    // console.log('hello')
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText)
}

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))
        .catch (error => {
            console.log(error)
        })
}
// async await
const loadMealDetails2 = async(idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
    `
   try{
    const res = await fetch(url);
    const data = await res.json();
    displayMealsDetails(data.meals[0]);
   }
   catch(error){
    console.log(error);
   }
} 

const displayMealsDetails = meal => {
    document.getElementById('mealsDetailsModalLabel').innerText = meal.strMeal;
    document.getElementById('mealsDetailsBody').innerHTML =`
    <img class="img-fluid" src="${meal.strMealThumb}">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam mollitia autem magnam vel sunt aut dolorem quis commodi facilis.</p>
    `;
}

loadMeals('beef'); 