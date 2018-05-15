
$(document).ready( function() {
  console.log('test')
})

var userScore = 0
var computerScore = 0
var draw = 0
function getComputerChoice(userChoice){
  var options = ['rock', 'paper', 'scisors']
  var randNum = options[Math.floor(Math.random() * 3)]
  updateTotal(userChoice, randNum)
}


$('#rock').on('click', function() {
  var userChoice = 'rock'
  getComputerChoice(userChoice)
})

$('#paper').on('click', function() {
  var userChoice = 'paper'
  getComputerChoice(userChoice)
})

$('#scisors').on('click', function() {
  var userChoice = 'scisors'
 getComputerChoice(userChoice)
})
 function win(user, computer) {
   $('#userLable').text(++userScore)
   $('#winText').text(user + ' beats ' + computer + ' YOU WIN!')
   $('#choiceText').text('You chose ' + user + ' and the computer chose ' + computer)
 }
 function lose(user, computer) {
   $('#computerLable').text(++computerScore)
   $('#winText').text(computer + ' beats ' + user + ' YOU LOSE!')
   $('#choiceText').text('You chose ' + user + ' and the computer chose ' + computer)
 }
 function a_draw(user, computer) {
   $('#tieCounter').text(++draw)
   $('#winText').text(user + ' is the same as ' + computer + ' ITS A DRAW!')
   $('#choiceText').text('You chose ' + user + ' and the computer chose ' + computer)
 }
function updateTotal(userChoice, randNum) {
  switch (userChoice + randNum){
      case "rockscisors":
      case "paperrock":
      case "scisorspaper":
    win(userChoice, randNum)
    break
      case "scisorsrock":
      case "rockpaper":
      case "paperscisors":
    lose(userChoice, randNum)
    break
      case "rockrock":
      case "paperpaper":
      case "scisorsscisors":
    a_draw(userChoice, randNum)
    break
  }

}
