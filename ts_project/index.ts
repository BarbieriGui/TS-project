// using nodemon to auto-restart the node app. run < $ nodemon index.ts > and be happy :)

// object customer
class Supervisor {
    static headcount: number = 0;

    // modeling object
    constructor(
        private id: number,
        public fName: string,
        public lName: string,
        private email: string,
    ) {
        // to access » className.propertyName
        Supervisor.headcount++;
    }
}

// headcount implements itself by 1, for each new object created.
let mike = new Supervisor(0, 'Mike', 'Tester', 'mtester@test.com');
let nina = new Supervisor(1, 'Nina', 'Tester', 'ntester@tester.org');
let coisa = new Supervisor(2, 'Coisa', 'Coisas', 'ccoisas@tester.com');

// print customer count in terminal
console.log(Supervisor.headcount);

// custom objct snippet 
/*
class ClassName {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public salary: number,
)
}
*/
// create new object Employee extinding the Customer object to inherit its functionalities
class Employee extends Supervisor {
    constructor(
        id: number,
        fName: string,
        lName: string,
        email: string,
        protected salary: number,
    ){
        super(id, fName, lName, email);
    }
    getSalary(): number {
        return this.salary;
    }
    salaryInfo(): string {
        return `${this.fName} makes ${this.getSalary()} a month.`;
    }
    presentEmployee(): string {
        return `This is ${this.fName} ${this.lName}.`
    }
}

let john = new Employee(0, 'John', 'Albert', 'jalbert@test.com', 1500);
let rafaela = new Employee(0, 'Rafaela', 'Albert', 'ralbert@test.com', 2500);

console.log(rafaela.getSalary());
console.log(john.salaryInfo());
// since employee is a child class, headcount consider the total of objects
console.log(Employee.headcount);

// create an interface function to format console output text
interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;
format = function (
    str: string,
    isUpper: boolean,
) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

// format testing
console.log(format('Hi', true));
console.log(format(rafaela.presentEmployee(), true));
console.log(format('AND', false));
console.log(format(john.presentEmployee(), false));

// async & await function
function wait(timeToWait: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resolve);
        }, timeToWait);
    });
}

async function waitApp() {
    await wait(400);
    console.log('wait 400 msec');
    await wait(1000);
    console.log('wait 1000 msec');
}

waitApp();

// array snippet (bam)
let sequence: number[];

// func snipplet (fm)
function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a* b * c;
    }
    return a * b;
}

// assigning a func from snipplet (fs) to a variable
let soma: (a: number, b: number) => number;
soma = function (a: number, b: number) {
    return a + b;
};

console.log(multiply(2, 2));
console.log(soma(10, 20));