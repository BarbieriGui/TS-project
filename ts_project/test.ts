
interface Color {
    getColor(): string;
}

interface Weight {
    getWeight(): string;
}

class Appliance {
    public type: string = 'something';
}

class WashingMachine extends Appliance implements Color {

    public color: string = 'white';

    public getColor(): string {
        return this.color;
    }

}

abstract class Vehicle {
    public power: number = 0;

    public maxSpeed: Number = 0;

    public constructor(power: number) {
        this.power = power;
    }

    public characteristics(): string {
        return 'Speed ' + this.maxSpeed + ', Power ' + this.power;
    }

    abstract numberOfWheels(): number;
}

class Moto extends Vehicle {
    public windshield: boolean = false;

    public kneeProtector: boolean = false;

    public constructor() {
        super(3)
    }

    public numberOfWheels(): number {
        return 2;
    }
}

class Car extends Vehicle implements Color, Weight {
    public doors = 5;

    public color: string = 'red';

    public constructor() {
        super(5)
    }

    public getWeight(): string {
        throw 'very much big and heavy';
    }

    public getColor(): string {
        return this.color;
    }

    public numberOfWheels(): number {
        return 4;
    }

    public characteristics(): string {
        return super.characteristics() + ', Doors: ' + this.doors;
    }
}

const veiculo: Vehicle = new Car();
const color: Color = new WashingMachine();

console.log(color.getColor());



