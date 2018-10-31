var chai = require('chai')
var expect = chai.expect

var AdaCat = require('./AdaCat')

describe('AdaCat', function() {
  it('is a class', function() {
    var myCat = new AdaCat('jeff', 'alex')
    expect(myCat).to.be.an.instanceOf(AdaCat)
  })

  describe('#constructor', function() {
    it('takes name and sets it as an attribute', function() {
      var myCat = new AdaCat('taffy', 'alex')
      expect(myCat.name).to.equal('taffy')
    })

    it('takes owner and sets it as an attribute', function() {
      var myCat = new AdaCat('buttons', 'alex')
      expect(myCat.owner).to.equal('alex')
    })

    it('sets the hunger attribute to 5', function() {
      var myCat = new AdaCat('greg', 'alex')
      expect(myCat.hunger).to.equal(5)
    })

    it('sets the isSleeping attribute to false', function() {
      var myCat = new AdaCat('denim', 'alex')
      expect(myCat.isSleeping).to.equal(false)
    })

    it('sets the size attribute to 30', function() {
      var myCat = new AdaCat('toyota', 'alex')
      expect(myCat.size).to.equal(30)
    })

    it('sets the tiredness attribute to 7', function () {
      var myCat = new AdaCat('pookey', 'me')
      expect(myCat.tiredness).to.equal(7)
    })

    it('sets message (cat status) attribute to empty string', function() {
      var myCat = new AdaCat('muphey', 'toney')
      expect(myCat.message).to.equal('')
    })
  })

  describe('#getDescription', function() {
    it('includes the name and owner', function() {
      var myCat = new AdaCat('decking', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[0]).to.equal('decking is a cat. they belong to alex.')
    })

    it('includes the hunger level', function() {
      var myCat = new AdaCat('socks', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[1]).to.equal('their hunger level is 5/10.')
    })

    it('tells you if the cat is awake', function() {
      var myCat = new AdaCat('marmite', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[5]).to.equal('marmite is awake.')
    })

    it('tells you if the cat is asleep', function() {
      var myCat = new AdaCat('mc splinters', 'alex')
      myCat.nap()
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[5]).to.equal('Shh! mc splinters is sleeping.')
    })

    it('includes the cat size', function() {
      var myCat = new AdaCat('oak', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[2]).to.equal('they weigh 30 tonnes.')
    })

    it('includes the health level', function() {
      var myCat = new AdaCat('professor dangle', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[3]).to.equal('their health is 25/30.')
    })

    it('includes cat tiredness level', function() {
      var myCat = new AdaCat('Pharaoh', 'Prof. Banner')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[4]).to.equal('their tiredness level is 7/15')
    })

    it('include cat status message', function() {
      var myCat = new AdaCat('stoner', 'prophet QJ')
      myCat.message = 'tearing rat apart :)'
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[6]).to.equal('the cat is tearing rat apart :)')
    })

  })

  describe('#feed', function() {
    it('decreases the hunger attribute by 1', function() {
      var myCat = new AdaCat('mittens', 'alex')
      myCat.feed()
      expect(myCat.hunger).to.equal(4)
    })

    it('does not decrease hunger below 0', function() {
      var myCat = new AdaCat('leggy', 'alex')
      myCat.hunger = 0
      myCat.feed()
      expect(myCat.hunger).to.equal(0)
    })

    it('increases size when hunger is less than three', function() {
      var myCat = new AdaCat('pencil', 'alex')
      myCat.hunger = 2
      myCat.feed()
      expect(myCat.size).to.equal(31)
    })

    it('increases tiredness attribute by 1', function() {
      var myCat = new AdaCat('roofus', 'rudy')
      myCat.feed()
      expect(myCat.tiredness).to.equal(8)
    })

    it('does not increase tiredness more than 15', function() {
      var myCat = new AdaCat('leylie', 'afney')
      myCat.tiredness = 15
      myCat.feed()
      expect(myCat.tiredness).to.equal(15)
    })

    it('changes status message to eating', function() {
      var myCat = new AdaCat('genius', 'uncle sam')
      myCat.feed()
      expect(myCat.message).to.equal('eating')
    })

    it('cat can be fed while awake', function() {
      var myCat = new AdaCat('gewoos', 'aster')
      myCat.isSleeping = false
      myCat.feed()
      expect(myCat.hunger).to.equal(4) //cat has been fed
    })

    it('cat can not be fed while asleep', function() {
      var myCat = new AdaCat('zenga', 'bein')
      myCat.nap()
      myCat.feed()
      expect(myCat.hunger).to.equal(5)
    })

    it('feedback message on feeding asleep cat', function() {
      var myCat = new AdaCat('numus', 'jastor')
      myCat.nap()
      myCat.feed()
      expect(myCat.message).to.equal("sleeping and won't sense the food")
    })

  })

  describe('#nap', function() {
    it('sets the isSleeping attribute to true', function() {
      var myCat = new AdaCat('apple', 'alex')
      myCat.nap()
      expect(myCat.isSleeping).to.equal(true)
    })

    it('sets the tiredness level to 0', function() {
      var myCat = new AdaCat('hoopie', 'deidon')
      myCat.nap()
      expect(myCat.tiredness).to.equal(0)
    })

    it("changes status message to munching in it's sleep", function() {
      var myCat = new AdaCat('genius', 'uncle sam')
      myCat.nap()
      expect(myCat.message).to.equal("munching in it's sleep")
    })

  })

  describe('#wakeUp', function() {
    it('sets the isSleeping attribute to false', function() {
      var myCat = new AdaCat('brick', 'alex')
      myCat.isSleeping = true
      myCat.wakeUp()
      expect(myCat.isSleeping).to.equal(false)
    })

    it("changes status message to meowing out of boredom", function() {
      var myCat = new AdaCat('poofie', 'DJ DogeCoin')
      myCat.wakeUp()
      expect(myCat.message).to.equal("meowing out of boredom")
    })
  })

  describe('#play', function() {
    it('increases hunger by 3', function() {
      var myCat = new AdaCat('zebra', 'alex')
      myCat.play()
      expect(myCat.hunger).to.equal(8)
    })

    it('will not increase hunger above 10', function() {
      var myCat = new AdaCat('jorts', 'alex')
      myCat.hunger = 9
      myCat.play()
      expect(myCat.hunger).to.equal(10)
    })

    it('decreases size when hunger is above 7', function() {
      var myCat = new AdaCat('ada', 'alex')
      myCat.hunger = 8
      myCat.play()
      expect(myCat.size).to.equal(29)
    })

    it('increases tiredness by 3', function() {
      var myCat = new AdaCat('soofu', 'jane')
      myCat.play()
      expect(myCat.tiredness).to.equal(10)
    })

    it('does not increase tiredness more than 15', function() {
      var myCat = new AdaCat('boggie', 'kalle')
      myCat.tiredness = 14
      myCat.play()
      expect(myCat.tiredness).to.equal(15)
    })

    it("changes status message to playing", function() {
      var myCat = new AdaCat('Black Lotus', 'MTG Collector')
      myCat.play()
      expect(myCat.message).to.equal("playing")
    })
  })

  describe('#getHealth', function() {
    it('is 30 when size = 30, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 30
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(30)
    })

    it('is 25 when size = 25, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 25
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(25)
    })

    it('is 25 when size = 35, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 35
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(25)
    })

    it('is 5 when size = 5, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 5
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(5)
    })

    it('is 5 when size = 55, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 55
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(5)
    })

    it('is 0 when size = 65, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 65
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(0)
    })

    it('is 23 when size = 30, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 30
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(23)
    })

    it('is 18 when size = 25, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 25
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(18)
    })

    it('is 18 when size = 35, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 35
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(18)
    })

    it('is 2 when size = 5, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 5
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(2)
    })

    it('is 2 when size = 55, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 55
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(2)
    })

    it('is 0 when size = 1, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 1
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(0)
    })
  })
})
