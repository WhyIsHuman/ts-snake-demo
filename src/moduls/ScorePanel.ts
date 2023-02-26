// 定义表示记分盘的类

class ScorePanel {
    score = 0; // 分数
    level = 1; //等级

    scoreELe: HTMLElement;  
    levelEle: HTMLElement;  

    // 设置一个变量最大等级等级
    maxLevel: number;
    // 设置一个变量表示多少分升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreELe = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore

    }
    // 设计一个加分的方法

    addScore() {
        this.score++;
        this.scoreELe.innerHTML = this.score + '';

        // 判断分数是多少
        if(this.score % this.upScore === 0) {
            this.levelUP()
        }
    }

    // 等级提升
    levelUP() {
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }

}

// const scorepanel = new ScorePanel(100, 2);

// for (let index = 0; index < 200; index++) {
//     scorepanel.addScore()
// }

export default ScorePanel;