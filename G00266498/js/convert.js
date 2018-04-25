function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  
  
  var message = amount + ' euro to pounds ' + pounds + ' sterling.';
//  cansole.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}



