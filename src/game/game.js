import Phaser from 'phaser'
import BootScene from './scenes/BootScene';
import WorldScene from './scenes/WorldScene';
import BattleScene from './scenes/BattleScene';
import UIScene from './scenes/UIScene';


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
                gravity: { y: 0 },
                debug: true
            }
        },
        scene: [
            BootScene,
            WorldScene,
            BattleScene,
            UIScene
        ]
    })
}

export default launch
export { launch }