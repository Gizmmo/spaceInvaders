(function () {
	window.game = window.game || {};

	var GameStates = {
		MAIN_MENU: 0,
		RECESS_SCENE: 10,
		CLASS_SCENE: 20
	};

	var GameStateEvents = {
		MAIN_MENU: "main-menu-event",
		RECESS_OVER: "recess-over-event",
		RECESS_BEGINNING: "recess-beginning-event"
	};

	window.game.GameStates = GameStates;
	window.game.GameStateEvents = GameStateEvents;
})