import Phaser from 'phaser'
import BootScene from './scenes/BootScene';
import WorldScene from './scenes/WorldScene';


function launch() {
    new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'content',
        width: 320 * 1.5,
        height: 240 * 1.85,
        zoom: 2,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: [
            BootScene,
            WorldScene
        ]
    })
}

export default launch
export { launch }