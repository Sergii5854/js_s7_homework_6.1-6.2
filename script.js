
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
 function getNumberOfSymbvol() {    
      return document.getElementById('todoInput').value.length  
  }
 var result = getNumberOfSymbvol()

   function apendRes() {
        document.addEventListener('keypress', function todoList (event) {
               if (event.keyCode == 13) {
                //var input = document.getElementById('todoInput').value.length
                var input = getNumberOfSymbvol()
                document.getElementById('result').innerHTML = input   
                document.getElementById('todoInput').value =''
            }
        }, false)
    }
   apendRes()
}
value()