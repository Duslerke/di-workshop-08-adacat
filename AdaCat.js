class AdaCat {
  constructor(name, owner) {
    this.name = name
    this.owner = owner
    this.hunger = 5
    this.isSleeping = false
    this.size = 30
  }

  getDescription() {
    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.'
    ]

    return lines.join('\n')
  }

  feed() {
    var hunger = this.hunger - 1
    if (hunger < 0) {
      hunger = 0
    }
    if (hunger < 3) {
      this.size = this.size + 1
    }
    this.hunger = hunger
  }

  nap() {
    this.isSleeping = true
  }

  wakeUp() {
    this.isSleeping = false
  }
}

module.exports = AdaCat
