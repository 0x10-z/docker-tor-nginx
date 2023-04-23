
var consoleContent = document.getElementById("console-content");
var consoleInput = document.getElementById("console-input");
var consoleForm = document.getElementById("console-form");

var finished = false;
var message = "Hola, Neo. ¿Estás preparado para entrar en Matrix? 💊";
var i = 0;
  
function writeMessage() {
    var word = message.charAt(i);
    consoleContent.innerHTML += word;
    i++;
    if (i < message.length) {
      consoleInput.disabled = true;
      setTimeout(writeMessage, 40 * speed);
    } else {
      consoleContent.innerHTML += "<br><br>";
      consoleInput.disabled = false;
      consoleInput.focus();
      i=0;
    }
}

function restoreFocus() {
  consoleInput.focus();
}

consoleInput.addEventListener("blur", restoreFocus);
document.addEventListener('click', restoreFocus);

consoleForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var comando = consoleInput.value;
  consoleInput.value = "";

  consoleContent.innerHTML += "<span class='comando'>> " + comando + "</span><br>";

  writerSimulator(comando);
});

function writerSimulator(comando) {
  if (!finished && comando.toLowerCase().includes("si")){
    message = "🔴 Has escogido la pastilla roja. Estoy seguro que no te arrepentirás. Tomala y descansa. Mañana, al despertar, podrás darle la bienvenida al mundo real.";
    finished = true;
  }else if(!finished){
    message = "Vaya, no eres el primero que ha escogido la pastilla azul 🔵. Como dice el dicho, en la ignorancia está la felicidad.";
    finished = true;
  }else if(finished){
    message = "Descansa 🛏️, Neo.";
  }

  writeMessage();
}