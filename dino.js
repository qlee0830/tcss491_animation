class Dino {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.dino = this;
        
        // Spritesheets
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/zombie.png");

        // Dino's state variables
        this.facing = 0; // 0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jump, 4 = dead
        this.dead = false;

        this.velocity = { x: 0, y: 0 };

        // Dino's animations
        this.animations = [];
        this.loadAnimations();
        this.animation = new Animator(this.spritesheet, 0, 10, 420, 550, 9, 0.1, 14, false, true);
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
        this.animations[0][0] = new Animator(this.spritesheet, 2033, 40, 400, 420, 3, 0.33, 150, false, true);

        // facing left = 1
        this.animations[0][1]

        // walk animation
        // facing right = 0
        this.animations[1][0] = new Animator(this.spritesheet, 70, 70, 400, 500, 10, 0.33, 14, false, true);
        
        // facing left = 1
        this.animations[1][1]

        // run animation
        // facing right = 0
        this.animations[2][0] = new Animator(this.spritesheet, 2035, 475, 400, 420, 3, 0.33, 150, false, true);

        // facing left = 1
        this.animations[2][1]
    
        // jump animation
        // facing right = 0
        this.animations[3][0] = new Animator(this.spritesheet, 57, 473, 400, 420, 1, 0.33, 150, false, true);
    
        // facing left = 1
        this.animations[3][1]

        // dead animation
        this.deadAnimationRight = new Animator(this.spritesheet, 17, 65, 400, 420, 1, 0.33, 150, false, false);
        this.deadAnimationLeft
    }

    die() {
        this.dead = true;
    }

    update() {
        const TICK = this.game.clockTick;

        const min_walk = 5;
        const max_walk = 25;
        const max_run = 75;
        const acc_walk = 50;
        const acc_run = 100;
        const dec_rel = 80;

         
        const stop_fall = 700;
        const walk_fall = 700;

        if (this.dead) {
            return;
        } else {
            // update velocity
            if (this.state != 3) { // not jump, Ground physics
                if (Math.abs(this.velocity.x) < min_walk) { // starting, stopping or turning around
                    this.velocity.x = 0;
                    this.state = 1;
                    if (this.game.left) {
                        this.velocity.x += min_walk;
                    }
                    if(this.game.right) {
                        this.velocity.x += min_walk;
                    }
                }
                else if (Math.abs(this.velocity.x) >= min_walk) { // faster than walking
                    if(this.facing === 0) {
                        if(this.game.right && !this.game.left){
                            this.velocity.x += acc_walk * TICK;
                        } else if(this.game.left && !this.game.right){
                            this.state = 1;
                        } else {
                            this.velocity.x -= dec_rel * TICK;
                        }
                    }
                    if(this.facing === 1){
                        if(this.game.left && !this.game.right){
                            this.velocity.x -= acc_walk * TICK;
                        } else if(this.game.right && !this.game.left){
                            this.state = 1;
                        } else {
                            this.velocity.x += dec_rel * TICK;
                        }
                    }
                }

            } else {

            }
            // update position
            this.x += this.velocity.x + 0.5;
            this.y += this.velocity.y;

            // collision
            var that = this;


            // update state
            if(this.state !== 3){
                if(Math.abs(this.velocity.x) > max_walk) this.state = 1;
                else if(Math.abs(this.velocity.x) >= min_walk) this.state = 1;
                else this.state = 1;
            }

            // update direction
            if(this.velocity.x < 0) this.facing = 1;
            if(this.velocity.x > 0) this.facing = 0;
        }
    }

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Red";
        ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, PARAMS.SCALE * Math.min(this.size + 1, 2));
    }
    
    draw(ctx) {
        if(this.dead){
            this.deadAnimationRight.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.15);
        } else{
            this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, 0.18);
        }
        if(PARAMS.DEBUG){
            ctx.strokeStyle = "Red";
        }
    }

}