
// Function to generate random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// function to set name
var getPlayerName = function() {
  var name = "";

while (name === "" || name === null) {
  name = prompt("What is your robot's name?");
}
  console.log("Your robot's name is " + name);
  return name;
}


// Player Info Object
var welcomeWindow = window.alert("Welcome to Robot Gladiators!");

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
  } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    } 
  }
};


// Enemy Array
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];




    // Alert that players are starting
var fight = function(enemy) {

// keep track of who goes first
var isPlayerTurn = true;

if (Math.random() > 0.5) {
  isPlayerTurn = false;
} 


  while(playerInfo.health > 0 && enemy.health > 0) {
    // window.alert("Welcome to Robot Gladiators!");

      // Option to skip the fight
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {

      // generate random damage value based on player attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
      );
    
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
    
      // generate random damage value based on enemy attack power
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      
      playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
      console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
      );
    
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
   } 

    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;

   // if player chooses to skip, stop the loop
   if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money- 10);
        console.log("playerMoney", playerInfo.money);
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
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Robot Gladiators - Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      // if we're not at the last enemy in the array AND is still alive
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

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
  if (playerInfo.health > 0) {
    window.alert("Excellent work, you have survived. You now have a score of " + playerInfo.money + ".");
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
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.")

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
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};


startGame();


// fight ();