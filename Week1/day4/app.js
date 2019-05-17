
class Game {
    constructor () {
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.ball = new Ball(30, 30, 10);
        this.paddle = new Paddle(20, 100, 450, 0);
        this.paddle2 = new Paddle(20, 100, 15, 0);
    }

    createCanvas() {
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, canvas.width, canvas.height);
    }

    checkCollisions() {
        // if ( (this.ball.right() >= this.paddle.left()) &&
        //      (this.ball.ballY >= this.paddle.top()) &&
        //      (this.ball.ballY <= this.paddle.bottom())) {
        }
        
        if ( (this.ball.ballX + this.ball.ballRadius >= canvas.width - this.paddle.width)
            && ( (this.ballY - this.ball.ballRadius < this.paddle.upDown + this.paddle.height) 
                && (this.ball.ballY + this.ball.ballRadius > this.paddle.upDownUp))) {
                console.log('Collision!!');
        } else if ((this.ball.ballX + this.ball.ballRadius >= 
                    canvas.width || this.ball.ballY + this.ball.ballRadius >= canvas.height)
            || (this.ball.ballX - this.ball.ballRadius == 0) 
            || (this.ball.ballY - this.ball.ballRadius == 0)) {
                console.log('A collision with wall occured!'); 
            }
        
    }

    play() {
        setInterval(function() {

            this.createCanvas();
            this.ball.createBall(this.context);
            this.paddle.renderPaddle(this.context);
            this.paddle2.renderPaddle(this.context);
            this.ball.moveBall(this.canvas);
            this.checkCollisions();
        }.bind(this), 10);
    }
    
}


let game = new Game();
game.play();


