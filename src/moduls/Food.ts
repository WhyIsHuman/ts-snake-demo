// 定义food类

class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        // 获取页面中food元素 并赋值给element
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }
    // 修改食物位置
    change() {
        // 生成一个随机位置  食物位置最新0最大290 必须是是10的倍数

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'


    }
}

// const food = new Food()

// food.change()
// console.log(food.X);
// console.log(food.Y);

export default Food;