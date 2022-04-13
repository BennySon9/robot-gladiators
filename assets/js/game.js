// Game stats
// "WIN" - player robot has defeated all enemy-robots
// ** fight all enemy-robots
// ** defeat each enemy-robot
// "LOSE" - player robots health is zero or less

// var playerName = 'name input into the prompt';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Logging multiple values at once
// (removed for now) console.log(playerName, playerAttack, playerHealth);

// create array for enemy robots
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//console.log(enemyNames);
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);

//for (var i = 0; i < enemyNames.length; i++) {
//console.log(enemyNames[i]);
//console.log(i);
//console.log(enemyNames[i] + " is at " + i + " index");
//}

var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function (enemyName) {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // ask player if theyd like to fight or run
  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemys health by subtracting the amount set in the playerAttack
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemys health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players health by subtracting the amount set in the enemyAttack
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check players health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes, leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no, ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

// run fight function to start game
//fight();
