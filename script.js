
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

  var getNumberOfSymbvol = function() {   
      return document.querySelector('input[type="search"]').value.length         
  }

 var apendRes = function () {
    document.addEventListener('keypress', function todoList(event) {
      if (event.keyCode === 13) {
          var input = getNumberOfSymbvol()
           var text = " this your length of text"
          document.getElementById('result').innerHTML = input + text 
          document.getElementById('todoInput').value = ''
      }
    }, false)
  }

  apendRes()
}

value()