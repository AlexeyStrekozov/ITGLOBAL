// Задание 1
let citys = ["Москва", "Курган", "Караганда", "Алмата", "Астана",  "Севастополь"];
//Функция вернет любой массив через запятую в конце поставит точку
function enumerationCity(arrayCitys) {
  let divListOfCities = document.createElement('div');
  divListOfCities.innerHTML = arrayCitys + ".";
  document.body.append(divListOfCities);
}

enumerationCity(citys);

// Задание 2
function roundToFive(number) {
    Math.round(number);
    var b = number % 5;

    if(b < 2.70) {
       b && (number = number - b);
    } else {
      b && (number = number - b + 5);
    }

    return number;
};
console.log(roundToFive(27));
console.log(roundToFive(27.8));

// Задание 3
// function declension(number){
//   if(number >= 5 && number <= 20){
//
//   }
// }
// declension(21.1)

// Задание 4
function prime(number) {
  var primeNumber = Math.round(number);
  var prime = primeNumber != 1;
  for(var i = 2; i < primeNumber; i++) {
    if(primeNumber % i == 0) {
      prime = false;
      break;
    }
  }

  if(prime) {
    console.log(primeNumber + " не имеет делителей кроме 1 и самого себя");
  }else if (primeNumber == 1) {
    console.log("Один это один");
  } else {
    console.log(primeNumber + " не простое число");
  }
};

prime(7);
