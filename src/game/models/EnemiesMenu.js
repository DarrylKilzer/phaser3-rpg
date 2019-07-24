import Menu from "./Menu";

export default class EnemiesMenu extends Menu {
    super(x, y, scene) {
        Menu.call(this, x, y, scene);
    }

    confirm() {
        // do something when the player selects an enemy
    }
}