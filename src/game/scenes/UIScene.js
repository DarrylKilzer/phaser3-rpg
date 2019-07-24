import { Scene } from 'phaser'
import HeroesMenu from '../models/HeroesMenu';
import ActionsMenu from '../models/ActionsMenu';
import EnemiesMenu from '../models/EnemiesMenu';

export default class UIScene extends Scene {
    constructor() {
        super({ key: 'UIScene' });
    }

    preload() {
    }

    create() {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);
        this.graphics.strokeRect(2, 150, 90, 100);
        this.graphics.fillRect(2, 150, 90, 100);
        this.graphics.strokeRect(95, 150, 90, 100);
        this.graphics.fillRect(95, 150, 90, 100);
        this.graphics.strokeRect(188, 150, 130, 100);
        this.graphics.fillRect(188, 150, 130, 100);

        // basic container to hold all menus
        this.menus = this.add.container(0, 0);

        this.heroesMenu = new HeroesMenu(this, 195, 153);
        this.actionsMenu = new ActionsMenu(this, 100, 153);
        this.enemiesMenu = new EnemiesMenu(this, 8, 153);

        // the currently selected menu 
        this.currentMenu = this.actionsMenu;

        // add menus to the container
        this.menus.add(this.heroesMenu);
        this.menus.add(this.actionsMenu);
        this.menus.add(this.enemiesMenu);
    }
}