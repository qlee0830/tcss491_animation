var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/dino");
ASSET_MANAGER.queueDownload("./sprites/zombie-female");
ASSET_MANAGER.queueDownload("./sprites/zombie-male");
ASSET_MANAGER.queueDownload("./sprites/grave-yard");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.start();
});
