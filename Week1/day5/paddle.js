class Paddle {
    constructor(x, y, width, height) {
        
        this.position = [x, y];
        this.width = width;
        this.heigth = height;
        this.paddleSpeed = 50;
        this.left = this.position[0];
        this.right = this.position[0] + this.width;
        this.top = this.position[1];
        this.bottom = this.position[1] + this.height; 

        this.event = document.addEventListener('keydown', event => {
            if (event.key === 'ArrowRight' && this.position[0] < canvas.width - this.width) {
                this.moveRight();
            } else if (event.key === 'ArrowLeft' && this.position[0] > 0) {
                this.moveLeft();
            }
          });
        //   this.event1 = document.addEventListener('keyup', event => {
        //     if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        //         this.paddleSpeed = 0;
        //     } 
        //   });
    }


    renderPaddle(context) {
        context.fillStyle = 'grey';
        context.fillRect(this.position[0], this.position[1], this.width, this.heigth);
    }

    moveRight() {
        this.position[0] += this.paddleSpeed;
        // update the position?
    }

    moveLeft() {
        this.position[0] -= this.paddleSpeed;
    }

}
