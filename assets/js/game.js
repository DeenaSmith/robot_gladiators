
var welcomeWindow = window.alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 40;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 30;
var enemyAttack = 12;


console.log("EA",enemyAttack);
console.log("EH",enemyHealth);

// Function to generate random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


    // Alert that players are starting
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
    // window.alert("Welcome to Robot Gladiators!");

      // Option to skip the fight
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {

      // generate random damage value based on player attack power
      var damage = randomNumber(playerAttack - 3, playerAttack);

      enemyHealth = Math.max(0, enemyHealth - damage);
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
    
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
    
      // generate random damage value based on enemy attack power
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      
      playerHealth = Math.max(0, playerHealth - enemyAttack);
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player chooses to skip, stop the loop
   } 
   if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
    }
  }

}


// Begin Game function
var startGame = function() {

  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Robot Gladiators - Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = randomNumber(40, 60);

      fight(pickedEnemyName);

      // if we're not at the last enemy in the array AND is still alive
      if (playerHealth > 0 && i < enemyNames.length - 1) {

      // Ask player if they want to visit the store
      var storeConfirm = window.confirm("The fight is over...visit the store before the next round?")

      if (storeConfirm) {
        shop();
      }
        
      }
  }
  
     else {
      window.alert("You have been defeated...Game Over!");
      break; 
    }
  }
  endGame();
};


// function to end entire game

var endGame = function() {
  // if player lives, player wins
  if (playerHealth > 0) {
    window.alert("Excellent work, you have survived. You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You have lost your battle. The fight has ended.");
  }

  // ask player if they would like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // game starts again
    startGame();
  } else {
    window.alert("Thanks for playing! Come back soon...if you dare.")
  }
  
}


// SHOP function

var shop = function() {
  // Ask player what they would like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to choose.")

  // use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");

      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
    
    break;
  case "UPGRADE":
  case "upgrade":
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");

      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
    
    break;
  case "LEAVE":
  case "leave":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}
};


startGame();


// fight ();