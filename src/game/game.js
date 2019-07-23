import Phaser from 'phaser'
import BootScene from './scenes/BootScene';
import WorldScene from './scenes/WorldScene';


function launch() {
    new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'content',
        width: 500,
        height: 298,
        zoom: 3,
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