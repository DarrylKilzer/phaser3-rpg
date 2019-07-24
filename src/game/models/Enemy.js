import Unit from "./Unit";

export default class Enemy extends Unit {
    super(scene, x, y, texture, frame, type, hp, damage) {
        Unit.call(scene, x, y, texture, frame, type, hp, damage);
    }
};