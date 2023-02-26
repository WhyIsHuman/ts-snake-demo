import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake' 

// 游戏控制器，控制其他所有类
class GameControl {
    snake: Snake;
    food: Food;
    scorepanel: ScorePanel;
    derection: string = '';  //按键的方向
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel();

        this.init()
    }

    // 游戏初始化方法， 调用后游戏即开始
    init() {
        // bind 改变this的指向
        document.addEventListener('keydown', this.keydownHandler.bind(this))

        this.run()
    }

    // 按下键盘响应函数
    keydownHandler(event: KeyboardEvent) {
        this.derection = event.key
        // console.log(this.derection);

        
    }

    // 创建一个控制蛇的方法

    run() {
        // 获取蛇的位置
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.derection) {
            case 'ArrowUp':
                Y -= 10
                break;
            case 'ArrowRight':
                X += 10
                break;
            case 'ArrowDown':
                Y += 10
                break;
            case 'ArrowLeft':
                X -= 10
                break;
        }

        // 检查是否吃到食物
        this.checkEat(X, Y)
        
        try {
            // 修改蛇的位置
            this.snake.X = X;
            this.snake.Y = Y
        } catch (error) {
            alert(error)
            this.isLive = false
        }

        // 开启一个定时器
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorepanel.level - 1) * 30)
    }

    // 检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if(X === this.food.X && Y === this.food.Y) {
            // 食物位置重置
            this.food.change()
            // 分数加一
            this.scorepanel.addScore()
            // 蛇增加一截
            this.snake.addBody()
        }
    }
}


export default GameControl;