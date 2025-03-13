//your JS code here. If required.

function startRendering(){
	const text =  "e love Programming!"
	const inputSpeed= document.getElementById("speed").value;
	const output = document.getElementById("text");

	let delay = 500/ parseInt(inputSpeed);
	
	output.textContent="W";
	
	let index = 0;

	function renderText(){

		if(index < text.length){
			output.textContent+= text[index];
			index++;

			setTimeout(renderText,delay)
		}
	}

	renderText();
	
}