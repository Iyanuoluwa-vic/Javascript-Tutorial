// how to create an array in javascript
const friend = ["john", "jane", "joe", undefined, null];
console.log(friend);

//  how to access the elements of an array in javascript using index
console.log(friend[0]);
console.log(friend[1]);

let bestFriend = friend[2];
console.log(bestFriend);

// change the value of an element in an array
friend[2] = "jim";
console.log(friend);

// how to add an element to an array in javascripts
friend.push("jim");
console.log(friend);
