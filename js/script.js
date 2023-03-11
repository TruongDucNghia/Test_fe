const iconBar = document.querySelector(".btn_bar")
const iconClose = document.querySelector(".icon_menu")
const header = document.querySelector(".header_nav")
const nav = document.querySelector(".wrapper_header")
const banner_li = document.querySelector(".wrapper_banner").children
const banner_liLeg = banner_li.length
let index = 0
const bannerOnTimer = 3000
const bannerOffTimer = 2800
iconBar.addEventListener('click', () =>{
    header.classList.toggle("hiden_mobile")
})
iconClose.addEventListener('click', () =>{
    header.classList.toggle("hiden_mobile")
})

window.onscroll = function() {sticker()};
function sticker() {
   if (window.pageYOffset > 300) {
      nav.classList.add("sticky")
   } else {
      nav.classList.remove("sticky");
   }
}

function animateBanner(){
    for(let i = 0; i<banner_liLeg; i++ ){
        banner_li[i].classList.remove("banner_on", "banner_off")
    }
    banner_li[index].classList.add("banner_on")
    setTimeout(function(){
        banner_li[index].classList.add("banner_off")
    }, bannerOffTimer)

    setTimeout(function(){
        if(index == banner_liLeg - 1){
            index = 0
        }else{
            index++
        }
        animateBanner()
    }, bannerOnTimer)
}
window.onload=animateBanner