class Ground {
    constructor(game, x, y){
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tile.png");

    }

    update() {

    }

    drawMinimap(ctx, mmX, mmY){
        
    }

    draw(ctx){
        ctx.drawImage(this.spritesheet, 50, 0, 100, 100, this.x, this.y, 50, 50);
    }

}