document.addEventListener("DOMContentLoaded", ()=>{
	const buttons = document.getElementsByClassName("button")
	,     score = document.getElementById("score");
	let correct_sequence = ""
	,   user_sequence = ""
	,   waiting = true;
	// Start of the game
	
	addToSequence();
	showSequence();

	for(let i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", ()=>{
			user_sequence += i;
			if(user_sequence.length === correct_sequence.length){
				if(user_sequence == correct_sequence){
					score.innerText = user_sequence.length;
					addToSequence();
				}else{
					gameEnded();
				}
				user_sequence = '';
			}
		});
	}

	function addToSequence(){
		correct_sequence += getRandomNumber(4);
		console.log(correct_sequence);
		showSequence();
	}

	function getRandomNumber(max){
		return Math.floor(Math.random() * max);
	}
	async function showSequence(){
		waiting = true;
		correct_sequence.toString().split('');
		for(let i = 0; i < correct_sequence.length; i++){
			buttons[correct_sequence[i]].classList.add("active");
			await sleep(500);
			buttons[correct_sequence[i]].classList.remove("active");
		}
		waiting = false;
	}
	function sleep(ms) {
    		return new Promise(resolve => setTimeout(resolve, ms));
	}
	function gameEnded(){
		for(let i = 0; i < buttons.length; i++){
			buttons[i].remove();
		}
	}

});
