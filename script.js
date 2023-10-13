const settingsmenu = document.querySelector('.settings-menu');

function settingsMenuToggle(){
  settingsmenu.classList.toggle('settings-menu-height');
};

const darkBtn = document.getElementById('dark-btn');
darkBtn.onclick =()=>{
  darkBtn.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme')

  if(localStorage.getItem("theme")=="light"){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light")
  }
}

if(localStorage.getItem("theme")== "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}else if(localStorage.getItem("theme")== "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}else{
  localStorage.setItem("theme","light");
}

/*------Preloader------*/
const loaderPage = document.getElementById('preloader');
window.addEventListener("load", ()=>{
  loaderPage.style.display="none";
})
