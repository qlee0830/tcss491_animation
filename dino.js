class Dino {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.dino = this;
        
        // Spritesheets
        this.idle = ASSET_MANAGER.getAsset("");
        this.walk = ASSET_MANAGER.getAsset("");
        this.run = ASSET_MANAGER.getAsset("");
        this.jump = ASSET_MANAGER.getAsset("");
        this.dead = ASSET_MANAGER.getAsset("");

        // Dino's state variables
        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jump, 4 = dead
        this.dead = false;

        this.velocity = { x: 0, y: 0 };

        // Dino's animations
        this.animations = [];
        this.loadAnimations();
    }

    loadAnimations() {
        for (var i = 0; i < 5; i++) { // load 5 states
            this.animations.push([i]);
            for (var j = 0; j < 2; j++) { // load directions
                this.animations[i].push([j]);
            }
        }

        // idle state
        // facing right = 0
        this.animations[0][0]

        // facing left = 1
        this.animations[0][1]

        // walk animation
        // facing right = 0
        this.animations[1][0]
        
        // facing left = 1
        this.animations[1][1]

        // run animation
        // facing right = 0
        this.animations[2][0]

        // facing left = 1
        this.animations[2][1]
    
        // jump animation
        // facing right = 0
        this.animations[3][0]
    
        // facing left = 1
        this.animations[3][1]

        // dead animation
        // facing right = 0
        this.animations[4][0]
    
        // facing left = 1
        this.animations[4][1]
    }

    die() {
        this.dead = true;
    }

    update() {
        const tick = this.game.clockTick;

        const min_walk = 5;
        const max_walk = 25;
        const max_run = 75;
        const acc_walk = 50;
        const acc_run = 100;
         

        if (this.dead) {

        } else {
            // update velocity
            if (this.state != 3) { // not jump, Ground physics
                if (Math.abs(this.velocity.x) < min_walk) { // starting, stopping or turning around
                    this.velocity.x = 0;
                    this.state = 0;
                    if (this.game.left) {
                        
                    }
                }
            }






        }
    }













}