interface vehicle {
	wheel: number;
	fuel: string;
	color: number;

	getwheel(): number;
	getfuel(): string;
	getcolor(): number;

	setwheel(wheel:number): void;
	setfuel(fuel:string): void;
	setcolor(color:number): void;
}

class car implements vehicle{
	wheel: number;
	fuel: string;
	color: number;

	constructor(){}

	getwheel(): number{
		return this.wheel;
	}
	getfuel(): string{
		return this.fuel;
	};
	getcolor(): number{
		return this.color;
	};

	setwheel(wheel: number): void{
		this.wheel = wheel;
	}
	setfuel(fuel: string): void{
		this.fuel = fuel;
	}
	setcolor(color:number): void{
		this.color= color;
	}
}

var Car = new car();

car.setcolor(55);
console.log(car.getcolor());