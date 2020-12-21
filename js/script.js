var nomeBurger = document.getElementsByClassName('primo-testo')[0];
var codeSconto = document.getElementsByClassName('secondo-testo')[0];
var testoMessaggio = 'Ciao!';


document.getElementById('button-submit').addEventListener("click", function() {
 testoMessaggio += 'Il valore del primo input é ' + nomeBurger.value;
  testoMessaggio += 'Il valore del secondo input é ' + codeSconto.value;
 alert(testoMessaggio)
})
