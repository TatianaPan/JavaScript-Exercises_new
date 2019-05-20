class Paddle {
    constructor(x, y, width, height) {
        this.position = [x, y];
        this.width = width;
        this.height = height;
        this.paddleSpeed = 0;
    
        this.event = document.addEventListener('keydown', event => {
            if (event.key === 'ArrowRight' ) {
                this.paddleSpeed = 4;
            } else if (event.key === 'ArrowLeft') {
                this.paddleSpeed = -4;
            }
        });

        this.eventStop = document.addEventListener('keyup', event => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                this.paddleSpeed = 0;
            } 
        });
    }

    left() {
        return this.position[0];
    }
    right() {
        return this.position[0] + this.width;
    }

    top() {
        return this.position[1];
    }

    bottom() {
        return this.position[1] + this.height; 
    }

    renderPaddle(context) {
        context.fillStyle = 'grey';
        context.fillRect(this.position[0], this.position[1], this.width, this.height);
    }

    move(canvas) {
        this.position[0] += this.paddleSpeed;
        if (this.left() <= 0) {
            this.position[0] = 0;
        }
        if (this.right() >= canvas.width) {
            this.position[0] = canvas.width - this.width;
        } 
    } 
}
