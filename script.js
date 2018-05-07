console.log("wow")



fibonacci =  (number, returnList) => {
	let fibArr = [0,1]
	for(var i = 0; i<number-2; i++){
		let nextNumber = fibArr[i] + fibArr[i+1]
		fibArr.push(nextNumber)
	}

	if (returnList === true){
		return fibArr[number-1], fibArr;
	}

	if (returnList === false){
		return fibArr[number-1]
	}
}


// function fibonacci(n) {
//     if (n === 1) return 0;
//     if (n === 2) return 1;


//     return fibonacci(n - 2) + fibonacci(n - 1);
// }