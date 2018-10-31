class AdaCat { //Ada cat class to create cat object
  constructor(name, owner) { //only two settable attributes = cat name and owner
    this.name = name
    this.owner = owner
    this.hunger = 5
    this.isSleeping = false
    this.size = 30
    this.tiredness = 7
  }

  setHunger(newHunger) { //updates cat's hunger 
    if (newHunger < 0) { //constrains cat hunger to zero or above
      newHunger = 0
    }
    if (newHunger > 10) {//constrains cat hunger to no more than 10
      newHunger = 10
    }
    this.hunger = newHunger // updates cat hunger
  }

  setTiredness(newTiredness) {
    if (newTiredness > 15) {
      newTiredness = 15
    }
    this.tiredness = newTiredness
  }

  getDescription() { //gives the status upate about the cat
    var sleepLine //local variable within the function, we don't want to pulute anything else
    if (this.isSleeping) { //gives a sentence output on cat's awakeness that is stored inside array later on
      sleepLine = 'Shh! ' + this.name + ' is sleeping.'
    } else {
      sleepLine = this.name + ' is awake.'
    }
    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.', 'their tiredness level is ' + this.tiredness + '/15',
      sleepLine
    ] // Cat attributes are being put inside array.
    // [name, owner, weight, health, isSleeping]

    return lines.join('\n')  // array is being joined up into a single string, where each element is being separated in a new line
  }

  feed() { //reduces hunger, updates hunger, can increase obesity
    var hunger = this.hunger - 1 //decreases hunger
    var tiredness = this.tiredness + 1

    if (hunger < 3) { //if too little hunger, cat becomes fatter
      this.size = this.size + 1
    }

    this.setHunger(hunger) //updates hunger
    this.setTiredness(tiredness) //updates tiredness
  }

  nap() { //"puts cat to sleep"
    var tiredness = 0

    this.isSleeping = true
    this.setTiredness(tiredness)
  }

  wakeUp() { //"wakes cat up"
    this.isSleeping = false
  }

  play() { //don't see why from game design standpoint i would use this. Increases hunger, updates hunger. If too hungry, cat becomes skimmer
    var hunger = this.hunger + 3
    var tiredness = this.tiredness + 3

    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger) //updates hunger
    this.setTiredness(tiredness)
  }

  getHealth() { //calculates cat's health based on it's other current attributes
    // the ideal weight for cats is 30
    // the futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30) 

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal //how much cat size deviates from perfect cat

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    return healthScore
  }
}

module.exports = AdaCat //since this is node need to show what to export
