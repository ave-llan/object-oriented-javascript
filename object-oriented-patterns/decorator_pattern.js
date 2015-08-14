// this is a decorator pattern because it 
// appends to an existing object

// by convention, the name of a decorator function should be
// an adjective
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        this.loc++;
    }
    return obj;
};



var amy = carlike({}, 1);
amy.move();
var ben = {loc:9};
ben.move();

