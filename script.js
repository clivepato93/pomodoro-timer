document.querySelectorAll("button").forEach((btn) => {
	btn.addEventListener("click", (event) => {
		event.preventDefault();
	});
});

let minutesSelector = document.querySelector("#minutes");
let secondsSelector = document.querySelector("#seconds");

// console.log(minutes, seconds);

let timeButtons = document.querySelectorAll('.timer-display button')
timeButtons.forEach(btn=>{
	const className = btn.classList[2].split('-')
	// console.log(className,btn.classList[2])
	btn.addEventListener('click',function(e){
console.log('test')
		adjustTime(btn.classList[2],className[1])
	}
)
	// adjustTime(btn.className,className[1])
})

let totalTime;
// console.log(totalTime);
let originalTime;
let timerId;

function adjustTime(selector,operation){
	// console.log(selector,typeof selector)
	// debugger
	if(selector.includes('minutes') && operation == 'plus'){
		// minutesSelector.textContent==='05'?
		// minutesSelector.textContent='00':
		// minutesSelector.textContent= +Number(minutesSelector.textContent).toString().padStart(2,'0')
		
			minutesSelector.textContent==='59'?minutesSelector.textContent='00':	minutesSelector.textContent= (Number(minutesSelector.textContent) + 1).toString().padStart(2,'0')

	}
	if(selector.includes('minutes') && operation == 'minus'){
		// minutesSelector.textContent==='59'?'00': +Number(secondsSelector.textContent).toString().padStart(2,'0')
					minutesSelector.textContent==='00'?minutesSelector.textContent='59':	minutesSelector.textContent= (Number(minutesSelector.textContent) - 1).toString().padStart(2,'0')


	}
	if(selector.includes('seconds') && operation == 'plus'){
			secondsSelector.textContent==='59'?secondsSelector.textContent='00':	secondsSelector.textContent= (Number(secondsSelector.textContent) + 1).toString().padStart(2,'0')
	}
	if(selector.includes('seconds') && operation == 'minus'){
			secondsSelector.textContent==='00'?secondsSelector.textContent='59':	secondsSelector.textContent= (Number(secondsSelector.textContent) - 1).toString().padStart(2,'0')

	}
}

function assignID() {
	totalTime= 
	+document.querySelector("#minutes").textContent * 60 +
	+document.querySelector("#seconds").textContent;
	originalTime = totalTime
	timerId ??= setInterval(() => {
        totalTime--;
		if (totalTime == 0) {
			clearInterval(timerId);
			timerId = null;
		}
        		

		 
			minutesSelector.textContent = Math.floor(totalTime/60);
			// secondsSelector.textContent = 59;
		

			secondsSelector.textContent = (totalTime%60).toString().padStart(2,'0');
        
		
        console.log(totalTime)
	}, 1000);
}
document.querySelector("#start").addEventListener("click", function (e) {
	assignID();
        // console.log(totalTime)

});

document.querySelector("#pause").addEventListener("click", function (e) {
	clearInterval(timerId);
	timerId = null;
});

document.querySelector("#reset").addEventListener("click", function (e) {

    console.log(totalTime)
	clearInterval(timerId);
	timerId = null;
	minutesSelector.textContent = Math.floor(originalTime/60);
	secondsSelector.textContent = `${originalTime% 60}`.padStart(2,'0');
    //  minutes = +document.querySelector("#minutes").textContent;
//  seconds = +document.querySelector("#seconds").textContent;
    totalTime = originalTime
        console.log(totalTime)

});
