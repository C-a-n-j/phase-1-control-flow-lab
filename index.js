// function scuberGreetingForFeet(dis){
//   let result
//   if (dis<=400){
//     result = 'This one is on me!';
//   }
//   else if (400 >= 2000){
//     result = 'That will be $20 dollars.';
//   }
//   else if(2000 >= 2500){
//     result = 'That will be $30 dollars'
//   }
//   else{
//     resut = "Does not allow reides over 2500 feet.";
//   }


// }

function scuberGreetingForFeet(distance){
  let result;
  if(distance <= 400){
    result='This one is on me!';
  }
  else if(distance > 400 && distance <= 2000){
    result='That will be twenty bucks.';
  }
  else if(distance > 2000 && distance <= 2500){
    result = 'I will gladly take your thirty bucks.';
  }
  else if(distance > 2500){
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(City){
let result;
if(City == 'NYC'){
  result = 'Ok, sounds good.'
}
else if (City != 'NYC')
{
  result = 'No go.'
}
return result;
}

function switchOnCharmFromTip(generous){
  let result;
  if(generous == "generous"){
    result = 'Thank you so much.'
  }
  else if (generous == 'not as generous'){
    result = 'Thank you.'
  }
  else{
    result = 'Bye.'
  }
  
  return result;
}