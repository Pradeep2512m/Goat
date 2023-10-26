

// light and dark mode

let themeBtn = document.querySelector('[data-theme-btn]');

let HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;


if(sessionStorage.getItem("theme")){
    HTML.dataset.theme=sessionStorage.getItem("theme")
}else{
    HTML.dataset.theme = isDark ? "dark" :"light";

    sessionStorage.setItem("theme",HTML.dataset.theme)
}


let changeTheme =  ()=>{
    HTML.dataset.theme = sessionStorage.getItem("theme")=== "light" ? "dark" : "light";

    sessionStorage.setItem("theme",HTML.dataset.theme)
}


themeBtn.addEventListener('click',changeTheme)