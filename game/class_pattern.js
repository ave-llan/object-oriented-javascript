// functional class pattern
var Car = function(loc) {
    var obj = {loc: loc};
    return obj;
};

Car.methods = {
    move: function(){
        this.loc++;
    }
};


var amy = carlike({}, 1);
amy.move();
var ben = {loc:9};
ben.move();


// decorates obj with all the properties of the methods object
var extend = function(obj, methods) {
    for(method in methods){
        obj[method] = methods[method];
    }
};