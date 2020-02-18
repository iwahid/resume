
function burgerMenu(selector){
  let menu = selector
  let button = document.getElementById("burger-menu__button")

  let link0 = document.getElementsByClassName("burger-menu__link")[0]
  let link1 = document.getElementsByClassName("burger-menu__link")[1]
  let link2 = document.getElementsByClassName("burger-menu__link")[2]
  let link3 = document.getElementsByClassName("burger-menu__link")[3]
  let link4 = document.getElementsByClassName("burger-menu__link")[4]
  let overlay = document.getElementById("burger-menu__overlay")

  let test = document.getElementById("burger-menu")


  button.addEventListener("click", function(){
      console.log("button")
      chooseMenu()
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
     let menuu = document.getElementById("burger-menu")
     menuu.classList.toggle("burger-menu_active") /* хвала богам за то, что они создали такого человека, который придумал этот метод, что работает по принципу флага. Иаче пришлось бы городить условия и циклы*/

     let testholder = document.getElementById("testholder")
     testholder.classList.add("testholder_active")
  
  }
}

burgerMenu (document.getElementById("burger-menu"))






