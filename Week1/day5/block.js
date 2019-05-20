class Block {
    constructor (x, y, width, height, color) {
        this.position = [x, y];
        this.width = width;
        this.height = height;
        this.color = color;
    }

    renderBlock(context) {
        context.fillStyle = this.color;
        context.fillRect(this.position[0], this.position[1], this.width, this.height);
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
}
