import { Scene } from 'phaser'
import tiles from '@/game/assets/map/spritesheet.png'
import map from '@/game/assets/map/map.json'
import player from '@/game/assets/RPG_assets.png'
import dragonblue from '@/game/assets/dragonblue.png'
import dragonorange from '@/game/assets/dragonorange.png'


export default class BootScene extends Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        //phaser doesnt support data uris, so loading these is fixed in the vue.config
        // map tiles
        this.load.image('tiles', tiles);

        // map in json format
        this.load.tilemapTiledJSON('map', map);

        // our two characters
        this.load.spritesheet('player', player, { frameWidth: 16, frameHeight: 16 });
        this.load.image('dragonblue', dragonblue)
        this.load.image('dragonorange', dragonorange)
    }

    create() {
        this.scene.start('BattleScene');
        // this.scene.start('WorldScene');
    }
}