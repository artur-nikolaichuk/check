const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const otmena = document.querySelector(".otmena");   
cartButton.addEventListener("click", function(event){
    modal.classList.add("is-open");
})

close.addEventListener("click", function(event){
    modal.classList.remove("is-open");
})

otmena.addEventListener("click", function(event){
    modal.classList.remove("is-open");
})


new WOW().init();

$(window).on("load",function(){
    $(".loader-container").fadeOut(3000);
});



const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight}%`;
};

