// Prototypal pattern
var Car = function(loc) {
    // Object.create creates a new object with the given
    // argument object as its prototype
    var obj = Object.create(Car.prototype);
    return obj;
};

Car.prototype.move = function(){
        this.loc++;
};


console.log(Car.prototype.constructor);



var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

console.log(amy.constructor);
console.log(amy instanceof Car); //True