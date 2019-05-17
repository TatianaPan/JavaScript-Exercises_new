class Game {
    constructor () {
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.ball = new Ball(10, 10, 10);
        this.blocks = [];
        this.createBlocks();
        this.paddle = new Paddle((canvas.width - 70)/2, canvas.height - 10, 70, 15);
        
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
        //this does not work

        if ((this.ball.left  > this.paddle.left) && (this.ball.right < this.paddle.right) && (this.ball.bottom >= this.paddle.top)) {
                this.ball.ballSpeed[0] = -this.ball.ballSpeed[0];
                console.log('I am a hero!');
        }
    }

    play() {
        setInterval(function() {
            this.checkPaddleCollisions();
            this.createCanvas();
            this.ball.createBall(this.context);
            this.paddle.renderPaddle(this.context);
            this.ball.moveBall(this.canvas);
            this.blocks.forEach((block) => {block.renderBlock(this.context)});

        }.bind(this), 10);
    }
    buildBlocks() {
    }
}







let game = new Game();


game.play();

