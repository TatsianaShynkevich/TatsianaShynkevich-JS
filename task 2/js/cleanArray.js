function cleanArray(sampleArr) {
	let result = [];
	for (let i = 0; i < sampleArr.length; i++) {
		if (sampleArr[i]) {
			result.push(sampleArr[i]);
		}
	}
	return result;
}
console.log(cleanArray([NaN, 0, 15, false, -22, '',undefined, 47, null]));