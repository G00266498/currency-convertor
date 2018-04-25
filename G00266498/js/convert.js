//Convert euro to pounds
function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  
  
  var message = amount + ' euro to pounds ' + pounds + ' sterling.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

//Convert euro to dollars 
function euroToDollars(){
//The variable amount is input by the user
  var amount = parseInt(document.getElementById("value1").value);

 //This variable make the conversion
  var dollars = amount * 1.06;
  
//This variable give the result on the screen
  var message = amount + ' euro to dollars ' + dollars + ' dollars.';
  console.log(message);
  document.getElementById("resultsentence1").innerHTML = message;

}

//Convert euro to japanese Yen
function euroToJapanesYen(){

  var amount = parseInt(document.getElementById("value1").value);

  var japaneseYen = amount * 121.12;
  
  
  var message = amount + ' euro to Yen ' + japaneseYen + ' Yen.';
  console.log(message);
  document.getElementById("resultsentence2").innerHTML = message;

}

//Convert euro to Bitcoin
function euroToBitcoin(){

  var amount = parseInt(document.getElementById("value1").value);

  var bitcoin = amount * 0.00082;
  
  
  var message = amount + ' euro to Bitcoin ' + bitcoin + ' bitcoin.';
  console.log(message);
  document.getElementById("resultsentence3").innerHTML = message;

}
