// mobile=45000
// if(mobile <40000){
//     console("it is iphone")

// } else{
//     console("No it is some others brand")
// }


// // age=18
// //  message = age < 16 ? "you are minor":"you are major";
// // // console.log(message)

// // console.log(message)


// // num=16
// // cal=(num%2=0)?"true":"false"

today=new Date().getDay();
console.log(today)
switch(today){
    case 0 :
        console.log("today is sunday")
        break;
    case  1:
        console.log('monday')
        break;
       case 2 :
        console.log("tuesday")
        break;
        case 3 :
            console.log("wednesday")
            break;
            case 4:
                console.log("thursday")
                break;
                case 5 :
                    console.log("friday")
                    break;
                  case 6 :
                    console.log("saturday")
                    break;
                  case 7 :
                    console.log("sunday")
                    break;     
        default:
            console.log("no data found")
}


