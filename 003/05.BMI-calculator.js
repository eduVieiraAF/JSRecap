
/*
    * Body Mass Index
    it's a way of describing the body's ideal weight
    based on the body's height

    BMI = weight / height^2

    BMI < 18.5 = underweight
    18.5 < BMI < 25 = normal
    25 < BMI < 30 = overweight
    BMI > 30 = obese

*/

const weight = 76;
const height = 1.66;

const BMI = Number(weight / (height * height)).toFixed(2);

console.log(BMI)

switch (true) {
    case BMI < 18.5:
        console.log('underweight');
        break;
    case BMI >= 18.5 && BMI <= 25:
        console.log('normal');
        break;
    case BMI > 25 && BMI <= 30:
        console.log('overweight');
        break;
    case BMI > 30:
        console.log('obese');
        break;
    default:
        console.log('invalid');
        break;
}