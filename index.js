import myCollection from './collection.js'; 
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

//console.log(myCollection);

function describeItem(i) {
if (myCollection[i].count === 1) {
    console.log("I have " + chalk.yellow("a ") + chalk.cyan(myCollection[i].name) + ". Here's what i like about it: "  + chalk.green(myCollection[i].whatILike) + "." );
}
else console.log("I have " + chalk.yellow(myCollection[i].count)  + " " + chalk.cyan(myCollection[i].name) + "'s. Heres what I like about them: " + chalk.green(myCollection[i].whatILike) + " .");
};
//describeItem(0);

function describeCollection(array){

  for(let i=0; i<array.length; i++){
     describeItem(i);
  }
 
}

 describeCollection(myCollection);
