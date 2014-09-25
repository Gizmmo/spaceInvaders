var canvas;
var stage;
var enemies = [];
var player;
var text;
var amountOfEnemies = 19;
var spaceBetweenEnemies = 75; //IN PIXELS

function init() {
	initCanvas();
	createStage();
	loadAssets();
	createTitle();
}

function initCanvas() {
	canvas = document.getElementById("myCanvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function createStage() {
	stage = new createjs.Stage('myCanvas');
}

function loadAssets() {
	loadQueue = new createjs.LoadQueue(false);
	loadQueue.installPlugin(createjs.Sound);
	loadQueue.addEventListener('complete', handleComplete);
	loadQueue.loadManifest([{
		id: 'enemy',
		src: 'assets/art/enemy.png'
	}, {
		id: 'shot',
		src: 'assets/sounds/Explosion.mp3'
	}]);

	loadQueue.getResult('enemy');
}

function createTitle() {
	text = new createjs.Text("Space Invaders", "128px Arial", "#000000");
	text.x = 280;
	text.y = stage.canvas.height / 2 - 50;
	stage.addChild(text);
}

function handleComplete() {
	createEnemies();
	createPlayer();
	createTicker();
}

function createEnemies() {
	generateEnemies()
	addEnemies();
}

function generateEnemies() {
	for (var i = 0; i < amountOfEnemies; i++) {
		var enemy = new game.Enemy(loadQueue.getResult('enemy'));
		enemies.push(enemy);
	}
}

function addEnemies() {
	for (var i = 0; i < enemies.length; i++) {
		stage.addChild(enemies[i]);
		enemies[i].x = i * spaceBetweenEnemies;
	}
}

function createPlayer() {
	generatePlayer();
	addPlayer();
}


function addPlayer() {
	stage.addChild(player);
}

function generatePlayer() {
	player = new game.Player();
	player.y = stage.canvas.height - player.playerWidth * 1.5;
	player.x = stage.canvas.width / 2 + player.playerWidth / 2;
}

function createTicker() {
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener('tick', function() {
		for(var i = 0; i < enemies.length; i++) {
			enemies[i].update();
		}
		player.update();
		stage.update();
	});
}