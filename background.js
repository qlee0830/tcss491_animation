class Graveyard {
    constructor(game) {
        Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/BG.png");
    }
    update() {

    }
    drawMinimap(ctx, mmx, mmy) {
        
    }
    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, this.spritesheet.width, this.spritesheet.height, 0, 0, this.spritesheet.width, this.spritesheet.height);
    }
}

class Tree {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/object.png");
    }
    update() {

    }
    drawMinimap(ctx, mmx, mmy) {
        
    }
    draw(ctx) {
        ctx.drawImage(this.spritesheet, 305, 0, 280, 233, this.x - this.game.camera.x, this.y, PARAMS.BLOCKWIDTH*4, PARAMS.BLOCKWIDTH*4);
    }
}

class Sign {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/object.png");
    }
    update() {

    }
    drawMinimap(ctx, mmx, mmy) {
        
    }
    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 240, 85, 85, this.x - this.game.camera.x, this.y, 40, 50);
    }
}

