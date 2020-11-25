/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

// combination of a function within another function (enclosed together), gives you acces to an outer function scope from an inner. Something nested inside of another thing.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// The function called nestedFunction is still wrapped inside of the parent function which is myFunction and has access to that variable called internal


/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. - it is available locally to counterMaker and within counter function. counter function can go outside of its scope to access the variable 
// Explain why 'count' is initialized with a let and not a var or const. - typically we dont use var anymore because of ES6, and const would not make sense because it will constantly change when incremented. Const means it would stay as the same.
// Explain how initalizing the variable 'count' with a var would change it's scope - var would allow it to change throughout any scope and can be chaotic, AVOID var
*/
function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }






/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window Binding - not something that is supposed to be used. If we provide "this" then it will go to the window or global object, unless in strict mode(will be undefined)
* 2.  Implicit Binding - most common/ highly used, after the function is invoked, look left of the fot to see what what the "this" is refering to, only for object with methods inside
* 3.  Explicit Binding - three ways: .call(), .apply(), .bind().. .call you pass in your arguments 1 by 1, .apply you pass in your arguments as an array, .bind() returns a new func
* 4.  New Binding - using the "new" keyword to construct a new object and "this" points directly to that object, when invoked the "this" within the new keyword points to that object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Your global context depends on where you're working. If you're in the browser, this will be the window. When programming in strict mode, the global context is undefined.

// For example while in Chrome: function printMe = function () { console.log(this); } printMe() // prints your 'Window Object' if in the browser!

// Principle 2

// code example for Implicit Binding

// var MyObject = function (){
//   this.name = 'MyObjectName';
//   this.myProperty = 'property';
// };

// MyObject.prototype.doStuff = function (action) {
//   console.log(this.name + ' is ' + action + '!');
// }

// var obj = new MyObject();

// obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'

// Principle 3

// code example for New Binding

// function newBinding(a){
//   this.a = a;
//  }
//  var newlyCreated = new newBinding(10);
//  console.log(newBinding.a)//10;
//  calling new in front of newBinding, we have constructed a new object and set that new object as the "this" for the call of newBinding.

// Principle 4

// code example for Explicit Binding

// var runner = { name: 'John', myFavoriteActivity: 'running' };
//   MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // prints 'John is running!';





/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(createdAt, name, dimensions){
  this.createdAt = createdAt;
  this.name = name;
  this.dimensions = dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(createdAt, name, dimensions, healthPoints){
  GameObject.call(this, createdAt, name, dimensions)
  this.healthPoints = healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(object){
  return `${object.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(healthPoints, team, weapons, language){
  CharacterStats.call(this, healthPoints)
  this.team = team;
  this.weapons = weapons;
  this.language = language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(object){
  return `${object.name} offers a greeting in ${object.language}.`
}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.







/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */

 