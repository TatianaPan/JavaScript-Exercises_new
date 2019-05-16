class Student {
    constructor (name, major) {
        this.name = name;
        this.major = major;
        this.laziness = Math.random().toFixed(2);
    }
}

Student.prototype.greet = function() {
    console.log(`Wasaaaap broda??`);
}

const names = ['Paul', 'Ringo', 'Dicky', 'Darkholer', 'Daddy', 'Hardon', 'Ronn', 'Deep', 'Barbie', 'Muffin', 'Hermione', 'Snickers', 'Jedi'];