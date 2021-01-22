class Graveyard {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/grave-yard/png/BG.png");
    }
    update() {

    }
    draw(ctx) {
        ctx.drawImage()
    }
}

class Tree {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/grave-yard/png/Objects/Tree.png");
    }
    update() {

    }
    draw(ctx) {
        ctx.drawImage()
    }
}

class Sign {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/grave-yard/png/Objects/Sign.png");
    }
    update() {

    }
    draw(ctx) {
        ctx.drawImage()
    }
}

class Bone {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/grave-yard/png/Tiles/Bone (1).png");
    }
    update() {

    }
    draw(ctx) {
        ctx.drawImage()
    }
}

class Tomb {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/grave-yard/png/Objects/TombStone (1).png");
    }
    update() {

    }
    draw(ctx) {
        ctx.drawImage()
    }
}

class Tile {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/grave-yard/png/Tiles/Tile (1).png");
    }
    update() {

    }
    draw(ctx) {
        ctx.drawImage()
    }
}