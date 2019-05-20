class Trivial {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.players = [];
    }

    askQuestion() {
        let question = this.questions[this.currentQuestionIndex];
        let reply = window.prompt(question.title, question.choices);
        if (reply.toUpperCase() === question.correctAns) {
            this.correctAnswers++;
        } else {
            this.wrongAnswers++;
            console.log('Oops! Wrong answer.')
        } 
    }

    play() {
        if (this.questions.length) {
            for (let question of this.questions) {
                this.askQuestion();
                this.currentQuestionIndex++;
            }
        } 
        window.alert(`You have answered ${this.questions.length} questions. You got right ${this.correctAnswers} of them.`)
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    addPlayer(player) {
        this.players.push(player);
    }
}

class Question {
    constructor(title, choices, correctAns) {
        this.title = title;
        this.choices = choices;
        this.correctAns = correctAns;
    }
}

class Player {
    constructor(name) {
        this.name = name;
    }
}

const question1 = new Question('Capital of France is', ['A - Paris', 'B - Rome'], 'A');
const question2 = new Question('Capital of Belarus is', ['A - Minsk', 'B - Milan'], 'A');
const question3 = new Question('The author of Harry Potter is', ['A - Astrid Lindgren', 'B - Joanne Rowling'], 'B');
const trivial = new Trivial();
trivial.addQuestion(question1);
trivial.addQuestion(question2);
trivial.addQuestion(question3);
const player1 = new Player('Amy');
trivial.addPlayer(player1);
const player2 = new Player('Bob');
trivial.addPlayer(player2);
trivial.play() // you should get a prompt with 'Capital of France' and its choices.
