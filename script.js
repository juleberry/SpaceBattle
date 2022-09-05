// *-*-*-*-*-*-*-*-*
//  SPACE * BATTLE 
// *-*-*-*-*-*-*-*-*


// let quitButton = document.getElementById('quitGame')
// quitButton.addEventListener('click', function (){
//   quitLink = document.getElementById('#quitgame')
// })

// reload page -- document.location.reload()

// base ship to build other ships
class Ship {
  constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull, 
      this.firepower = firepower,
      this.accuracy = accuracy
  }
}

// base for user ship -- new user ship options in future?
class MainShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    // maybe have player choose their own name
    this.name = name,
    this.hull = hull,
    this.firepower = firepower,
    this.accuracy = accuracy
  }
  // bind the method
  attackAlien(target) {
  if (this.hull >= target.hull) {
    this.fightAlien(allAlien[i]);
  } else if (target.hull <= 0) {
      console.log(`You destroyed ${target.name}!`)
      userChoice()
  } else if (target.hull > 0) {
      target.attackMain(this)
      (console.log(`You missed!! AlienShip has ${target.hull} hull.`))
    }
  }
  fightAlien(target) {
    let remainingHull = target.hull -= this.firepower
    if (remainingHull > 0) {
        console.log("You hit the alien ship!");
        console.log(`AlienShip now has ${remainingHull} hull.`);
        allAlien[i].attackMain()
      } else if (remainingHull <= 0) {
        allAlien.shift()
        console.log("You have destroyed AlienShip!")
        userChoice()
      }
    }
  }

// base for alien ships
class AlienShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy)
    this.name = name,
    // hull - random between 3 and 6
    this.hull = (Math.floor(Math.random() * 4) + 3),
    // firepower - random between 2 and 4
    this.firepower = (Math.floor(Math.random() * 3) + 2),
    // accuracy - random between .6 and .8
    this.accuracy = (Math.random() * (.2) + .6).toFixed(2)
    }
  attackMain(targetUser) {
    if (this.hull > 0 && targetUser.hull > 0) {
    this.fightMain()
    } else if (remainingAlienHull <= 0) {
      allAlien.shift()
      console.log("You have destroyed AlienShip!")
      this.userChoice()
    }
  }
  fightMain(targetUser) {
    let remainingMainHull = targetUser.hull - this.firepower
      console.log('AlienShip hit you!')
      console.log(`You now have ${remainingMainHull} hull.`)
      userShip.attackAlien(this)
    }
}

// -----------
// - PLAYERS -
// -----------
// create main ship and alien ships
const userShip = new MainShip("USS CRYSTAL", 20, 5, .7)
  const alienShip1 = new AlienShip("Allana")
  const alienShip2 = new AlienShip("Bardan")
  const alienShip3 = new AlienShip("Dash")
  const alienShip4 = new AlienShip("Kagin")
  const alienShip5 = new AlienShip("Natira")
  const alienShip6 = new AlienShip("Zhora")

// array of alien ships to iterate though later on - opponents
const allAlien = [alienShip1 , alienShip2, alienShip3, alienShip4 , alienShip5, alienShip6]

// -------------
// - FUNCTIONS -
// -------------
// retreat = game over and reset values
// win the game = destroy all alien ships
// lose game = you are destroyed
// end game = you destroyed alien (userChoice)

const userChoice = () => {
  // prompt choice to continue or 'retreat'
  confirm("Ready to fight next AlienShip?")
if (confirm) {
    userShip.attackAlien();
  } else {
    userShip.retreat() //if choice is false quit game
  }
}
  
const retreat = () => {
    if (confirm("OK to Quit or Cancel to Keep Playing") == true) {
      console.log("Play Again Later");
      document.location.reload()
      // return to start game area/button
    } else {
      console.log("Keep Going!");
    }
  }

// *******************
// -- START OF GAME --
// setting up text and button layout/flow
// function startGame
// Introduction
// Part 1
// Earth has been attacked by a horde of aliens! You are the captain of the [insert name -- USS Assembly], on a mission to destroy every last alien ship.
// Part 2

// ------------------
// -- WINDOW ALERT --
// ------------------
// alert("Hello! I am an alert box!!");

const startGame = () => {
  console.log(`Earth has been attacked by a horde of aliens! You are the captain of the ${userShip.name}, on a mission to destroy every last alien ship.`)
for (i = 0; i < allAlien.length; i++) {
    let target = allAlien[i]
      while (allAlien[i].hull > 0) {
        userShip.attackAlien(target);
      } if (allAlien[i].hull <= 0) {
        console.log(`${userShip.name} destroyed all of the alien ships and saved Earth!`)
      } else if (userShip.hull <= 0) {
        console.log(`${userShip.name} has been destroyed. Earth is doomed!`)
      }
  }
}

// ---------------------------
// --- button click events ---
// ---------------------------
let startButton = document.getElementById('startButton')
startButton.addEventListener('click', () => {
  startGame() // use the for loop to input each alien here somehow
})

let quitAlert = document.getElementById('quitGame')
quitAlert.addEventListener('click', () => {
  let text
if (confirm("Are you sure you want to quit?") == true) {
  text = "Play Again Later";
} else {
  text = "Keep Going!";
}
})
