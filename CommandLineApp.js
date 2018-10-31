var readlineSync = require('readline-sync') //?
var AdaCat = require('./AdaCat') //needs Ada cat class to work

class CommandLineApp {
  constructor() {
    this.cat = null //app needs a cat, no cat yet
  }

  start() { //
    this.setup()

    var shouldContinue = true //only exists within start()
    while (shouldContinue) { //runs until 
      this.showCatStatus() //I'm assuming that this shows cat status every loop
      shouldContinue = this.runCommand() // runs until you input -1 in runCommand
    }
  }

  setup() { //asks for user input on owner name and cat name, then instantiates the cat
    var owner = readlineSync.question('What is your name? ')
    var name = readlineSync.question('What would you like to name your cat? ')

    this.cat = new AdaCat(name, owner) // creates cat object
  }

  runCommand() { //it orders elements in array from 1 to array.length, but in reality whatever button you click, it gets 1 subtracted from it
    var commandIndex = readlineSync.keyInSelect(
      ['Feed cat', 'Play with cat', 'Tell cat to nap', 'Wake up cat'],
      'What would you like to do?'
    )

    if (commandIndex === -1) {
      console.log(this.wiper() + 'byeeeee')
      return false
    } else if (commandIndex === 0) {
      console.log(this.wiper() + 'You feed your cat.')
      this.cat.feed()
    } else if (commandIndex === 1) {
      console.log(this.wiper() + 'You play with your cat.')
      this.cat.play()
    } else if (commandIndex === 2) {
      console.log(this.wiper() + 'Your cat curls up to sleep.')
      this.cat.nap()
    } else if (commandIndex === 3) {
      console.log(this.wiper() + 'Your cat wakes up, yawns, and stretches.')
      this.cat.wakeUp()
    } else {
      console.log(this.wiper() + "I don't understand :(")
    }

    return true
  }

  showCatStatus() { //Draws the cat :) and gives it's description
    console.log(this.wiper())
    console.log(' /\\___/\\')
    console.log('( o   o )')
    console.log('(  =^=  )')
    console.log('(        )')
    console.log('(         )')
    console.log('(          ))))))))))) ')
    console.log('')
    var catDescription = this.cat.getDescription()
    console.log(catDescription + this.wiper())
  }

  wiper() { // makes display easier to read
    var wipetext = ''
    for (let i=0; i<5; i++) {
      wipetext += '\n'
    }
    return wipetext
  }
}

module.exports = CommandLineApp //exports game object...will be used in index.js
