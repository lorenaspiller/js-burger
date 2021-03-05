// 1. aggiungo evento click sul bottone

var calculate = document.getElementById('calculate');
var nameInput = document.getElementById('name__input')

calculate.addEventListener("click",
  function() {
    // console.log(calculate);
    //2. controllo se è stato inserite il nome del burger
    if (nameInput.value != "") {
      // console.log(nameInput.value);
    } else {
      alert("Name your burger first!");
    }

  }
);
