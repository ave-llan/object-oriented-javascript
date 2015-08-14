// Prototypal class pattern
var Car = function(loc) {
    // Object.create creates a new object with the given
    // argument object as its prototype
    var obj = Object.create(methods);
    return obj;
};

var methods = {
    move: function(){
        this.loc++;
    }
};


var amy = carlike({}, 1);
amy.move();
var ben = {loc:9};
ben.move();

