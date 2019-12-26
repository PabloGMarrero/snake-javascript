export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.lastMoveTime = 0;
        this.moveInteval = 500;
        this.tileSize = 20 ;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = [];
        this.body.push(
            this.scene.add.rectangle(100, 100, this.tileSize, this.tileSize, 0x00ff00).setOrigin(0)
        );

        this.apple = this.scene.add.rectangle(0, 0, this.tileSize, this.tileSize, 0xff00000).setOrigin(0)

        this.randomPositionApple()

        this.scene.input.keyboard.on('keydown', e => {this.keydown(e)})
    }

    update(time){
        if (time >= this.lastMoveTime + this.moveInteval){
            this.lastMoveTime = time;
            this.move();
        }
    }

    move(){
        for(let index = this.body.length - 1; index> 0; index-- ){
            this.body[index].x = this.body[index-1].x;
            this.body[index].y = this.body[index-1].y;
        }

        this.body[0].x += this.direction.x *20 ;
        this.body[0].y += this.direction.y *20 ;

    }

    randomPositionApple(){
        this.apple.x = Math.floor(Math.random() * this.scene.game.config.height / this.tileSize) * this.tileSize;
        this.apple.y = Math.floor(Math.random() * this.scene.game.config.width  / this.tileSize) * this.tileSize;
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