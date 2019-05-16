class Ball {
    constructor (x, y, radius) {
        this.ballRadius = radius;
        this.ballX = x;
        this.ballY = y;
        this.startPoint = [1, 1];

    }

    createBall(context) {
        context.beginPath();
        context.arc(this.ballX, this.ballY, this.ballRadius, 0, 2 * Math.PI, false);
        context.fillStyle = '#fff';
        context.fill();
    }

    moveBall(canvas) {
        this.ballX += this.startPoint[0];
        this.ballY += this.startPoint[1];
        if (this.ballX + this.ballRadius >= canvas.width) {
            this.startPoint[0] = -this.startPoint[0];   
        } else if (this.ballY + this.ballRadius >= canvas.height) {
            this.startPoint[1] = -this.startPoint[1];
        } else if (this.ballX - this.ballRadius == 0) {
            this.startPoint[0] = -this.startPoint[0];
        } else if (this.ballY - this.ballRadius == 0) {
            this.startPoint[1] = -this.startPoint[1];
        }
        
    }
}