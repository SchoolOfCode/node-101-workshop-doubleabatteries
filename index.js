let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!"
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory"
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)"
  }
];
console.log(myCollection);

function describeItem(i) {
if (myCollection[i].count === 1) {
    console.log(`I have a ${ myCollection[i].name }. Here's what i like about it: ${myCollection[i].whatILike}.` );
}
else console.log(`I have ${ myCollection[i].count } ${myCollection[i].name}s. Heres what I like about them: ${myCollection[i].whatILike}`);
};
describeItem(0);