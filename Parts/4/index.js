'use strict'

//Part 4.1

/* let range = (start, end, step = 1) => {
	let arr = []
	if (step > 0) {
		for (let i = start; i <= end; i += step) {
			arr.push(i)
		}
	} else {
		for (let i = start; i >= end; i += step) {
			arr.push(i)
		}
	}
	return arr
}
console.log(range(1, 10, 1))

let sum = arr => {
	let k = 0;
	for (let num of arr) {
		k += num
	}
	return k
}
console.log(sum(range(1, 10, 2))) */

//Part 4.2

/* let reverseArray = arr => {
	let revArray = []
	for (let i = arr.length - 1; i >= 0; i--) {
		revArray.push(arr[i])
	}
	return revArray;
}

let reverseArrayInPlace = arr => {
	let k = arr.length
	for (let i = k - 1; i >= 0; i--) {
		arr.push(arr[i])
	}
	arr.splice(0, k)
	return arr
} */

//Part 4.3

/* let arrayToList = arr => {
	let list = null
	for (let i = arr.length - 1; i >= 0; i--) {
		list = { value: arr[i], rest: list }
	}
	return list
}

let listToArray = list => {
	let arr = []
	do {
		arr.push(list['value'])
		list = list['rest']
	}
	while (list !== null)
	return arr
}

let prepend = (elem, list) => {
	list = { value: elem, rest: list }
	return list
}

let nth = (list, num) => {
	if (!list) return undefined
	if (num == 0) return list['value']
	return nth(list['rest'], num - 1)
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20 */

//Part 4.4

/* let deepEqual = (value1, value2) => {
	if (typeof value1 !== "object" && typeof value2 !== "object" || value1 === null || value2 === null) {
		return (value1 === value2)
	} else {
		if (Object.keys(value1).length !== Object.keys(value2).length) { return false } else {
			for (let i = 0; i <= Object.keys(value1).length; i++) {
				let v1 = Object.values(value1)[i]
				let v2 = Object.values(value2)[i]
				let k1 = Object.keys(value1)[i]
				let k2 = Object.keys(value2)[i]
				if (typeof v1 === 'object' && typeof v2 === 'object' && k1 == k2) {
					deepEqual(v1, v2)
					if (!deepEqual(v1, v2)) return false
				} else {
					return ((v1 === v2) && (k1 === k2)) ? true : false
				}
			}
		}
	}
}

let deepEqual1 = (value1, value2) => {
	return ((JSON.stringify(value1)) === (JSON.stringify(value2)))
}

var obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual1(obj, obj));
// → true
console.log(deepEqual1(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual1(obj, { here: { is: "an" }, object: 2 }));
// → true */



