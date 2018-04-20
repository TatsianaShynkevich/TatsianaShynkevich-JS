function switchCase(string) {
		
		let result = [];
		for ( let i =0; i < string.length; i++){
			if(string[i].toLowerCase() == string[i])
			{

			  result.push(string[i].toUpperCase());
			} else {
	
			  result.push(string[i].toLowerCase());
			}
		}
		return result.join('');
}	
console.log(switchCase('tHE qUICK bROWN fOX'));