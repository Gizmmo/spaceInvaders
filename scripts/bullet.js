//Hide the Global Namespace
(function() {

	//Check if the Cti namespace exists, if not, create it
	window.game = window.game || {};

	var Bullet = function() {
		var _bullet = this;
		this.bulletSpeed = .7;
		this.bulletDamage = 5;
		this.direction = 1;
		this.isShot = false;


		var _initalize = function () {
			createjs.Shape.call(_bullet);
			createjs.Ticker.addEventListener('tick', _moveBullet)
		}

		var _moveBullet = function () {
			if(_bullet.isShot){
				_bullet.y -= _bullet.bulletSpeed;
			}
		}


		_initalize();

	};

	Bullet.prototype = Object.create(createjs.Shape.prototype);

	window.game.Bullet = Bullet;

})();
