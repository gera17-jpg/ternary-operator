//*Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let result;
let a = prompt('Give value for a','');
let b = prompt('How about b?','');

result = (parseInt(a) + parseInt(b) < 4) ? alert('Below') : alert('Above');


//Rewrite if..else using multiple ternary operators '?'.

//For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


let message = (login === 'Employee')? 'Hello' :
              (login==='Director')? 'Grettings Director' :
              (login==='') ? 'No login':
              '';
