let canvasTempeMap = document.getElementsByClassName("canvas-tempe-map")[0];
let ctxTempeMap = canvasTempeMap.getContext("2d");
let base_image = new Image();
base_image.src = 'tempe-activity.png';
base_image.onload = function() {
    canvasTempeMap.width = base_image.width;
    canvasTempeMap.height = base_image.height;
    drawBackgroundImage();
    animate();
}
function drawBackgroundImage() {
    ctxTempeMap.drawImage(base_image, 0, 0, base_image.width, base_image.height,
                          0, 0, canvasTempeMap.width, canvasTempeMap.height);
}
function drawCircle(x, y, r) {
    ctxTempeMap.beginPath();
    ctxTempeMap.arc(x, y, r, 0, 2*Math.PI);
    ctxTempeMap.fillStyle = "#fdb9b8";
    ctxTempeMap.lineWidth = r/4;
    ctxTempeMap.strokeStyle = "#ff8482";
    ctxTempeMap.fill();
    ctxTempeMap.stroke();
    ctxTempeMap.closePath();
}
class Event {
    constructor(x, y) {
	this.x = x;
	this.y = y;
	this.r = 20;
	this.speed = 10;
    }
    update (dt) {
	this.r -= this.speed*dt;
	return this.r < 0;
    }
}
let events = [];
let delay = 10;
function animate() {
    setInterval(() => {
	ctxTempeMap.clearRect(0, 0, canvasTempeMap.width, canvasTempeMap.height);
	drawBackgroundImage();
	if (Math.random() < 0.05) {
	    events.push(new Event(Math.random()*canvasTempeMap.width, Math.random()*canvasTempeMap.height));
	}
	let i = 0;
	while (i < events.length) {
	    if (events[i].update(delay/1000)) {
		events.splice(i, 1);
	    }
	    drawCircle(events[i].x, events[i].y, events[i].r);
	    i++;
	}
    }, delay);
}
