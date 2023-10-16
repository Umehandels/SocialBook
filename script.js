const settingsmenu = document.querySelector('.settings-menu');
const menuButton = document.querySelector('.js-profile-pic');

menuButton.addEventListener('click',()=>{
  settingsmenu.classList.toggle('settings-menu-height');
});

document.addEventListener('click', (event)=>{
  if(!settingsmenu.contains(event.target) && event.target !== menuButton){
    settingsmenu.classList.remove('settings-menu-height');
  }
});

/*-------like button-------*/
let likeButton = document.querySelectorAll('.js-like-button');

const sourceURLs = [
  "images/like.png",
  "images/like-blue.png",
];

likeButton.forEach((like) => {
  let currentIndex = 0;

  like.addEventListener("click", function () {
    // Change the source of the clicked image based on the currentIndex
    like.src = sourceURLs[currentIndex];

    // Increment the currentIndex and wrap around if it exceeds the array length
    currentIndex = (currentIndex + 1) % sourceURLs.length;
  });
});

/*-------------dark Mode toggle---------*/
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
