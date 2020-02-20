

let button = document.getElementById("burger-menu__button")

let link0 = document.getElementsByClassName("burger-menu__link")[0]
let link1 = document.getElementsByClassName("burger-menu__link")[1]
let link2 = document.getElementsByClassName("burger-menu__link")[2]
let link3 = document.getElementsByClassName("burger-menu__link")[3]
let link4 = document.getElementsByClassName("burger-menu__link")[4]
let overlay = document.getElementById("burger-menu__overlay")



button.addEventListener("click", function(){
    console.log("button")
    chooseMenu()
    handleButtonClick()
}  )

overlay.addEventListener("click", function(){
    console.log("overlay")
    chooseMenu()
}  )

/* Я "вешаю" слушателя на каждую ссылку, и получаю каждую из них отдельно, заводя под каждую из них свою переменную. Да, это ужасно. Говорят, люди практикующие такой подход - не доживают до рассвета. Но я кранйе спешу, и на то, что бы переписать это в красивый код - нужно время, а время деньги, и у меня его сейчас нет.*/
link0.addEventListener("click", function(){
    console.log("links")
    chooseMenu()
}  )
link1.addEventListener("click", function(){
    console.log("links")
    chooseMenu()
}  )
link2.addEventListener("click", function(){
    console.log("links")
    chooseMenu()
}  )
link3.addEventListener("click", function(){
    console.log("links")
    chooseMenu()
}  )
link4.addEventListener("click", function(){
    console.log("links")
    chooseMenu()
}  )

function chooseMenu(){
  let menuu = document.getElementById("burger-menu__nav") /*вся панель меню*/
  menuu.classList.toggle("burger-menu__nav_active") /* хвала богам за то, что они создали такого человека, который придумал этот метод, что работает по принципу флага. Иначе пришлось бы городить условия и циклы*/
  let overlay = document.getElementById("burger-menu__overlay") /*хак с подложкой, который реализует скрытие меню при нажатии мимо него (когда пользователь не хочет переходить куда-то, а остаться на текущем месте и выключить меню)*/
  overlay.classList.toggle("burger-menu__overlay_active")
}



/* 
Кнопка "Показать телефон"
*/

let showTell = document.getElementById("showTell")
let tellNumber = document.getElementById("tellNumber")

showTell.addEventListener("click", function(){
   tellNumber.classList.toggle("hidden")
  
}  )