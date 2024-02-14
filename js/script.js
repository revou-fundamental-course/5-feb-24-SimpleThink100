document.getElementById("inputsuhu")
addEventListener('change',saatSuhuDiisi)
addEventListener("keyup",saatSuhuDiisi)
document.getElementById("tombolKonversi").
addEventListener("click",switchKonversi);


function konversiCtoF (C) {
    return Math.round((C/5*9+32+Number.EPSILON)*100)/100;
  }
  function konversiFtoC (F) {
return Math.round(((F-32)/9*5+Number.EPSILON)*100)/100;
}
var celcius = 0
var farenheit = 0
var bolAwalCelcius = true
let penjelasan =""

function switchKonversi (){
if(bolAwalCelcius==true)
{bolAwalCelcius=false;
document.getElementById("label1").innerHTML="°F";
document.getElementById("label2").innerHTML="°C";
document.getElementById("inputSuhu").value = farenheit;
saatSuhuDiisi();
}
else 
{bolAwalCelcius=true;
    document.getElementById("label1").innerHTML="°C";
    document.getElementById("label2").innerHTML="°F";
    document.getElementById("inputSuhu").value = celcius;
    saatSuhuDiisi();
}

}
function saatSuhuDiisi(){
if(document.getElementById("inputSuhu").value == ""){
    document.getElementById("textPenjelasan").value = ""
    return false;
    
}
else if(bolAwalCelcius==true)
{celcius = parseFloat(document.getElementById("inputSuhu").value).toFixed(2)
farenheit = konversiCtoF(celcius)
document.getElementById("outputSuhu").value = farenheit
penjelasan = celcius +"°C * ( 9 / 5 ) + 32 = "+farenheit+"°F"
document.getElementById("textPenjelasan").value = penjelasan
}
else
{farenheit=parseFloat(document.getElementById("inputSuhu").value).toFixed(2)
celcius=konversiFtoC(farenheit)
document.getElementById("outputSuhu").value =celcius
penjelasan = "( "+farenheit +"°F - 32 ) * ( 5 / 9 ) = "+celcius+"°C"
document.getElementById("textPenjelasan").value = penjelasan
}
}

var inputField = document.querySelector('#inputSuhu');
inputField.onkeydown = function(event) {
  // Only allow if the e.key value is a number or if it's 'Backspace'
  if(isNaN(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
};

