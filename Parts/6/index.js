'use strict'

//Part 6.1

/* class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	plus(vec) {
		let dX = vec.x + this.x
		let dY = vec.y + this.y
		return new Vector(dX, dY)
	}
	minus(vec) {
		let dX = this.x - vec.x
		let dY = this.y - vec.y
		return new Vector(dX, dY)
	}
	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5 */

// Part 6.2, 6.3

/* class Group {
	constructor() {
		this.group = []

	}

	add(value) {
		if (!this.has(value)) {
			this.group.push(value)
		}
	}

	delete(value) {
		this.group = this.group.filter(v => v !== value);
	}

	has(value) {
		for (let v of this.group) {
			if (value === v) return true
			return false
		}
	}

	static from(obj) {
		let group = new Group;
		for (let v of obj) {
			group.add(v)
		}
		return group
	}
	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}
class GroupIterator {
	constructor(group) {
		this.group = group;
		this.position = 0;
	}
	next() {
		if (this.position >= this.group.group.length) {
			return { done: true };
		} else {
			let result = {
				value: this.group.group[this.position],
				done: false
			};
			this.position++;
			return result;
		}
	}
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
} */

//Part 6.4

/* 
let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
console.log(map['hasOwnProperty']);
// → true */
