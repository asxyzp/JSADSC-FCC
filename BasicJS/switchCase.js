//Understanding switch case statements
// By asxyzp (Aashish Loknath Panigrahi)

//Switch case with default case
function switchOfStuff(val) {
  var answer = "";
  switch(val){
      case "a":
      answer = "apple";
      break;
  case "b":
      answer = "bird";
      break;
  case "c":
      answer = "cat";
      break;
  default:
      answer = "stuff";
      break;
  }

  return answer;
}

switchOfStuff(1);

//Multiple identical options in switch-case
function sequentialSizes(val) {
  var answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    
  }

  return answer;
}
sequentialSizes(1);

