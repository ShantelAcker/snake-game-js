const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
//the amount of rows and columns will have
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

//wrapping a funciton in parenthesis allows it to call itself right away
(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();

    window.setInterval(() =>  {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
        
        snake.checkCollision();
        document.querySelector('.score').innerText = snake.total;

    }, 250); //250ms = 4 times a second
}());

//moving the snake with the arrow keys
window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));