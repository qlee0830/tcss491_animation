
var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/BG.png");
ASSET_MANAGER.queueDownload("./sprites/dino.png");
ASSET_MANAGER.queueDownload("./sprites/object.png");
ASSET_MANAGER.queueDownload("./sprites/tile.png");
ASSET_MANAGER.queueDownload("./sprites/zombie.png");

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	var canvas = document.getElementById('gameWorld');
	canvas.style.background = "./sprites/BG.png";
	var ctx = canvas.getContext('2d');

	PARAMS.CANVAS_WIDTH = canvas.width;

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
