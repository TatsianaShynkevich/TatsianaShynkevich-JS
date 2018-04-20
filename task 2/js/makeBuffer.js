function makeBuffer() {
	let storage = '';
	return function (value){
	if (value)  {
		storage += value;
		}
	else {
		return storage;
		}
	};
};

let buffer1 = makeBuffer();

buffer1('Замыкания');
buffer1(' Использовать');
buffer1(' Нужно!');
console.log(buffer1()); 

let buffer2 = makeBuffer();

buffer2('0');
buffer2('1');
buffer2('0');
console.log(buffer2());