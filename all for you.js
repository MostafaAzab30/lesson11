

function loadi() {

reload.style.display="none";

}


let navlink = document.querySelectorAll(".one")


navlink.forEach((e) => {

e.addEventListener("click" , function() {
navlink.forEach(nav => nav.classList.remove("active"));

this.classList.add("active")


})});






const navbaro = document.getElementById("navbaro")
let sectiontop = navbaro.offsetTop

window.addEventListener("scroll" , ()=>{

let scrolltop = window.scrollY

if (scrolltop > sectiontop - 60) {
    
    navbaro.classList.add("momo")

} else {

    navbaro.classList.remove("momo")

}
})



let holy = document.getElementById("addgames")




async function MMORPG(type) {



    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'e82a72b6bcmsh917e393d7bba792p136bd0jsn631a3f02bb49',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
    };
    
    const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
    
    const responsive = await api.json()


    function loooop() {
      
    let temp = ``

    for (let i = 0; i < responsive.length; i++) {
    
         
    temp += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 javababy mb-4">
    <div class="item g-4 dadgames">
    <div class="small">
    <img src="${responsive[i].thumbnail}" class="w-100 rounded" alt="">
    
    <div class="d-flex justify-content-space-between text-white names mt-4 mb-2">
    <h5>${responsive[i].title}</h5>
    <h5 class="free">Free</h5>
    </div>
    
    <p class="text-white">${responsive[i].short_description.slice(1,150)}</p>
    
    <br>
    </div>
    
    <div class="d-flex justify-content-space-between text-white names my-1 mt-3">
    <h6 class="pull">${responsive[i].genre}</h6>
    <h6 class="pull">${responsive[i].platform}</h6>
    </div>
    </div>
    
    </div>`



    getdetails(responsive[i].id )
    
    }

    holy.innerHTML = temp

    }
    
    loooop()
   
    

    
    
    
    }

    MMORPG("MMORPG")


    const rfer = document.querySelectorAll(".rfer")
    
    rfer.forEach((eo) => {
    
    
    eo.addEventListener("click" , (items) => {
    
    section3.style.display="block"
    navbaro.style.display="none"

    
    })});



    






let navlinks = document.querySelectorAll(".nav-link")

for (let p = 0; p < navlinks.length; p++) {
    navlinks[p].addEventListener("click" , function (eop) {
        
let type = this.innerHTML


MMORPG(type)




    })
    
}












let productlist = []

async function getdetails(id) {


const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'e82a72b6bcmsh917e393d7bba792p136bd0jsn631a3f02bb49',
'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
}
};


const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)

const responsive = await api.json()
// console.log(responsive)




    document.getElementById("section3").innerHTML = `
    <div class="container ">
    <div class="text-white upname my-4">
    <h2>Details Game Azab</h2>
    <span id="icon" class="icon-cancel-circle "></span>
    </div>
    <div class="row">
    
    <div class="col-4">
    <img src="${responsive.thumbnail}" class="w-100" alt="">
    
    </div>
    
    <div class="col-8 text-white lineheigh">
    <h3 class="mb-3 ">Title : ${responsive.title}</h3>
    <hr class="bord">
    <p>Category : <span class="spaoned">${responsive.genre}</span></p>
    <p>Platform : <span class="spaoned">${responsive.platform}</span></p>
    <p>Status : <span class="spaoned">${responsive.status}</span></p>
    
    <p>${responsive.description}</p>
    
    <a class="btn" href="${responsive.game_url}">Show Game</a>
    
    
    </div>
    
    </div>
    
    </div>`

    icon.addEventListener ("click" , ()=>{

        section3.style.display="none"
        navbaro.style.display="block"
        
        })










}






























