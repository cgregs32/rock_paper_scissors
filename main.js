var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var reset_game = document.getElementById('reset_game')

var win_total = 0
var lose_total = 0
var tie_total = 0

function r_p_c(){
  var array = ['rock', 'paper', 'scissors']
  var computer_choice = array[Math.floor(Math.random() * array.length)]
  return computer_choice
}

function winner_condition(player, computer){
  switch (computer) {
    case 'rock':
      if (player === 'rock')
        tie()
      else if (player === 'paper')
        win()
      else
        lose()
      break;
    case 'paper':
      if (player === 'rock')
        lose()
      else if (player === 'paper')
        tie()
      else
        win()
      break;
    case 'scissors':
      if (player === 'rock')
        win()
      else if (player === 'paper')
        lose()
      else
        tie()
      break;
  }
}


function win (){
  win_total++
  var win = document.getElementById('win')
  win.innerHTML = win_total
  inject_statement("You Won!")
}
function lose (){
  lose_total++
  var lose = document.getElementById('lose')
  lose.innerHTML = lose_total
  inject_statement('You Lose!')
}
function tie (){
  tie_total++
  var tie = document.getElementById('tie')
  tie.innerHTML = tie_total
  inject_statement('You Tied!')
}

function choice(computer){
  element = "<i class='fa fa-hand-" + computer + "-o' aria-hidden='true'></i>"
  var computer_choice_print = document.getElementById('computer_choice')
  computer_choice_print.innerHTML = element
}

function remove_style(clicked){
  if (clicked === 'rock'){
    paper.classList.remove("click_color")
    scissors.classList.remove("click_color")
  } else if (clicked === 'paper'){
    rock.classList.remove("click_color")
    scissors.classList.remove("click_color")
  } else {
    rock.classList.remove("click_color")
    paper.classList.remove("click_color")
  }
}
function inject_statement(option){
  var win_declaration = document.getElementById('win_declaration')
  win_declaration.innerHTML = document.createElement('div').innerHTML = option
}

function clear_game(){
  console.log("click")
  var tie = document.getElementById('tie')
  var lose = document.getElementById('lose')
  var win = document.getElementById('win')
  win_total = 0
  lose_total = 0
  tie_total = 0
  tie.innerHTML = tie_total
  win.innerHTML = win_total
  lose.innerHTML = lose_total
  paper.classList.remove("click_color")
  scissors.classList.remove("click_color")
  rock.classList.remove("click_color")
  document.getElementById('computer_choice').innerHTML = ""
  inject_statement("")
}

reset_game.addEventListener('click', clear_game)

rock.addEventListener('click', function(){
  this.classList.add("click_color")
  var comp_choice = r_p_c()
  winner_condition('rock', comp_choice)
  choice(comp_choice)
  remove_style("rock")
});

paper.addEventListener('click', function(){
  this.classList.add("click_color")
  var comp_choice = r_p_c()
  winner_condition('paper', comp_choice)
  choice(comp_choice)
  remove_style("paper")
});

scissors.addEventListener('click', function(){
  this.classList.add("click_color")
  var comp_choice = r_p_c()
  winner_condition('scissors', comp_choice)
  choice(comp_choice)
  remove_style("scissors")
});
