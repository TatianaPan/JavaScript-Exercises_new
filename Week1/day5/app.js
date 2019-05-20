class Game {
    constructor () {
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.ball = new Ball(canvas.width/2, canvas.height - 40, 5);
        this.blocks = [];
        this.createBlocks();
        this.paddle = new Paddle((canvas.width - 70)/2, canvas.height - 10, 80, 10);
        this.points = 0;
        
    }

    createCanvas() {
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, canvas.width, canvas.height);
    }

    createBlocks() {
        let column = 10;
        let row = 6;
        for (let i = 0; i < column; i++) {
            for (let j = 0; j < row; j++) {
                this.blocks.push(new Block(i * (40 + 10) + 7, j * (15 + 10) + 7, 
                40, 15, "#"+((1<<24)*Math.random()|0).toString(16)));       
            } 
        }
    }

    checkPaddleCollisions() {
        // check collision with paddle's top
        if ((this.ball.left()  > this.paddle.left()) 
                && (this.ball.right() < this.paddle.right()) 
                && (this.ball.bottom() >= this.paddle.top())) {
            this.ball.startMovingUp(); 
        }  else if (this.ball.left() < this.paddle.left() && this.ball.right() > this.paddle.left() 
                   && this.ball.bottom() >= this.paddle.top()) {
            this.ball.startMovingLeft();
            this.ball.startMovingUp(); 
        } else if (this.ball.left() < this.paddle.right() 
                  && this.ball.right() > this.paddle.right() && this.ball.bottom() >= this.paddle.top()) {
            this.ball.startMovingRight();
            this.ball.startMovingUp(); 
        }
    }

    areColliding(ball, block) {
        return ball.right() > block.left() && ball.left() < block.right()
        && ball.bottom() > block.top() && ball.top() < block.bottom();
    }

    checkBlockCollisions() {
        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i];
            let ball = this.ball;
            if (this.areColliding(ball, block)) {
                this.blocks.splice([i], 1);
                this.points++;
                if (ball.ballSpeed[1] < 0) {
                    ball.startMovingDown();
                } else if (ball.ballSpeed[1] > 0) {
                    ball.startMovingUp();
                }
                if (ball.ballSpeed[0] > 0) {
                    ball.startMovingLeft();
                } else if (ball.ballSpeed[0] < 0) {
                    ball.startMovingRight();
                }
            }
        }
    }

    renderScores() {
        this.context.fillStyle = 'white';
        this.context.font = '20px Tahoma';
        this.context.fillText(`Score: ${this.points}`, 200, 300);
    }

    playerLose = () => {
        if (this.ball.bottom() >= this.canvas.height) {
            console.log('Game is over'); // print Game is over to the console
            this.context.font = '60px Tahoma';
            this.context.fillText('Game is over!', 200, 250); // DOES NOT PRINT ON THE CANVAS
            return true;
        }
    }

    playerWin = () => {
        if (!this.blocks.length) {
            console.log('You won!');
            return true;
        }
    }

    isGameOver() {
        if (this.playerLose() || this.playerWin()) {
            return true;
        }
    }


    play() {
        const id = setInterval(function() {
            if (this.isGameOver()) {
                clearInterval(id);
            };
            this.checkPaddleCollisions();
            this.checkBlockCollisions();
            this.createCanvas();
            this.ball.createBall(this.context);
            this.paddle.renderPaddle(this.context);
            this.renderScores();
            this.ball.moveBall(this.canvas);
            this.paddle.move(this.canvas);
            this.blocks.forEach((block) => {block.renderBlock(this.context)});

        }.bind(this), 10);
    }
}

let game = new Game();


game.play();

