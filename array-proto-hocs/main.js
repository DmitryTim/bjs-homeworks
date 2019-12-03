"use strict";

const compareArrays = function(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every(function(el, i) {
      return el === arr2[i];
    })
  );
};

function memoize(fn, limit) {
  const memory = [];
  let i = 0;

  return function() {
    let args = Array.from(arguments);
    const checkAviabl = memory.find(x => compareArrays(x.arg, args));
    let resultCalc;

    console.log(`Функция выполнялась ${fn.name} ${++i} раз(a)`);
    console.log(memory);

    if (checkAviabl === undefined) {
      let resultCalc = fn.apply(null, args);
      console.log(
        `Функция вызвана НЕ из памяти. Вот какой результат вычисления: ${resultCalc}`
      );
      memory.push({ arg: args, result: resultCalc });
      if (memory.length > limit) {
        memory.shift();
      }
    } else {
      let resultCalc = checkAviabl.result;
      console.log(`Функция вызвана из памяти. Ответ: ${checkAviabl.result}`);
    }
    return resultCalc;
  };
}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 4);

let test = memoize((a, b, c) => a + b + c, 3);
test(3, 3, 1);
mSum(3, 4); 
mSum(4, 4); 
mSum(1, 6); 
mSum(5, 2);
mSum(1234, 8765);
console.log(mSum(1, 6));
const func = memoize((a, b, c) => a + b + c, 3);
func(1, 6, 11);
func(4, 4, 3);
func(27, 5, 5);
func(4, 5, 3);
mSum(2333, 7666); 
test(1, 3, 3);
