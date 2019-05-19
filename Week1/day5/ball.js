class Ball {
    constructor (x, y, radius) {
        this.ballRadius = radius;
        this.position = [x, y];
        this.ballSpeed = [2, 2];   
    }

    startMovingUp() {
        if (this.ballSpeed[1] > 0) {
            this.ballSpeed[1] = -this.ballSpeed[1];
        }
    }

    startMovingDown() {
        if (this.ballSpeed[1] < 0) {
            this.ballSpeed[1] = -this.ballSpeed[1];
        }
    }

    startMovingLeft() {
        if (this.ballSpeed[0] > 0) {
            this.ballSpeed[0] = -this.ballSpeed[0];
        }
    }

    startMovingRight() {
        if (this.ballSpeed[0] < 0) {
            this.ballSpeed[0] = -this.ballSpeed[0];
        }
    }

    createBall(context) {
        context.beginPath();
        context.arc(this.position[0], this.position[1], this.ballRadius, 0, 2 * Math.PI, false);
        context.fillStyle = '#fff';
        context.fill();
    }

    moveBall(canvas) {
        this.position[0] += this.ballSpeed[0];
        this.position[1] += this.ballSpeed[1];
        if (this.right() >= canvas.width) {
            this.startMovingLeft();   
        } else if (this.bottom() >= canvas.height) {
            this.startMovingUp();
        } else if (this.left() <= 0) {
            this.startMovingRight();
        } else if (this.top() <= 0) {
            this.startMovingDown();
        }        
    }

    left() {
        return this.position[0] - this.ballRadius;
    }

    right() {
        return this.position[0] + this.ballRadius;
    }

    top() {
        return this.position[1] - this.ballRadius;
    }

    bottom() {
        return this.position[1] + this.ballRadius;
    }
}
