export default class MenuItem extends Phaser.GameObjects.Text {
    super(x, y, text, scene) {
        Phaser.GameObjects.Text.call(this, scene, x, y, text, { color: '#ffffff', align: 'left', fontSize: 15 });
    }

    select() {
        this.setColor('#f8ff38');
    }

    deselect() {
        this.setColor('#ffffff');
    }

}