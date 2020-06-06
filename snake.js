function Snake() {
    this.x = 0;
    this.y = 0;
    //the speed it moves on each coordinate
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        //incrementing the speed 4 times a second in set interval function
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        //keeping the snake from going off screen
        //if it goes off screen, bring it back to zero
        if (this.x > canvas.width) {
            this.x = 0;
        }
        
        if (this.y > canvas.height) {
            this.y = 0;
        }
        
        if (this.x < 0) {
            this.x = canvas.width;
        }
        
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(direction) {
        switch(direction) {
            //changing the speed in each direction based on the arrow keys pressed!
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }
}