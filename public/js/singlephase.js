import MainScene from "./mainscene.js";

const config ={
    width: 680,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [MainScene]
};

new Phaser.Game(config);