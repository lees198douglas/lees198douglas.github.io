function handleRollClick() {

    const first = Math.ceil(Math.random() * 6);
    const second = Math.ceil(Math.random() * 6);

    const dices = document.getElementsByClassName("dice");

    dices[0].children[0].src = `dice-${first}.svg`;
    dices[1].children[0].src = `dice-${second}.svg`;

    const sum = first + second;

    document.getElementById("total").innerText = sum;

    const winOrLose = document.querySelector('div.message > h3')
    if (sum >= 8) {
        winOrLose.innerText = "You Win: Try Again!";
    } else {
        winOrLose.innerText = "You didn't win: Try Again!";
    }
}

function updateDateTime() {
    const curr = new Date();
    console.log(curr);
    const date = curr.getDate();
    const month = curr.getMonth() + 1;
    const year = curr.getFullYear();
    
    const hour = curr.getHours();
    const minute = curr.getMinutes();
    
    const dateTimeStr = `${('0' + date).slice(-2)}/${('0' + month).slice(-2)}/${year} at ${('0' + hour).slice(-2)}:${('0' + minute).slice(-2)}`;
    
    document.getElementById("day").innerText = dateTimeStr;
}

updateDateTime();
setInterval(updateDateTime, 1000);
