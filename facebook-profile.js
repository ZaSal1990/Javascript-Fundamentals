
/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), 
 * `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, 
 * `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here


var facebookProfile = {

  name: 'Zahra',
  friends : 50,
  messages : ['Hello','How are you?', 'Long time!'],
  postMessage(newMessage){facebookProfile.messages.push(newMessage); return facebookProfile.messages;},
  deleteMessage(startIndex,numberOfItems){facebookProfile.messages.splice(startIndex,numberOfItems); return facebookProfile.messages;},
  addFriend(){ return facebookProfile.friends+=1;},
  removeFriend(){ return facebookProfile.friends-=1;}

}

console.log(facebookProfile.name)
console.log(facebookProfile.friends)
console.log(facebookProfile.messages)
console.log(facebookProfile.postMessage('Howdy?'))
console.log(facebookProfile.deleteMessage(facebookProfile.messages.length-1,1))
console.log(facebookProfile.removeFriend())

