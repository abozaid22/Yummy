
// _______ function number 1 data     see __________ .php?s=c

async function searchs() {
    $(".sersh-food").removeClass("d-none")
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=c`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayFilter(data.meals)
}
searchs()
function displayFilter(meals){
    let temp = "";
    for (let i = 0; i < 20; i++) {
        temp += `
            <div class="col-md-3 ">
                <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${meals[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${meals[i].strCategory}</h3>
                    </div>
                </div>
            </div>
            `
    }
    document.getElementById("Categories").innerHTML = temp
}



// _________ SideNav__________


// ____openNav__________

function openNav() {
    $(".side-nav").animate({left:"0px"},800)
    $(".open-icon").addClass("d-none");
    $(".close-icon").removeClass("d-none");
    $(".inymae").animate({top:"0px",opacity:"1"},1000)
}
// ___closeSideNav________

function closeSideNav() {
    $(".side-nav").animate({left:"-260px"},800)
    $(".close-icon").addClass("d-none");
    $(".open-icon").removeClass("d-none");
    $(".inymae").animate({top:"100px",opacity:"0"},500)
}

// 5 function in SideNav

// 1 ________________ Search _______________________

function showSearchInputs() {
    document.getElementById("Categories").innerHTML = ""
    temp = `
    <div class="sersh-food ">
        <div class=" row p-3 ps-5  ">
            <div class="col-md-5 col-12 mx-auto m-2 ">
                <input onkeyup="searchName(value)" class="form-control bg-transparent type="text" placeholder="Search By Name">
            </div>
            <div class="col-md-5 col-12 mx-auto m-2">
                <input onkeyup="searchFLetter(value)" maxlength="1" class="form-control bg-transparent type="text" placeholder="Search By First Letter">
            </div>
        </div>
        
    </div>`
    document.getElementById("ipo").innerHTML = temp
}


//  ----------------- searchName -----------------

async function searchName(value) {
    $(".sersh-food").removeClass("d-none")
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayFilter(data.meals)
}
function displayFilter(meals){
    let temp = "";
    for (let i = 0; i < 20; i++) {
        temp += `
            <div class="col-md-3">
                <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${meals[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${meals[i].strCategory}</h3>
                    </div>
                </div>
            </div>
            `
    }
    document.getElementById("Categories").innerHTML = temp
}


//  -------------- searchLetter -------------------

async function searchFLetter(value) {
    $(".sersh-food").removeClass("d-none")
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayFilter(data.meals)
}
function displayFilter(meals){
    let temp = "";
    for (let i = 0; i < meals.length; i++) {
        temp += `
            <div class="col-md-3">
                    <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${meals[i].strMealThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${meals[i].strCategory}</h3>
                        </div>
                    </div>
            </div>`
    }
    document.getElementById("Categories").innerHTML = temp
}



// 2 ___________________ Categories _________________

async function getCategories(){
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayRecipes(data.categories)
}

function displayRecipes(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += `
            <div class="col-md-3">
                    <div onclick="getCategory('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${arr[i].strCategoryThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${arr[i].strCategory}</h3>
                            <p>${arr[i].strCategoryDescription}</p>
                        </div>
                    </div>
            </div>`
    }
    document.getElementById("Categories").innerHTML = temp
}

async function getCategory(category) {
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayFilter(data.meals)
}
function displayFilter(arr){
    let temp = "";
    for (let i = 0; i < 20; i++) {
        temp += `
            <div class="col-md-3">
                    <div onclick="getF(${arr[i].idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${arr[i].strMeal}</h3>
                        </div>
                    </div>
            </div>`
    }
    document.getElementById("Categories").innerHTML = temp
}


async function getF(idMeal) {
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayE(data.meals)
}
function displayE(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += `
        <div class="container py-3 ">
        <div class="row">
            <div class="col-md-4 col-12">
                <img src="${arr[i].strMealThumb}" alt="">
                <h2>${arr[i].strMeal}</h2>
            </div>
            <div class="col-md-8 col-12">
                <h2>Instructions</h2>
                <p>${arr[i].strInstructions}</p>
                <h2>Area : ${arr[i].strArea}</h2>
                <h2>Category : ${arr[i].strCategory}</h2>
                <h2>Recipes : </h2>
    
               <div class="row px-2">
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure1} </p> <p class="m-0" >${arr[i].strIngredient1}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure2} </p> <p class="m-0" >${arr[i].strIngredient2}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure3} </p> <p class="m-0" >${arr[i].strIngredient3}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure4} </p> <p class="m-0" >${arr[i].strIngredient4}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure5} </p> <p class="m-0" >${arr[i].strIngredient5}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure6} </p> <p class="m-0" >${arr[i].strIngredient6}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure7} </p> <p class="m-0" >${arr[i].strIngredient7}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure8} </p> <p class="m-0" >${arr[i].strIngredient8}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure9} </p> <p class="m-0" >${arr[i].strIngredient9}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure10} </p> <p class="m-0" >${arr[i].strIngredient10}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure11} </p> <p class="m-0" >${arr[i].strIngredient11}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure12} </p> <p class="m-0" >${arr[i].strIngredient12}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure13} </p> <p class="m-0" >${arr[i].strIngredient13}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure14} </p> <p class="m-0" >${arr[i].strIngredient14}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure15} </p> <p class="m-0" >${arr[i].strIngredient15}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure16} </p> <p class="m-0" >${arr[i].strIngredient16}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure17} </p> <p class="m-0" >${arr[i].strIngredient17}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure18} </p> <p class="m-0" >${arr[i].strIngredient18}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure19} </p> <p class="m-0" >${arr[i].strIngredient19}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure20} </p> <p class="m-0" >${arr[i].strIngredient20}</p>
                    </div>
                    
                </div>
    
                <h2>Tags :  ${arr[i].strTags}</h2>
                <a href="${arr[i].strSource}" target="_blank" class="btn btn-success">Source</a>
                <a href="${arr[i].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
            </div>
        </div>
    </div>
            `
    }
    document.getElementById("Categories").innerHTML = temp
}


// 3 ___________________ Area _________________

async function getArea(){
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayArea(data.meals)
}
function displayArea(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += `
        <div class="col-md-3">
            <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${arr[i].strArea}</h3>
            </div>
        </div>
        `
    }
    document.getElementById("Categories").innerHTML = temp
}


async function getAreaMeals(strArea) {
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayFilter(data.meals)
}
function displayFilter(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += `
            <div class="col-md-3">
                    <div onclick="getF(${arr[i].idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${arr[i].strMeal}</h3>
                        </div>
                    </div>
            </div>`
    }
    document.getElementById("Categories").innerHTML = temp
}

async function getF(idMeal) {
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayE(data.meals)
}
function displayE(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += `
        <div class="container py-3 ">
        <div class="row">
            <div class="col-md-4 col-12">
                <img src="${arr[i].strMealThumb}" alt="">
                <h2>${arr[i].strMeal}</h2>
            </div>
            <div class="col-md-8 col-12">
                <h2>Instructions</h2>
                <p>${arr[i].strInstructions}</p>
                <h2>Area : ${arr[i].strArea}</h2>
                <h2>Category : ${arr[i].strCategory}</h2>
                <h2>Recipes : </h2>
    
                <div class="row px-2">
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure1} </p> <p class="m-0" >${arr[i].strIngredient1}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure2} </p> <p class="m-0" >${arr[i].strIngredient2}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure3} </p> <p class="m-0" >${arr[i].strIngredient3}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure4} </p> <p class="m-0" >${arr[i].strIngredient4}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure5} </p> <p class="m-0" >${arr[i].strIngredient5}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure6} </p> <p class="m-0" >${arr[i].strIngredient6}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure7} </p> <p class="m-0" >${arr[i].strIngredient7}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure8} </p> <p class="m-0" >${arr[i].strIngredient8}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure9} </p> <p class="m-0" >${arr[i].strIngredient9}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure10} </p> <p class="m-0" >${arr[i].strIngredient10}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure11} </p> <p class="m-0" >${arr[i].strIngredient11}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure12} </p> <p class="m-0" >${arr[i].strIngredient12}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure13} </p> <p class="m-0" >${arr[i].strIngredient13}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure14} </p> <p class="m-0" >${arr[i].strIngredient14}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure15} </p> <p class="m-0" >${arr[i].strIngredient15}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure16} </p> <p class="m-0" >${arr[i].strIngredient16}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure17} </p> <p class="m-0" >${arr[i].strIngredient17}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure18} </p> <p class="m-0" >${arr[i].strIngredient18}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure19} </p> <p class="m-0" >${arr[i].strIngredient19}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure20} </p> <p class="m-0" >${arr[i].strIngredient20}</p>
                    </div>
                    
                </div>
                <h2>Tags :  ${arr[i].strTags}</h2>
                <a href="${arr[i].strSource}" target="_blank" class="btn btn-success">Source</a>
                <a href="${arr[i].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
            </div>
        </div>
    </div>
            `
    }
    document.getElementById("Categories").innerHTML = temp
}

// 4 ___________________ Ingredients _________________

async function getIngredients(){
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayIngredients(data.meals)
}
function displayIngredients(arr){
    let temp = "";
    for (let i = 0; i < 20; i++) {
        temp += `
        <div class="col-md-3 px-5 sizeW">
                <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h5>${arr[i].strIngredient}</h5>
                        <p>${arr[i].strDescription}</p>
                </div>
        </div>
        `
    }
    document.getElementById("Categories").innerHTML = temp
}



async function getIngredientsMeals(ingredients) {
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayFilter(data.meals)
}
function displayFilter(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += `
            <div class="col-md-3">
                    <div onclick="getF(${arr[i].idMeal})" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${arr[i].strMeal}</h3>
                        </div>
                    </div>
            </div>`
    }
    document.getElementById("Categories").innerHTML = temp
}

async function getF(idMeal) {
    document.getElementById("ipo").innerHTML = ""
    $(".loading-screen").removeClass("d-none")
    let req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    let data = await req.json()
    $(".loading-screen").addClass("d-none")
    displayE(data.meals)
}
function displayE(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += `
        <div class="container py-3 ">
        <div class="row">
            <div class="col-md-4 col-12">
                <img src="${arr[i].strMealThumb}" alt="">
                <h2>${arr[i].strMeal}</h2>
            </div>
            <div class="col-md-8 col-12">
                <h2>Instructions</h2>
                <p>${arr[i].strInstructions}</p>
                <h2>Area : ${arr[i].strArea}</h2>
                <h2>Category : ${arr[i].strCategory}</h2>
                <h2>Recipes : </h2>
    
                <div class="row px-2">
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure1} </p> <p class="m-0" >${arr[i].strIngredient1}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure2} </p> <p class="m-0" >${arr[i].strIngredient2}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure3} </p> <p class="m-0" >${arr[i].strIngredient3}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure4} </p> <p class="m-0" >${arr[i].strIngredient4}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure5} </p> <p class="m-0" >${arr[i].strIngredient5}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure6} </p> <p class="m-0" >${arr[i].strIngredient6}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure7} </p> <p class="m-0" >${arr[i].strIngredient7}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure8} </p> <p class="m-0" >${arr[i].strIngredient8}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure9} </p> <p class="m-0" >${arr[i].strIngredient9}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure10} </p> <p class="m-0" >${arr[i].strIngredient10}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure11} </p> <p class="m-0" >${arr[i].strIngredient11}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure12} </p> <p class="m-0" >${arr[i].strIngredient12}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure13} </p> <p class="m-0" >${arr[i].strIngredient13}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure14} </p> <p class="m-0" >${arr[i].strIngredient14}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure15} </p> <p class="m-0" >${arr[i].strIngredient15}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure16} </p> <p class="m-0" >${arr[i].strIngredient16}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure17} </p> <p class="m-0" >${arr[i].strIngredient17}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure18} </p> <p class="m-0" >${arr[i].strIngredient18}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure19} </p> <p class="m-0" >${arr[i].strIngredient19}</p>
                    </div>
                    <div class="dpc w-auto bg-transparent rounded rounded-2 m-1 d-flex align-items-center justify-content-center">
                        <p class="m-0 " >${arr[i].strMeasure20} </p> <p class="m-0" >${arr[i].strIngredient20}</p>
                    </div>
                    
                </div>
    
                <h2>Tags :  ${arr[i].strTags}</h2>
                <a href="${arr[i].strSource}" target="_blank" class="btn btn-success">Source</a>
                <a href="${arr[i].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
            </div>
        </div>
    </div>
            `
    }
    document.getElementById("Categories").innerHTML = temp
}

// 5 ___________________ Contact Us _________________

// __________form 
function showContacts() {
    document.getElementById("ipo").innerHTML = ""
    temp = `
    <div class="contact form py-2 bg-black min-vh-100 d-flex justify-content-center align-items-center">
        <div class="container w-75 text-center">
            <div class="row g-4 px-1 ">
                <div class="col-md-6">
                    <input id="nameInput"oninput="inputValue1(); inputValue()"type="text"class="form-control"placeholder="Enter Your Name"/>
                    <div id="nameAlert" class="lert1 alert alert-danger w-100 mt-2">
                        Special characters and numbers not allowed
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="emailInput" oninput="inputValue2(); inputValue()"type="email" class="form-control"placeholder="Enter Your Email"/>
                    <div id="emailAlert"class="lert2 alert alert-danger w-100 mt-2">
                        Email not valid *exemple@yyy.zzz
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="phoneInput"oninput="inputValue3(); inputValue()"type="tel"class="form-control"placeholder="Enter Your Phone"/>
                    <div id="phoneAlert"class="lert3 alert alert-danger w-100 mt-2">
                        Enter valid Phone Number
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="ageInput" oninput="inputValue4(); inputValue()" type="number"class="form-control"placeholder="Enter Your Age"/>
                    <div id="ageAlert" class="lert4 alert alert-danger w-100 mt-2">
                        Enter valid age From 10 to 80
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="passwordInput"oninput="inputValue5(); inputValue()" type="password"class="form-control" placeholder="Enter Your Password"/>
                    <div id="passwordAlert"class="lert5 alert alert-danger w-100 mt-2">
                        Enter valid password *Minimum eight characters, at least one
                        letter and one number:*
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="repasswordInput"oninput="inputValue6(); inputValue()"type="password"class="form-control"placeholder="Repassword"/>
                    <div id="repasswordAlert"class="lert6 alert alert-danger w-100 mt-2">
                        Enter valid repassword
                    </div>
                </div>
            </div>
            <button id="submitBtn"   class="bb btn btn-outline-danger p-2 mt-3">
                Submit
            </button>
        </div>
    </div>
    `
    document.getElementById("Categories").innerHTML = temp
    // document.querySelector("#submitBtn").removeAttribute("disabled")
}

// $("body").on("click" ,function (e) {
//     console.log(e.target);
// })


// let nameInput = document.getElementById("nameInput")
// let emailInput = document.getElementById("emailInput")
// let phoneInput = document.getElementById("phoneInput")
// let ageInput = document.getElementById("ageInput")
// let passwordInput = document.getElementById("passwordInput")
// let repasswordInput = document.getElementById("repasswordInput")

// let nameInput = document.getElementById("nameInput")

// function inp() {
//     if ( nameInput.value == "" &&  emailInput.value == "" &&  phoneInput.value == ""&& 
//         ageInput.value == ""&& passwordInput.value == "" && repasswordInput.value == "" )  {
//         console.log("cc");
//     }else{
//         console.log("dd");
//     }
// }
// inp()

// 1 ___________ nameInput ______________

function inputValue1(){
    let nameInput = document.getElementById("nameInput")
    let regex = /^[A-z]{3,}\s?$/
    if (regex.test(nameInput.value)) {
        $(".lert1").addClass("d-none")
        return true
    } else {
        $(".lert1").removeClass("d-none")
        return false
    }
}
// 2 ___________ emailInput ___________

function inputValue2(){
    let emailInput = document.getElementById("emailInput")
    let regex = /^[A-z]{3,}[0-9]{0,}?[A-z]{0,}?@[A-z]{0,}\.[A-z]{0,}$/
    if (regex.test(emailInput.value)) {
        $(".lert2").addClass("d-none")
        return true
    } else {
        $(".lert2").removeClass("d-none")
        return false
    }
}

// 3 _____________ phoneInput _______________

function inputValue3(){
    let phoneInput = document.getElementById("phoneInput")
    let regex = /^[0-9]{8,12}$/
    if (regex.test(phoneInput.value)) {
        $(".lert3").addClass("d-none")
        return true
    } else {
        $(".lert3").removeClass("d-none")
        return false
    }
}
// 4 _____________ ageInput _______________

function inputValue4(){
    let ageInput = document.getElementById("ageInput")
    let regex = /^([1-7][0-9]|80)$/
    if (regex.test(ageInput.value)) {
        $(".lert4").addClass("d-none")
        return true
    } else {
        $(".lert4").removeClass("d-none")
        return false
    }
}
// 5 _____________ passwordInput _______________
function inputValue5(){
    let passwordInput = document.getElementById("passwordInput")
    let regex = /^[A-z]{0,}?[0-9]{6,}\@?\*?\#?$/
    if (regex.test(passwordInput.value)) {
        $(".lert5").addClass("d-none")
        return true
    } else {
        $(".lert5").removeClass("d-none")
        return false
    }
}

// 6 _____________ repasswordInput _______________

function inputValue6(){
    let repasswordInput = document.getElementById("repasswordInput")
    let passwordInput = document.getElementById("passwordInput")
    if (repasswordInput.value == passwordInput.value ) {
        $(".lert6").addClass("d-none")
        return true
    } else {
        $(".lert6").removeClass("d-none")
        return false
    }
}

// function inp() {
//     if (inputValue1() == true && inputValue2() == true && inputValue3() == true && 
//     inputValue4() == true && inputValue5() == true && inputValue6() == true )  {
//         console.log("100%");
//     }else{
//     document.querySelector("#submitBtn").removeAttribute("disabled")
//         console.log("0000000  %%%%%%");
//     }
// }
// inp()
