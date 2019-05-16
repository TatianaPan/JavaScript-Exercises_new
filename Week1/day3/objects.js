// Constructor pattern

class Event {
    constructor (location, date, assistants) {
        this.location = location;
        this.date = date;
        this. assistants = assistants;
    }
}

Event.prototype.printInvitation = function(name) {
    console.log(`Hello, ${name}!\n We are happy to invite you to our conference, that will be held in ${this.location} on the ${this.date.day}.${this.date.month}.${this.date.year}.`)
}

Event.prototype.confirmAssistance = function(name) {
    if (confirm(`Hi, ${name}! Will you assist at our event?`)) {
        this.assistants.push(name);
    }
}

Event.prototype.printAssistants = function() {
    console.log(`The assistants during our event are:`)
        for (let assistant of this.assistants) {
            console.log(assistant);
        }
}

class Date {
    constructor (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

class FamilyReunion extends Event {
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


// Factory pattern

// function eventFactory(location, date, assistants) {
//     const obj = {};
//     obj.location = location;
//     obj.date = date;
//     obj.assistants = assistants;

//     obj.printInvitation = function(name) {
//         console.log(`Hello, ${name}!\n We are happy to invite you to our conference, that will be held in ${this.location} on the ${this.date.day}.${this.date.month}.${this.date.year}.`)
//     }

//     obj.confirmAssistance = function(name) {
//         if (confirm(`Hi, ${name}! Will you assist at our event?`)) {
//             this.assistants.push(name);
//         }
//     }

//     obj.printAssistants = function() {
//         console.log(`The assistants during our event are:`)
//         for (let assistant of this.assistants) {
//             console.log(assistant);
//         }
//     }

//     return obj;
// }

// // OLOO

// const EventOLOO = {
//     init: function (location, date, assistants) {
//         this.location = location;
//         this.date = date;
//         this.assistants = assistants;
//     },

//     printInvitation: function(name) {
//         console.log(`Hello, ${name}!\n We are happy to invite you to our conference, that will be held in ${this.location} on the ${this.date.day}.${this.date.month}.${this.date.year}.`)
//     },

//     confirmAssistance: function(name) {
//         if (confirm(`Hi, ${name}! Will you assist at our event?`)) {
//             this.assistants.push(name);
//         }
//     },

//     printAssistants: function() {
//         console.log(`The assistants during our event are:`)
//         for (let assistant of this.assistants) {
//             console.log(assistant);
//         }
//     }
// }

// const event2 = Object.create(EventOLOO);
// event2.init('Zürich', new Date(2025, 11, 17), ['Llorenç', 'Colin', 'Laurent']);
// event2.printAssistants();

// const event3 = eventFactory('Zürich', new Date(2025, 11, 17), ['Llorenç', 'Colin', 'Laurent']);

// const event1 = new Event('Zürich', new Date(2025, 11, 17), ['Llorenç', 'Colin', 'Laurent']);

// event2.printAssistants();
// event2.printInvitation('Kate');
// event2.confirmAssistance('Jack');
// event2.printAssistants();

