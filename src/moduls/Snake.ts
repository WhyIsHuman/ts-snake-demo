class Snake {
    // 表示蛇头的元素
    header: HTMLElement;
    //蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.header = document.querySelector('#snake > div')!;

        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇头的坐标

    get X() {
        return this.header.offsetLeft
    }
    get Y() {
        return this.header.offsetTop
    }

    // 设置蛇头坐标

    set X(value: number) {
        if(this.X === value) {
            return
        }
        if(value < 0 || value > 290) {
            throw new Error("蛇撞了");
        }
        // 不能让蛇掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果发生掉头， 让蛇继续按原方向行驶  ---vlaue 大于x旧值 说明蛇在往右 继续让蛇左边走

            if(value > this.X) {
                value = this.X - 10
            }else {
                // 反之
                value = this.X + 10
            }
        }

        //身体移动
        this.moveBody()
        this.header.style.left = value + 'px'

        // 检查蛇头是否撞到身体
        this.checkHeadBody()
    }
    set Y(value: number) {
        if(this.Y === value) {
            return
        }
        if(value < 0 || value > 290) {
            throw new Error("蛇撞了");
        }
        // 不能让蛇掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果发生掉头， 让蛇继续按原方向行驶  ---vlaue 大于x旧值 说明蛇在往右 继续让蛇左边走

            if(value > this.Y) {
                value = this.Y - 10
            }else {
                // 反之
                value = this.Y + 10
            }
        }
        //身体移动
        this.moveBody()
        this.header.style.top = value + 'px'

        // 检查蛇头是否撞到身体
        this.checkHeadBody()
    }

    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentElement("beforeend", document.createElement('div'));
    }

    // 蛇身体移动的方法
    moveBody() {
        for(let i=this.bodies.length-1; i>0; i--) {

            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
    }

    // 检查蛇头是否撞到身体
    checkHeadBody() {
        for(let i=1; i<this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error("撞到自己了");
            }
        }
    }
}

export default Snake;