export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.lastMoveTime = 0;
        this.moveInteval = 400;
        this.tileSize = 20 ;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = [];
        
        this.body.push(
            this.scene.add.rectangle(this.scene.game.config.width / 2, this.scene.game.config.height / 2,
                 this.tileSize, this.tileSize, 0x00ff00).setOrigin(0)
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

        let xPosition = this.body[0].x + this.direction.x * this.tileSize;
        let yPosition = this.body[0].y + this.direction.y * this.tileSize;

        let appleX = this.apple.x;
        let appleY = this.apple.y
        
        if (appleX === xPosition && appleY ===yPosition) {
            this.eatenTheApple()
        }

        for(let index = this.body.length - 1; index> 0; index-- ){
            this.body[index].x = this.body[index-1].x;
            this.body[index].y = this.body[index-1].y;
        }

        this.body[0].x = xPosition;
        this.body[0].y = yPosition;

        if (this.body[0].x < 0 || this.body[0].x >=this.scene.game.config.width || 
            this.body[0].y < 0 || this.body[0].y >=this.scene.game.config.height ){
                this.scene.scene.restart();
            }

    }

    randomPositionApple(){
        this.apple.x = Math.floor(Math.random() * this.scene.game.config.height / this.tileSize) * this.tileSize;
        this.apple.y = Math.floor(Math.random() * this.scene.game.config.width  / this.tileSize) * this.tileSize;
    }

    eatenTheApple(){
        this.body.push(
            this.scene.add.rectangle(0, 0, this.tileSize, this.tileSize, 0x00ff00).setOrigin(0)
        );
        this.randomPositionApple();
        this.moveInteval -= 10;
    }
    keydown(event){
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