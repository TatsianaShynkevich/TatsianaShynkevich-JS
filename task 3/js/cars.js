function Car (factory, wheelsAmount, carrying){
	this.factory = factory;	
	this.wheelsAmount = wheelsAmount;
	this.carrying = carrying;
}

function Model (factory, wheelsAmount, carrying, model, price, body, maxSpeed){
	Car.apply(this, arguments);
	this.model = model;
	this.price = price;
	this.body = body;
	this.maxSpeed = maxSpeed;
}

Model.prototype = Object.create(Car.prototype);
Model.prototype.constructor = Model;

function PrivateCar (factory, wheelsAmount, carrying, model, price, body, maxSpeed, mileage, insuranceNumber, inspectionDate){
	Model.apply(this, arguments);
	this.model = model;
	this.price = price;
	this.body = body;
	this.maxSpeed = maxSpeed;
	this.mileage = mileage;
	this.insuranceNumber = insuranceNumber;
	this.inspectionDate = inspectionDate;
}

PrivateCar.prototype = Object.create(Model.prototype);
PrivateCar.prototype.constructor = PrivateCar;
PrivateCar.prototype.carInfo = function(){
	let info = '';
	return  info  = "It's " + this.model + " with mileage " + this.mileage + " km" + " that costs " + this.price + "$ ";
}


const zhiguli = new PrivateCar('Vaz', 4, 2000, 'zhiguli', 1000, 'sedan', 160, 5000000, '222f5f6', '12/02/2017');

console.log(zhiguli.carInfo());
