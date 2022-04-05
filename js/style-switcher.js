const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-swither").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// const alternateStyle = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color){
//     localStorage.setItem("color",color);
//     changeColor();
// }

// function changeColor(){
//     alternateStyle.forEach((style) => {
//         if(localStorage.getItem("color") === style.getAttribute("title")){
//             style.removeAttribute("disabled");
//         }
//     }
// }
// );
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
        style.removeAttribute("disabled");
        }
        else{
        style.getAttribute("disabled", "true");
        }
    })
}

// Dark Theme

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load" , () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})