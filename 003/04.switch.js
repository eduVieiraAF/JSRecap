
/*
    * Switch statement:
    it is similar to if else but with more options
*/

/*
    January
    February
    March
    April
    May
    June    
    July
    August
    September
    October
    November
    December
*/

// ! using if else

let month = 5;

// if (month === 1) {
//     console.log('January');
// } else if (month === 2) {
//     console.log('February');
// } else if (month === 3) {
//     console.log('March');
// } else {
//     console.log("that's way too long");
// }


// * using switch

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        return console.log('May');
    case 6:
        return console.log('June');
    case 7:
        console.log('July');
        break;
    default:
        return console.log("You get the point");    
}