
/* Вирішення №1 */


alert('Калькулятор');

const whatDo = (prompt('add (+), sub (-), mult (/), div(*)'));

const firstNumber = +(prompt('Вкажіть першу цифру'));

const secondNumber = +(prompt('Вкажіть другу цифру'));
if(whatDo == '-' || whatDo == 'sub' ){
    sum = firstNumber - secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'-' + secondNumber + '=' + sum);
}else if(whatDo == '+' || whatDo == 'add'){
    sum = firstNumber + secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'+' + secondNumber + '=' + sum);
}else if(whatDo == '*' || whatDo == 'div'){
    sum = firstNumber * secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'*' + secondNumber + '=' + sum);
}else if(whatDo == '/' || whatDo == 'mult'){
    sum = firstNumber / secondNumber;
    alert('А ось і ваш результат : '+firstNumber +'/' + secondNumber + '=' + sum);
}








/* Вирішення №2; */


/* const whatDo = prompt('add (+), sub (-), mult (/), div(*)');

const firstNumber = prompt('Введіть перше число');
const secondNumber = prompt('Введіть друге число');

const firstConversion = Number(firstNumber);
const secondConversion = Number(secondNumber);

const addSum = firstConversion + secondConversion;
const subSum = firstConversion - secondConversion;
const divSum = firstConversion / secondConversion;
const multSum = firstConversion * secondConversion;

alert('Ваш резуьтат--> ' + firstNumber + '+' + secondNumber + '=' + addSum);
alert('Ваш резуьтат--> ' + firstNumber + '-' + secondNumber + '=' + subSum);
alert('Ваш резуьтат--> ' + firstNumber + '/' + secondNumber + '=' + divSum);
alert('Ваш резуьтат--> ' + firstNumber + '*' + secondNumber + '=' + multSum); */

/// ХХХХ ///








