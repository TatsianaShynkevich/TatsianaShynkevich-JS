function joinToString(array, divider) {
		let arrString = '';
		for (let i = 0; i <array.length; i++) {
			if ( i === array.length-1) arrString += array[i];
			else arrString += array[i] + divider;
		}
		return arrString;
	}
	let array = ['green', 'blue', 'violet'];	
	console.log(joinToString(array, '#'));