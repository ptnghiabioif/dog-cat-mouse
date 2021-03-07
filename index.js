var Dog = require('./Dog');
var Cat = require('./Cat')

var dog = new Dog('Tom');
var cat = new Cat() 
dog.sayHi();
dog.eat(cat);
console.log(dog)