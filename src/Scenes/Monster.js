class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create sprites for each monster part
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rArm = this.add.sprite(this.bodyX +100, this.bodyY, "monsterParts", "arm_redA.png");
        my.sprite.lArm = this.add.sprite(this.bodyX -110, this.bodyY, "monsterParts", "arm_greenC.png").setFlipX(true);
        my.sprite.rEye = this.add.sprite(this.bodyX +50, this.bodyY-100, "monsterParts", "eye_angry_blue.png");
        my.sprite.lEye = this.add.sprite(this.bodyX -50, this.bodyY-100, "monsterParts", "eye_human_green.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthC.png");
        my.sprite.rLeg = this.add.sprite(this.bodyX+50, this.bodyY+150, "monsterParts", "leg_darkA.png");
        my.sprite.lLeg = this.add.sprite(this.bodyX-75, this.bodyY+125, "monsterParts", "leg_redE.png").setFlipX(true);
        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "nose_red.png").setFlipY(true);
        my.sprite.antenna = this.add.sprite(this.bodyX+5, this.bodyY-100, "monsterParts", "detail_yellow_antenna_small.png");


        //create keydown detection stuff
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.keyA.isDown) {
            this.moveMonsterParts(-1)
        }

        if (this.keyD.isDown) {
            this.moveMonsterParts(1)
        }

        if (this.keyS.isDown) {
            my.sprite.mouth.setTexture("monsterParts", "mouthA.png");
        }

        if (this.keyF.isDown) {
            my.sprite.mouth.setTexture("monsterParts", "mouthC.png");
        }
    }

    moveMonsterParts(direction) {
        let my = this.my;

        for (let part in my.sprite) {
            my.sprite[part].x += direction;
        }
    }

}
