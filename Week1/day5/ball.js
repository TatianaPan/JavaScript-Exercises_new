class Ball {
    constructor (x, y, radius) {
        this.ballRadius = radius;
        this.position = [x, y];
        this.left = this.position[0] - this.ballRadius;
        this.right = this.position[0] + this.ballRadius;
        this.top = this.position[1] - this.ballRadius;
        this.bottom = this.position[1] + this.ballRadius;
        this.ballSpeed = [1, 1];   
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
        if (this.position[0] + this.ballRadius >= canvas.width) {
            this.ballSpeed[0] = -this.ballSpeed[0];   
        } else if (this.position[1] + this.ballRadius >= canvas.height) {
            this.ballSpeed[1] = -this.ballSpeed[1];
        } else if (this.position[0] - this.ballRadius == 0) {
            this.ballSpeed[0] = -this.ballSpeed[0];
        } else if (this.position[1] - this.ballRadius == 0) {
            this.ballSpeed[1] = -this.ballSpeed[1];
        }        
    }
}
