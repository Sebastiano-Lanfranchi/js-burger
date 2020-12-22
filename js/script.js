var nomeBurger = document.getElementsByClassName('primo-testo')[0];
var codeSconto = document.getElementsByClassName('secondo-testo')[0];
var prezzo = document.getElementsByClassName('list-checkbox')[0].getElementsByTagName('input');
var testoMessaggio = 'Ciao!';
var total = 0;

document.getElementById('button-submit').addEventListener("click", function() {
 testoMessaggio += nomeBurger.value;
  testoMessaggio += 'sconto del ' + codeSconto.value;

  for(var i = 0; i < prezzo.length; i++){
    if(prezzo[i].checked === true){
      total += parseInt(prezzo[i].value);
    }
  }
  outPut.innerText = total + '€';
})
