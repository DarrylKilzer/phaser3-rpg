import Menu from "./Menu";

export default class ActionsMenu extends Menu {
    super(x, y, scene) {
        Menu.call(this, x, y, scene);
        this.addMenuItem('Attack');
    }

    confirm() {
        // do something when the player selects an action
    }

}
