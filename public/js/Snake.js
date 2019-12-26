export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.lastMoveTime = 0;
        this.moveInteval = 500;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = [];
        this.body.push(
            this.scene.add.rectangle(100, 100, 16, 16, 0xff0000).setOrigin(0)
        );

        this.body.push(
            this.scene.add.rectangle(0, 0, 16, 16, 0x00ff00).setOrigin(0)
        );

        this.scene.input.keyboard.on('keydown', e => {this.keydown(e)})
    }

    update(time){
        if (time >= this.lastMoveTime + this.moveInteval){
            this.lastMoveTime = time;
            this.move();
        }
    }

    move(){
        this.body[0].x += this.direction.x *20 ;
        this.body[0].y += this.direction.y *20 ;
    }

    keydown(event){
        console.log(event)
        switch (event.keyCode){
            case 37://left
                this.direction = Phaser.Math.Vector2.LEFT;
                break;
            case 38://up
                this.direction = Phaser.Math.Vector2.UP;
                break;
            case 39://right
                this.direction = Phaser.Math.Vector2.RIGHT;
                break;
            case 40://down
                this.direction = Phaser.Math.Vector2.DOWN;
                break;
        }
    }
}