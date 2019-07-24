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
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true;

        //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
            frameRate: 10,
            repeat: -1
        });

        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { frames: [0, 6, 0, 12] }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.player, obstacles)

        this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        for (var i = 0; i < 30; i++) {
            var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
            var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
            // parameters are x, y, width, height
            this.spawns.create(x, y, '');
        }
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy.bind(this));
    }

    update(time, delta) {
        this.move()
        // this.mouseMove()
        this.animate()
    }

    onMeetEnemy(player, zone) {
        // we move the zone to some other location
        zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        // zone.destroy()
        this.cameras.main.flash(300)
        this.cameras.main.shake(300);
    }

    animate() {
        if (this.cursors.left.isDown) {
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.anims.play('down', true);
        }
        else {
            this.player.anims.stop();
        }
    }

    move() {
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

    mouseMove() {
        if (this.input.mousePointer.isDown) {
            //  if it's overlapping the mouse, don't move any more
            this.physics.overlapRect(this.input.x, this.input.y, 1, 1).forEach(el => {
                if (el == this.player) {
                    this.player.body.velocity.setTo(0, 0);
                    return
                }
            });
            //  400 is the speed it will move towards the mouse
            this.physics.moveTo(this.player, this.input.activePointer.position.x, this.input.activePointer.position.y, 100);
        }
        else {
            this.player.body.velocity.setTo(0, 0);
        }
    }
}