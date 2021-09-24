function RollFiveSixSidedDice() {
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice3").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice4").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice5").value = Math.floor(Math.random()*6) + 1;

    dice1 = document.getElementById("dice1").value;
    dice2 = document.getElementById("dice2").value;
    dice3 = document.getElementById("dice3").value;
    dice4 = document.getElementById("dice4").value;
    dice5 = document.getElementById("dice5").value;

    dice1Int = parseInt(dice1);
    dice2Int = parseInt(dice2);
    dice3Int = parseInt(dice3);
    dice4Int = parseInt(dice4);
    dice5Int = parseInt(dice5);
    
    sum = dice1Int + dice2Int + dice3Int + dice4Int + dice5Int;
    document.getElementById("sum").innerHTML = sum;

    if (sum > 20) {
        document.getElementById("winner").innerHTML = "You Won!";
        } 
    else {
        document.getElementById("winner").innerHTML = "You Lost!";
        }
}

