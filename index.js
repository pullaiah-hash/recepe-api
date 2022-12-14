
const recepes = document.querySelector(".recepes")
const recepeConatiner = document.querySelector(".recepe-conatiner")
const menu = document.querySelector(".menu")
const popup = document.querySelector(".pop-up")

function getRandomMealData(){
   fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res=>{
    return res.json()
   }).then(result=>{
   getRandom(result,true)
   })}
getRandomMealData()

function getRandom(result,random=false){
    console.log(result.meals[0])
    localStorage.setItem("meals",JSON.stringify(result.meals))
    let ml = localStorage.getItem("meals")
    console.log(JSON.parse(ml))
    let html
     html=` ${random?`<button class="recepe-btn">Recepe of the day</button>`:""}
     <div class="recepes">
         <img src=${result.meals[0].strMealThumb} alt=${result.meals[0].strMeal}>
             </div>
             <h4><span>${result.meals[0].strMeal}</span>
<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></h4>
    </div>`
   recepeConatiner.insertAdjacentHTML("afterbegin",html)
}
//////////////////////////Menu/////////////////////
menu.addEventListener("click",function(){
    console.log("popup")
    // popup.style.opacity = "1"
})



