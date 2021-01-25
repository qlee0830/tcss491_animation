class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        
        this.minimap = new Minimap(this.game, 1.5*PARAMS.BLOCKWIDTH, 3.5*PARAMS.BLOCKWIDTH, 224*PARAMS.SCALE);

        this.dino = new Dino(this.game, 100, 650);

        this.loadLevel(2.5*PARAMS.BLOCKWIDTH, 0*PARAMS.BLOCKWIDTH);
    }

    loadLevel(x, y) {
        this.game.entities = [];
        this.x = 0;

        this.game.addEntity(new Graveyard(this.game));

        let background = new Tree(this.game, 100, 535);
        this.game.addEntity(background);
        background = new Tree(this.game, 600, 385);
        this.game.addEntity(background);
        background = new Sign(this.game, 400, 450);
        this.game.addEntity(background);

        let ground = new Ground(this.game, 0, 725);
        this.game.addEntity(ground);
        for(var i = 0; i < 25; i++){
            this.game.addEntity(new Ground(this.game, i*50, 725));
        }
        this.game.addEntity(new Ground(this.game, 950, 650));
        for(var i = 10; i < 18; i++){
            this.game.addEntity(new Ground(this.game, i*50, 575));
        }
        for(var i = 7; i < 9; i++){
            this.game.addEntity(new Ground(this.game, i*50, 500));
        }

        this.game.addEntity(this.dino);
    }


}

class Minimap {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });
    }

    update() {

    }

    draw(ctx) {
        ctx.strokeStyle = "Black";
        ctx.strokeRect(this.x, this.y, this.w, PARAMS.BLOCKWIDTH);
        for(var i = 0; i < this.game.entities.length; i++){
            this.game.entities[i].drawMinimap(ctx, this.x, this.y);
        };
    }

}