//Switch statements are easier to write than chained else/if statements.

function chainToSwitch(val) {
  let answer = "";
   switch(val){
     case "bob":
       answer = "Marley";
       break;
    case 42:
       answer = "The Answer";
       break;
    case 1:
        answer = "There is no #1";
        break;
    case 99:
     answer = "Missed me by this much!";
      break;
  case 7:
    answer ="Ate Nine";
    break;
  case "John":
    answer = "" ;
    break;

   }
  
  return answer;
}

chainToSwitch(7);
