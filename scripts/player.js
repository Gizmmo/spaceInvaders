//Hide the Global Namespace
(function() {

	//Check if the Cti namespace exists, if not, create it
	window.game = window.game || {};

	var Player = function(playerWidth) {
		var _player = this;
		var _SPACE_KEY_BUTTON = 32;
		var _LEFT_KEY_BUTTON = 37;
		var _RIGHT_KEY_BUTTON = 39;
		var _isLeftKeyDown = false;
		var _isRightKeyDown = false;
		this.playerSpeed = 8;
		this.playerWidth = 50;
		this.weapon;


		var _initalize = function(playerWidth) {
			createjs.Shape.call(_player);
			if (typeof playerWidth !== 'undefined') {
				_player.playerWidth = playerWidth;
			}
			_drawPlayer();
			_addPlayerMovementControls();
			_addPlayerWeapon()
		}

		var _drawPlayer = function() {
			_player.graphics.beginFill('#000000');
			_player.graphics.drawRect(0, 0, _player.playerWidth, _player.playerWidth);
		}

		var _addPlayerMovementControls = function() {
			window.addEventListener('keydown', _startMove);
			window.addEventListener('keyup', _stopMove);
			window.addEventListener('keyup', _checkShot);
		}

		var _addPlayerWeapon = function () {
			_player.weapon = new game.Weapon();
		}

		var _checkShot = function(e) {
			if (e.keyCode === _SPACE_KEY_BUTTON) {
				_player.weapon.shoot(_player.x + _player.playerWidth / 2, _player.y);
			}
		}

		var _startMove = function(e) {
			if (e.keyCode === _LEFT_KEY_BUTTON) {
				_isLeftKeyDown = true
			} else if (e.keyCode === _RIGHT_KEY_BUTTON) {
				_isRightKeyDown = true;
			}
		}

		var _stopMove = function(e) {
			if (e.keyCode === _LEFT_KEY_BUTTON) {
				_isLeftKeyDown = false
			} else if (e.keyCode === _RIGHT_KEY_BUTTON) {
				_isRightKeyDown = false;
			}
		}

		var _movePlayer = function() {
			if (_isLeftKeyDown) {
				_player.x -= _player.playerSpeed
			} else if (_isRightKeyDown) {
				_player.x += _player.playerSpeed;
			}
		}

		_initalize(playerWidth);

		this.update = function() {
			_movePlayer();
			this.weapon.update();
		}
	};

	Player.prototype = Object.create(createjs.Shape.prototype);

	window.game.Player = Player;

})();