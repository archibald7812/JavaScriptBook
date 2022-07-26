'use strict'
//Part 5.1

/* let arrays = [[1, 2, 3], [4, 5], [6]];

let concatArrays = arr => {
	return (arr.reduce((flat, current) => flat.concat(current), []))
}

console.log(concatArrays(arrays)) */

//Part 5.3

/* let every = (arr, func) => {
	for (let value of arr) {
		if (!func(value)) return false
	}
	return true
}

let some = (arr, func) => {
	if (arr.some(func)) return true
	return false
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false */

//Part 5.4

/* let dominatDirection = (str) => {
	let l = 0
	let r = 0
	let t = 0
	for (let n of str) {
		stringDirection.getDirection(n) == 'ltr' ? l++ : stringDirection.getDirection(n) == 'rtl' ? r++ : t++
	}
	return Math.max(l, t, r) === l ? 'ltr' : Math.max(l, t, r) === r ? 'rtl' : 'ttb'
}

console.log(dominatDirection('sddsfsdfsdf')) */
