var elMator = document.querySelector("#mator")
var elBattery = document.querySelector("#akkumlyator")
var elWindow = document.querySelector("#oyna")
var elDoor = document.querySelector("#eshik")

var elBtn = document.querySelector(".yurdi")
var elStop = document.querySelector(".yurmaydi") 
elStop.style.display = "none"


elBtn.addEventListener("click", function(e){
  e.preventDefault();
  var MatorCheck = elMator.checked
  var BatteryCheck = elBattery.checked
  var WindowCheck = elWindow.checked
  var DoorCheck = elDoor.checked
  var message = ""
 

  if((MatorCheck) || (BatteryCheck && WindowCheck  && DoorCheck)){
   message = "Mashina yurmaydi"
   elStop.style.color = "red"
   elStop.style.display = "block"
  }else {
    message = "Mashina yuradi"
    elStop.style.color = "blue"
  }

   
  elStop.textContent = message
  console.log(message);
  })
 