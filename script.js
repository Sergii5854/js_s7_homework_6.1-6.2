function footballTeams(teamName, championshipName, placeTeam) {

    var name = teamName
    var championship = championshipName
    var place = placeTeam 
    
    
    this.name = function () {
        return name
    }

    this.championship = function () {
        return championship
    }

    this.place = function () {
        return place
    }
    return function () {
        console.log('Team name : ' + name)
        console.log('Name championship : ' + championship)
        console.log('Place team : ' + place)
    }
}

var footballTeams = new footballTeams('Dynamo Kyiv', 'Ukrainian Premier League', '2')
footballTeams()

//
function debounce (callback, time) {
  var timer

  return function () {
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      callback(args[0])
    }, time)
  }
}

document
  .querySelector('input[type="search"]')
  .addEventListener('input', debounce(function (event) {
    console.log(event.target.value)
  }, 250), false)

/////

function value() {

  var input = document.querySelector('input[type="search"]')
  var text = " this your length"
  var resultId = document.getElementById('result')
  
  var getNumberOfSymbvol = function() {
   this.res = input // this.res - is diferent 
      return this.res.value.length         
  }

 var apendRes = function () {
    input.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        this.res = resultId
        this.input = input

        this.number = getNumberOfSymbvol()
        this.text = text
        this.res.innerHTML = this.number + this.text 
        this.input.value = ''
      }
    }, false)
  }
  apendRes()
}

value()