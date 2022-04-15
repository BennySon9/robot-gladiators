// Game stats
// "WIN" - player robot has defeated all enemy-robots
// ** fight all enemy-robots
// ** defeat each enemy-robot
// "LOSE" - player robots health is zero or less

// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var fightOrSkip = function () {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );
  // conditional recursive function call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  // if player picks SKIP confirm and then stop loop
  promptFight = promptFight.toLowerCase();
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes, leave fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name + " has decided to skip this fight. Goodbye!"
      );
      // subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      shop();
      return true;
    }
  }
  return false;
};

// fight function w enemy names
var fight = function (enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;
  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
  // repeat and execute as long as the enemy-robot is alive
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if theyd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, fight by breaking loop
        break;
      }
      // generate random damage value based onn players attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      // remove enemys health by subtracting from players attack var
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.Name +
          ". " +
          enemy.Name +
          " now has " +
          enemy.Health +
          " health remaining."
      );

      // check enemys health
      if (enemy.health <= 0) {
        window.alert(enemy.Name + " has died!");
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(
          enemy.name + " still has " + enemy.health + " health left."
        );
      }
      // player gets attacked first
    } else {
      // generate random damage value based on enemies attack power
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove players health by subtracting the amount set in the enemyAttack
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.Name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player robot health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(
          playerInfo.name + " still has " + playerInfo.health + " health left."
        );
      }
      // switch turn order for next round
      isPlayerTurn = !isPlayerTurn;
    }
  }
};

// function to set name
var getPlayerName = function () {
  var name = "";
  // *********************************
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  // *********************************
  console.log("Your robot's name is " + name);
  return name;
};

// game info / variables / playerinfo
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  }, // comma
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

// multiple enemy info array of enemy objects
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

// fight each enemy-robot by looping over them fighting them one at a time
// function to start a new game
var startGame = function () {
  // reset player stats
  playerInfo.reset();
  // fight each enemy robot by looping over them and fight them one at a time till out of enemies
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      //let player know what round they are in, arrays start at 0, so needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      // pick new enemy to fight based on index of enemyNames array
      var pickedEnemyObj = enemyInfo[i];
      // reset enemy health before new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      // pass pickedEnemyName var value into fight function, where it will assume vale of enemyName parameter
      fight(pickedEnemyObj);
      // if were not at the last enemy of the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm(
          "The Fight is over, visit the store before the next round?"
        );
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player isnt alive, game ends
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // after loiop ends, player is either out of health, or enemies to fight, so run the endgame function
  endGame();
};

// function to end the entire game
var endGame = function () {
  // if player is still alive, player wins
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survive the game! You now have a score of " +
        playerInfo.money +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if theyd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  //ask player what theyd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1, 2, or 3 for LEAVE."
  );
  shopOptionPrompt = parseInt(shopOptionPrompt);
  // use switch to carry out action
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;

    case 2:
      playerInfo.upgradeAttack();
      break;

    case 3:
      window.alert("Leaving the store.");
      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try Again.");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// start the game when the page loads
startGame();
