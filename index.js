//import libs 
const readline = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

//Display Game Name
log(chalk.bgYellowBright.bold("How much do you know me!!"));
log(" ");

//Read User Info
let userName = readline.question(chalk.rgb(255, 136, 0).bold("Type your name pal:"));
log(" ");

//Welcome user and display game rules
log(chalk.bgYellow("Welcome to the game,"+" "+chalk.underline(userName.toUpperCase()),"\n","Give your answers as a or b only !!"));
log(" ");

let score = 0;

//Question Data stored in form of array of Objects
let questionsData =[
  {   
      q: chalk.rgb(255, 136, 0)(`My fav color?
      a:Pink
      b:Black\n`),
      a:"b"
},{
      q:chalk.rgb(255, 136, 0)(`My fav Brand?
      a:Aldo
      b:MK\n`),
      a:"a"
},{
      q:chalk.rgb(255, 136, 0)(`My fav resturant in US ?
      a:Angelo's
      b:Urth Cafe\n`),
      a:"a"
      
},{
      q:chalk.rgb(255, 136, 0)(`My fav cuisine?
      a:Mexcican
      b:Italian\n`),
      a:"b"
      
}
]
//score record of all players
let scoreList=
[
  {
    name:"Gopal",
    score:2
  },{
    name:"Sumeet",
    score:4
  },{
    name:"Jyoti",
    score:3

  }

]

//function for game's logic
function play(question,answer){
  let userAns = readline.question(question);

  if(userAns.toLowerCase()===answer.toLowerCase()){
    console.log(chalk.bgCyan("You are right!"));
    console.log(" ");
    score++;
  }else{
    console.log(chalk.bgMagenta("You are wrong!"));
    console.log(" ");
    score--;
  }
  
}

for(let ques of questionsData){
  play(ques.q,ques.a);
}

//Output score
log(chalk.red("Thank you!!Game Over!!"));
log(" ");
log(chalk.rgb(255, 136, 0).bold("You Score:"+" "+score));
log();
log(chalk.red("Do you want to know my best friend based on this game ??"));
log();

//function to find the hightestScorer
let highestScore = 0;
let hightestScorer ="";
for(let i=0;i<scoreList.length;i++)
{
 
  if(scoreList[i].score > highestScore)
  {
    highestScore =scoreList[i].score;
	  hightestScorer = scoreList[i].name;
  }
}

// displaying highest scorer names
if(score == highestScore){
	  log(chalk.bgYellow("MyBFF is"+" "+hightestScorer+" "+"and You!!"));
  }else if(score > highestScore){
	  log(chalk.bgYellow("Hey!You are myBFF !!")); 
  }else{
	  log(chalk.bgYellow("MyBFF is"+" "+hightestScorer+"!!")); 
  }



