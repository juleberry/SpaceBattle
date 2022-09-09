// *-*-*-*-*-*-*-*-*
//  SPACE * BATTLE 
// *-*-*-*-*-*-*-*-*

let remainingHull
let remainingMainHull
let target

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
  } else if (allAlien[i] === undefined) {
    console.log(`Congratulations, ${userShip.name}! You have destroyed all of the Alien Ships and saved planet Earth!`)
  } else if (target.hull > 0) {
      target.attackMain(this)
      (console.log(`You missed!! AlienShip has ${target.hull} hull.`))
    }
  }
  fightAlien(target) {
    remainingHull = target.hull -= this.firepower
    if (remainingHull > 0) {
        console.log(`You attacked with ${this.firepower} firepower and hit the alien ship!`)
        if (remainingHull > 0) {
        console.log(`AlienShip now has ${remainingHull} hull.`)
      }
        allAlien[i].attackMain(userShip)
      } else if (remainingHull <= 0) {
        allAlien.shift()
        console.log(`You attacked with ${this.firepower} firepower and destroyed the AlienShip!`)
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
    this.fightMain(userShip)
    } else if (remainingAlienHull <= 0) {
      allAlien.shift()
      console.log("You have destroyed AlienShip!")
      userChoice()
    }
  }
  fightMain(targetUser) {
      remainingMainHull = targetUser.hull - this.firepower
      console.log(`AlienShip hit you with ${this.firepower} firepower!`)
      if (remainingMainHull > 0) {
      console.log(`You now have ${remainingMainHull} hull.`)
      userShip.attackAlien(this)
    } else {
      console.log(`${userShip.name} has been destroyed. Earth is doomed!`)
      console.log("Click 'Quit Game' to Quit or Play Again.")
    }
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
if (confirm(`Ready to fight next AlienShip?\nClick "OK" to continue or "Cancel" to quit.`)) {
    userShip.attackAlien(this);
} else {
    retreat() //if choice is false quit game
  }
}
  
const retreat = () => {
  if (confirm(`Are you sure you want to quit?\n Click "OK" to Quit or "Cancel" to continue.`) == true) {
    text = "Play Again Later";
    window.location.reload()
  } else {
    text = "Keep Going!";
  }
  }

// *******************
// -- START OF GAME --
// *******************
console.log(`Greetings!\nEarth has been attacked by a horde of aliens!\nYou are the captain of the ${userShip.name} on a mission to destroy every last alien ship.`)

const startGame = () => {
  if(confirm(`Ready to attack?\nClick "OK" to attack or "Cancel" to Quit`)) {
    for (i = 0; i < allAlien.length; i++) {
    target = allAlien[i]
      while (target.hull > 0) {
        console.log(`${userShip.name} VS AlienShip ${target.name}...`)
        userShip.attackAlien(target);
      } if (userShip.hull <= 0) {
        console.log(`${userShip.name} has been destroyed. Earth is doomed!`)
        console.log("Click 'Quit Game' to Quit or Play Again.")
      } else if (target === undefined) {
        console.log(`Congratulations, ${userShip.name}! You have destroyed all of the Alien Ships and saved planet Earth!`)
      }
    }
  }
}


// ---------------------------
// --- button click events ---
// ---------------------------
const beginGame = () => {
  // let gameInfoLoc = document.getElementById('gameInfo')
  // let subtitle = document.getElementById('subtitle')
  // subtitle.style.display = 'none';
  // let title = document.getElementById('title')
  // title.style.fontSize = "2rem"
  // let shipImage = document.createElement('img')
  // gameInfoLoc.parentNode.insertBefore(shipImage, gameInfoLoc)
  // shipImage.setAttribute('src', 'images/spaceship-clipart.png')
  // shipImage.style.height = '30%'
  console.log('Battle the aliens as you try to destroy them with your lasers.\nGet ready!')
  startGame()
}

let startButton = document.getElementById('startButton')
startButton.addEventListener('click', beginGame, { passive: false });

let quitAlert = document.getElementById('quitGame')
quitAlert.addEventListener('click', () => {
  let text
if (confirm("Are you sure you want to quit?") == true) {
  text = "Play Again Later";
  window.location.reload()

} else {
  text = "Keep Going!";
}
})