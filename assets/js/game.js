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
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create array for enemy robots
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

for (var i = 0; i < enemyNames.length; i++) {
  debugger;
  // call fight function with enemy-robot
}

// fight function
var fight = function (enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while (enemyHealth > 0 && enemyHealth > 0) {
    //ask player if theyd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks SKIP confirm and then stop loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes, leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    // remove enemys health by subtracting from players attack var
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
      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
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
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// fight each enemy-robot by looping over them fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    //let player know what round they are in, arrays start at 0, so needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    // pick new enemy to fight based on index of enemyNames array
    var pickedEnemyName = enemyNames[i];
    // reset enemy health before new fight
    enemyHealth = 50;
    // pass pickedEnemyName var value into fight function, where it will assume vale of enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isnt alive, game ends
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
