
//Part 8.1
/*
class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
	if (Math.random() < 0.2) {
		return a * b;
	} else {
		throw new MultiplicatorUnitFailure("Klunk");
	}
}

function reliableMultiply(a, b) {
	for (; ;) {
		try {
			return primitiveMultiply(a, b)
		} catch (e) {
			if (!(e instanceof MultiplicatorUnitFailure)) {
				throw e;
			}
		}
	}

}

console.log(reliableMultiply(8, 8));
// → 64 */

// Part 8.2 

/* const box = {
	locked: true,
	unlock() { this.locked = false; },
	lock() { this.locked = true; },
	_content: [],
	get content() {
		if (this.locked) throw new Error("Locked!");
		return this._content;
	}
};

function withBoxUnlocked(body) {
	// Your code here.
}

withBoxUnlocked(function () {
	box.content.push("gold piece");
});

try {
	withBoxUnlocked(function () {
		throw new Error("Pirates on the horizon! Abort!");
	});
} catch (e) {
	console.log("Error raised: " + e);
}
console.log(box.locked); */
// → true

console.log(null == undefined)
let Dam = 5
let dam = 6
console.log(Dam)
console.log(dam)
console.log(typeof 1n)
console.log(Number.isFinite('0'))