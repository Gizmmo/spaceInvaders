//Hide the Global Namespace
(function() {

	//Check if the Cti namespace exists, if not, create it
	window.game = window.game || {};

	var Weapon = function() {
		var _weapon = this;
		var bullets = [];
		this.bulletSpeed = 7;

		var _initalize = function () {
		}

		_initalize();


		this.shoot = function (playerX, playerY) {
			var newBullet = new createjs.Shape();
			newBullet.graphics.beginFill('#FFFF00');
			newBullet.graphics.drawCircle(0, 0, 8);
			stage.addChild(newBullet);
			newBullet.x = playerX;
			newBullet.y = playerY;
			newBullet.isShot = true;
			newBullet.direction = 1 ;
			bullets.push(newBullet);
		}

		this.update = function () {
			for(var i = 0; i < bullets.length; i++) {
				bullets[i].y -= _weapon.bulletSpeed;
				if(bullets[i].y < 0) {
					bullets.unshift();
				}
			}

		}
	};

	window.game.Weapon = Weapon;

})();
