class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAlive = true;
    }
    greet () {
        console.log(`Hello this is ${this.firstName} ${this.lastName}`);
    }

}

class Writer extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName) 
    }
    pseudonym() {
        return this.firstName.split('').reverse().join('') + ' ' + this.lastName.split('').reverse().join('');
        
    }

    signBook() {
        console.log(this.pseudonym());
    }
}

class Developer extends Person {
    constructor(firstName, lastName, codeName) {
        super(firstName, lastName)
        this.codeName = codeName;
    }
    impress() {
        console.log(`010101\n 010101\n 010101\n 010101\n 010101\n ${this.codename}`)

    }
}

class Singer extends Person {
    constructor(firstName, lastName, melody) {
        super(firstName, lastName)
        this.melody = melody;
    }
    artisticName() {
        console.log(`Fancy ${this.firstName} fancy ${this.lastName}`);
    }

    sing() {
        console.log(`${this.melody} ${this.melody} ${this.melody}`);
    }
}

class JuniorDeveloper extends Developer {
    constructor(firstName, lastName, codeName) {
        super(firstName, lastName, codeName)
        this.isStruggling = true;
    }

    complain() {
        console.log(this.codeName.toUpperCase());
    }

    workHard() {
        for (let i = 0; i < 10; i++) {
            console.log(`${this.codeName} is working hard`);
        }
    }
}
        

const laurent = new Developer('Laurent', 'Hoxhaj', 'Ping Pong King');
const author = new Writer('Ernst', 'Schmidt');
const luciano = new Singer('Luciano', 'Pavarotti', 'blablabla');
const junior = new JuniorDeveloper('Mark', 'Sommerhalder', 'Baloo');
luciano.sing();
junior.workHard();
author.signBook();
laurent.impress();

console.log(Person);