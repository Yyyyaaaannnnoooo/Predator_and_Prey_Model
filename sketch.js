let am, w, h, agentSize = 10;
function setup() {
	w = h = floor(windowHeight / agentSize) * agentSize - (2 * agentSize);
	let canvas = createCanvas(w, h);
	canvas.parent('myCnv');
	pixelDensity(1);
	noStroke();
	initModel();
}

function draw() {
	am.update();
	am.show();
	am.infographic();
}

function mousePressed(){
	am.addAgent(mouseX, mouseY, mouseButton);
}

function initModel(){
	let input1 = document.getElementById("threshold").value;
	let input2 = document.getElementById("maxHealth").value;
	let input3 = document.getElementById("empty").value;
	let input4 = document.getElementById("prey").value;
	am = new AgentModel(agentSize, input1, input3, input4, input2);
}
function updateValue(){
	document.getElementById("thehreshold").innerHTML = "THRESHOLD: " + document.getElementById("threshold").value;
	document.getElementById("themaxHealth").innerHTML = "MAX HEALTH: " + document.getElementById("maxHealth").value;
	document.getElementById("theempty").innerHTML = "EMPTY: " + document.getElementById("empty").value + "%";
	document.getElementById("theprey").innerHTML = "PREY: " + document.getElementById("prey").value + " %";
}