
function randNumGenerator(randint){   
  let rand = Math.floor(Math.random() * randint);
  return rand;
  
  }
  


// let randNum = randNumGenerator(4);
// console.log(randNum);


 
function getchoice(){
  let list1 = ["rock", "paper", "scissor", "scissor", "paper", "rock"];
  let listLength = list1.length;
  let randchoice = randNumGenerator(listLength);
  let randchoice2 = list1[randchoice];
  return randchoice2;
}

  
// $(".play").click{function(){
//   let computerchoice = $("")

// }}


$(".play").click(function() {
  let computerchoice = getchoice();

  $(".computerChoice").text(computerchoice);

  let userChoice = $(".input").val();
  $(".userChoice").text(userChoice);

  if (userChoice === computerchoice){
    $(".result").text("Tie");
  }
  else if (userChoice === "rock" && computerchoice === "paper"){
    $(".result").text("Computer Win!");
  }

  else if (userChoice === "rock" && computerchoice === "scissor"){
    $(".result").text("You Win!");
  }
  
  else if (userChoice === "paper" && computerchoice === "scissor"){
    $(".result").text("Computer Win!");
  }

  else if (userChoice === "paper" && computerchoice === "rock"){
    $(".result").text("You Win!");
  }

  else if (userChoice === "scissor" && computerchoice === "rock"){
    $(".result").text("Computer Win!");
  }

  else if (userChoice === "scissor" && computerchoice === "paper"){
    $(".result").text("You Win!");
  }

  


  else{
    $(".result").text("Enter a correct value");
  }
 
});
