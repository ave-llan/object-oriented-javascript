// aHero() generates a random name

var log = console.log;

function aHero(){
    heroes = ['Rudy', 'Jynx', 'Kip', 'Popeye', 'Boomer', 'Joey'];
    return heroes[uniformRandom(heroes.length)];
}

function aFoil(){
    foils = ['Fluffy', 'Oliver the Cat', 'Tigre', 'Bella the Cat'];
    return foils[uniformRandom(foils.length)];
}

function aDeed(){
    deeds = ['throws into a river',
             'discovers hiding under a car',
             'shakes', 
             'becomes "friends" with',
             'licks',
             'chases',
             'devours',
             'barks at'];
    return deeds[uniformRandom(deeds.length)];
}

var hero = aHero();
var newSaga = function(){
    var foil = aFoil();
    var saga = function(){
        var deed = aDeed();
        log(hero, deed, foil + '.');
    };
    saga();
    saga();
};

newSaga();
newSaga();


// Returns an integer between [0, max)
function uniformRandom(max) {
    return Math.floor(Math.random() * max)
}

