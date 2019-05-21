class Trivial {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.players = [];
        this.currentPlayerIndex = 0;
    }

    askQuestion() {
        let question = this.questions[this.currentQuestionIndex];
        let player = this.players[this.currentPlayerIndex];
        let reply = window.prompt(`Question for ${player.name}:\n ${question.title}`, question.choices);
        
        if (reply.toUpperCase() === question.correctAns) {
            this.correctAnswers++;
        } else {
            this.wrongAnswers++;
        } 

        if (this.currentPlayerIndex === this.players.length - 1) {
            this.currentPlayerIndex = 0;
        } else {
            this.currentPlayerIndex++;
        }
        return reply;
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

    addAnswer() {

    }
}

const question1 = new Question('Capital of France is', ['A - Paris', 'B - Rome'], 'A');
const question2 = new Question('Capital of Belarus is', ['A - Minsk', 'B - Milan'], 'A');
const question3 = new Question('The author of Harry Potter is', ['A - Astrid Lindgren', 'B - Joanne Rowling'], 'B');
const question4 = new Question('Who won Eurovision 2019?', ['A - Duncan Laurence', 'B - Sergey Lazarev'], 'A');
const trivial = new Trivial();
trivial.addQuestion(question1);
trivial.addQuestion(question2);
trivial.addQuestion(question3);
trivial.addQuestion(question4);
const player1 = new Player('Amy');
trivial.addPlayer(player1);
const player2 = new Player('Bob');
trivial.addPlayer(player2);
trivial.play() // you should get a prompt with 'Capital of France' and its choices.
