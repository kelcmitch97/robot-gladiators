// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;

// check to see if the value of the playerHealth var is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 10;

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators");

    // subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' var
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know that it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");

    // check enemys health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' var
    playerHealth = playerHealth - enemyAttack;

    // log a resulting message to the console so we know that it worked
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. ");

    // check enemys health
    if (playerHealth <=0) {
        window.alert(playerName + " has died! ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }
}

fight();