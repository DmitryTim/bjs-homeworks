/*-----------1--Задание------------*/
"use strict"
function getSolution (a,b,c){
	let D = b**2-4*a*c;
	let x1,x2;
	if (D < 0) {
	return {D};
}    
	  else if (D === 0) {
		x1 = -b / (2 * a);
	  return { roots: {x1}, D};
	}
	  else if (D > 0) {
		x1 = (-b - Math.sqrt(D)) / (2 * a);
		x2 = (-b + Math.sqrt(D)) / (2 * a);
	  return { roots: {x1, x2}, D};
	}
}

function showSolutionsMessage(a,b,c) {
  let result = getSolution(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if(result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D == 0 ) {
    console.log(`Уравнение имеет один корень: X1=${result.roots.x1}`);
  } else if (result.D > 0 ) {
    console.log(`Уравнение имеет два корня: X1=${result.roots.x1}, X2=${result.roots.x2}`);
  }  
}
showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);


/*-----------2--Задание------------*/
function getAverageScore( data ) {
  let result = new Object();
  let avgVal = function ( dat ) {
    let mySum = 0;
    for (let i=0; i<dat.length; i++) {
      mySum += dat[i];
    }
    return (dat.length>0)?mySum / dat.length:0;
   };
  let resultArray = [];
  for (let prop in data ) {
    result[prop] = avgVal(data[prop]);
    resultArray.unshift(avgVal(data[prop]));
   }
   result.average = avgVal(resultArray);
  return result;
}
console.log(getAverageScore(
{
  algebra:[2,4,5,2,3,4],
  geometry:[2,4,5],
  russian:[3,3,4,5],
  physics:[5,5],
  music:[2,2,6],
  english:[4,4,3],
  poetry:[5,3,4],
  chemistry:[2],
  french:[4,4]
}
));

/*-----------3--Задание------------*/

function getPersonData(secretData) {
	function nameOfPirate(num) {
		let name = num == 1 ? 'Эмильо' : 'Родриго';
		return name;
	}

	let result = {};

	result.firstName = nameOfPirate(secretData.aaa);
	result.lastName = nameOfPirate(secretData.bbb);

	return result;
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));
