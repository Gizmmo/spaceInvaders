var myCanvas;

function init() {
	myCanvas = createHiDPICanvas(window.innerWidth, window.innerHeight);
}

/**
 * Creates a Hi Dots Per Inch Canvas for mobile use
 * @param  {float} w     The Width
 * @param  {float} h     [The height]
 * @param  {float} ratio The pixel ratio of the device
 * @return {Canvas}       The canvas created
 */
createHiDPICanvas = function(w, h, ratio) {
	console.log(w);
	console.log(h);
	if (!ratio) {
		ratio = PIXEL_RATIO();
	}
	var can = document.getElementById("myCanvas");
	can.width = w * ratio;
	can.height = h * ratio;
	can.style.width = w + "px";
	can.style.height = h + "px";
	can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
	return can;
}

var PIXEL_RATIO = function() {
	var ctx = document.createElement("canvas").getContext("2d"),
		dpr = window.devicePixelRatio || 1,
		bsr = ctx.webkitBackingStorePixelRatio ||
		ctx.mozBackingStorePixelRatio ||
		ctx.msBackingStorePixelRatio ||
		ctx.oBackingStorePixelRatio ||
		ctx.backingStorePixelRatio || 1;
	return dpr / bsr;
};