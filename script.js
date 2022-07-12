function openBurger() {
  let menu = document.querySelector(".menu-burger");

//   if(menu.classList.contains('active')) {
//      menu.classList.remove('active')
//   } else {
//    menu.classList.add('active')
//   }
  menu.classList.toggle("active");
}
function openBasket() {
   alert(123)
}

let basket = document.querySelector(".header-button__basket");
basket.addEventListener("click", openBasket);
