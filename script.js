document.querySelectorAll("button").forEach((btn) => {
	btn.addEventListener("click", (event) => {
		event.preventDefault();
	});
});

let minutesSelector = document.querySelector("#minutes");
let secondsSelector = document.querySelector("#seconds");

// console.log(minutes, seconds);

let totalTime =
	+document.querySelector("#minutes").textContent * 60 +
	+document.querySelector("#seconds").textContent;
// console.log(totalTime);
let originalTime = totalTime
let timerId;

function assignID() {
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
