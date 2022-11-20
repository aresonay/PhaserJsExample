import Global from "../global";
export default class Menu extends Phaser.Scene {

    private width: number;
    private height: number;

    constructor(){
        super(Global.SCENES.MENU); 
    }

    init(){
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
    }

    create(){
        const logo = this.add.image(this.width / 2, 70, 'logo1');

        const playTxt : Phaser.GameObjects.Text = this.add.text(
            50,
            this.height / 2, 
            Global.MENU.PLAY,
            {fontSize: '32px',
            color: '#FFFFFF'}).setInteractive();

        this.changeScene(playTxt, 'Level1');
    }

    changeScene(playTxt: Phaser.GameObjects.Text, scene: string) {
        playTxt.on('pointerdown', () => {
            this.scene.start(scene);
            this.scene.start(Global.SCENES.HUD);
            this.scene.bringToTop(Global.SCENES.HUD);
        });
    }
}