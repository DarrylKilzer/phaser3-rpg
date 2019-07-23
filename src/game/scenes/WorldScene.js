import { Scene } from 'phaser'

export default class WorldScene extends Scene {
    constructor() {
        super({ key: 'WorldScene' });
    }

    preload() {
        // load the resources here
    }

    create() {
        //key is the name loaded in the bootscene for the map
        let map = this.make.tilemap({ key: 'map' })

        //create the tileset
        let tiles = map.addTilesetImage('spritesheet', 'tiles');

        //make the layers visible
        let grass = map.createStaticLayer('Grass', tiles, 0, 0);
        let obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);

        //set the obstacles layer to cause collisions
        obstacles.setCollisionByExclusion([-1]);

        //add player
        this.player = this.physics.add.sprite(50, 100, 'player', 6);

        //set the world bounds so the player cant leave the map
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);


        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(time, delta) {
        this.player.body.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-80);
        }
        else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(80);
        }

        // Vertical movement
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-80);
        }
        else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(80);
        }
    }
}