class Paddle {
    constructor(i, j, x, y) {
        this.event = document.addEventListener('keydown', event => {
            if (event.key === 'ArrowUp' && this.upDown >= 10 ) {
                this.moveUp();
            } else if (event.key === 'ArrowDown' && this.upDown <= 450) {
                this.moveDown();
            }
          });
          
        this.width = i;
        this.heigth = j;
        this.top = x;
        this.upDown = y;
        this.paddleDir = [50];
    }

    renderPaddle(context) {
        context.fillStyle = 'green';
        context.fillRect(this.top, this.upDown, this.width, this.heigth);
    }

    moveUp() {
        this.upDown -= this.paddleDir[0];
    
    }

    moveDown() {
        this.upDown += this.paddleDir[0];
    }

}