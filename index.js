import myCollection from './collection.js'; 

//console.log(myCollection);

function describeItem(i) {
if (myCollection[i].count === 1) {
    console.log(`I have a ${ myCollection[i].name }. Here's what i like about it: ${myCollection[i].whatILike}.` );
}
else console.log(`I have ${ myCollection[i].count } ${myCollection[i].name}s. Heres what I like about them: ${myCollection[i].whatILike}`);
};
//describeItem(0);

function describeCollection(array){

  for(let i=0; i<array.length; i++){
     describeItem(i);
  }
 
}

describeCollection(myCollection);