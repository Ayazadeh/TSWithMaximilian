// union types, type1 | type2
// literal types, 'as-number' | 'as-text'
function combine(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text') {
	let result;
	if (typeof input1 === "number" && typeof input2 === "number") {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	if (resultType === "as-number") {
		return +result;
	} else {
		return result.toString();
	}
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Mohammad", " Ayazadeh", "as-text");
console.log(combineNames);
