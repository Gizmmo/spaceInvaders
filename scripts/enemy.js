//Hide the Global Namespace
(function() {

	//Check if the Cti namespace exists, if not, create it
	window.game = window.game || {};

	var Enemy = function(image) {
		var _enemy = this;
		this.enemySpeed = .3;


		var _initalize = function (image) {
			createjs.Bitmap.call(_enemy, image);
		}

		var _moveEnemy = function () {
			_enemy.y += _enemy.enemySpeed;
		}

		_initalize(image);


		this.update = function () {
			_moveEnemy();
		}
	};

	Enemy.prototype = Object.create(createjs.Bitmap.prototype);

	window.game.Enemy = Enemy;

})();
