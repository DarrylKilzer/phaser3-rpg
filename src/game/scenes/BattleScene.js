import { Scene } from 'phaser'
import Hero from '../models/Hero.js'
import Enemy from '../models/Enemy.js'

export default class BattleScene extends Scene {
    constructor() {
        super({ key: 'BattleScene' });
    }

    preload() {
    }

    create() {
        // change the background to green
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

        // player character - warrior
        let warrior = new Hero(this, 250, 50, 'player', 1, 'Warrior', 100, 20);
        this.add.existing(warrior);

        // player character - mage
        let mage = new Hero(this, 250, 100, 'player', 4, 'Mage', 80, 8);
        this.add.existing(mage);

        let dragonblue = new Enemy(this, 50, 50, 'dragonblue', null, 'Dragon', 50, 3);
        this.add.existing(dragonblue);

        let dragonOrange = new Enemy(this, 50, 100, 'dragonorange', null, 'Dragon2', 50, 3);
        this.add.existing(dragonOrange);

        // array with heroes
        this.heroes = [warrior, mage];
        // array with enemies
        this.enemies = [dragonblue, dragonOrange];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);

        // Run UI Scene at the same time
        this.scene.launch('UIScene');
    }
}