// Functional Subclassing pattern

// Superclass

var Car = function(loc) {
    var obj = {loc: loc};
    obj.move = function(){
        obj.loc++;
    };
    return obj;
}

// Subclasses
var Van = function(loc){
    var obj = Car(loc);
    obj.grab = function(){};
    return obj;
}

// Subclasses
var Cop = function(loc){
    var obj = Car(loc);
    obj.call = function(){};
    return obj;
}




var amy = new Van(1);
amy.move();
var ben = new Van(9);
ben.move();
var cal = Cop(2);
cal.move();
