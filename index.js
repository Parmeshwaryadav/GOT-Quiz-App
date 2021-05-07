var readlinesync =require("readline-sync");
var chalk =require("chalk");


var userName =readlinesync.question(chalk.cyanBright.bold("What is Your Name ? "));
console.log(chalk.green.bold("Welcome "+ userName + " to GOT Quiz!!"));

console.log('\n');
console.log(chalk.bgRedBright('Rules :'));
console.log(chalk.bgBlueBright.bold('1.',userName + ', There are 5 Questions on G O T Web show. '));
console.log('2. You will get 2 points on each Right Answer & -1 if wrong. ');
console.log(chalk.green.bold("Let The Quiz Begins !! "));
console.log('\n');
//global var
var score = 0;
function app(question, answer) {
  var userAnswer =readlinesync.question(chalk.cyanBright.bold(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("you are Right"));
    score = score+2;
  } else {
    console.log(chalk.green.bold("you are Wrong"));
    console.log('The Correct Answer is:',answer);
    score = score-1;
  }
console.log(chalk.bgRedBright(" your Score is : "+ score + " " ));
console.log(chalk.yellowBright('\n------------------\n'));
};
//questionList
var questionsList = [{
  question: "Is Jon Snow a dragon ? yes/no ! ",
  answer: "no"
}, {
  question: "who killed daenerys ? ",
  array : ['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
  answer: "Jon Snow"
}, {
  question: "Is Cersei a 'good' or 'evil' queen ? ",
  answer: "evil"
}];
//Loop
for(var i = 0;i<questionsList.length;i++){
  console.log('\n');
  app(questionsList[i].question,questionsList[i].answer);
}

//high score
console.log('Final score is  :' + score);
highScore = [{
  userName: "Mohit",
  point: 2,
}, {
  userName: "Zeno",
  point: 4,
}]
console.log(chalk.bgYellow(" High Score "));
console.table(highScore);
var max = highScore[0].point;
for (let i = 1; i < highScore.length; ++i) {
  if (highScore[i].point > max) {
    max = highScore[i].point;
  }
}
if(score>max){
    console.log(chalk.inverse.bold("\n Congrats You beaten a High Score \n"));
}
else{
    console.log(chalk.inverse.bold("\n Better Luck Next Time \n"));

}
