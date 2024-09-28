let randomnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;    

function checkgame(){
 let guessnum = document.getElementById("guessholder").value;
 let message = document.getElementById("message");
 attempt++;
 if(guessnum == randomnum){
    message.textContent = `Congratulations! You guessed the correct number ${randomnum}`;
    message.style.color = "green";
 } else if(guessnum > randomnum){
    message.textContent = `Too high! Try again.`;
    message.style.color = "red";
 } else if (guessnum < randomnum){
    message.textContent = `Too low! Try again`;
    message.style.color = "red";
 }
 document.getElementById('attemps').textContent = `Attemps : ${attempt}`;
}

function refreshPage() {
    location.reload(); // This reloads the page
}