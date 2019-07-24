export default class Unit extends Phaser.GameObjects.Sprite {
    super(scene, x, y, texture, frame, type, hp, damage) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame)
        this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; // default damage                
    }

    attack(target) {
        target.takeDamage(this.damage);
    }
    takeDamage(damage) {
        this.hp -= damage;
    }
}