const settingsmenu = document.querySelector('.settings-menu');
const menuButton = document.querySelector('.nav-user-icon');

menuButton.addEventListener('click',()=>{
  settingsmenu.classList.toggle('settings-menu-height');
});

document.addEventListener('click', (event)=>{
  /*console.log(e.target)*/
  if(!settingsmenu.contains(event.target) && event.target !== menuButton){
    settingsmenu.classList.add('.settings-menu');
  }
})

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
