/*---------------1------Homework--------------------------------------*/

"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult (a,b,c){
	let dis = Math.pow(b, 2)-4*a*c;
	if (dis < 0){
	return [];
	}
		else if (dis===0){
			return [(-b + Math.sqrt(dis))/ (2*a)];
		
		}
		else if (dis>0){
			let first = (-b + Math.sqrt(dis))/ (2*a);
			let second = (-b - Math.sqrt(dis))/ (2*a);
			return[first, second];
		}
}

/*---------------2------Homework--------------------------------------*/

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let evaluation;
	if (marks.length > 5) {
		console.log ("Вы указали больше 5 оценок, максимально допустимо 5 оценок");
		evaluation = marks.slice(0, 6);
		}
		else {
			evaluation = marks;
	}
	let amount = 0;
	for (let mark of evaluation) {
		amount += mark;
  }

  return amount / evaluation.length;
}

/*---------------3------Homework--------------------------------------*/

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}
