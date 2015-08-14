// Pseudoclassical-pattern
var Car = function(loc) {
    /* When called with keyword 'new' this step happens:
    var this = Object.create(Car.prototype);
    */

    this.loc
    
    /* When called with keyword 'new' this step happens:
    return this;
    */
};

Car.prototype.move = function(){
        this.loc++;
};


console.log(Car.prototype.constructor);



var amy = new Car(1);
amy.move();
var ben = new Car(9);
ben.move();

console.log(amy.constructor);
console.log(amy instanceof Car); //True