var Pokemon = /** @class */ (function () {
    function Pokemon(name) {
        this.name = name;
    }
    Pokemon.prototype.getname = function () {
        console.log(this.name);
    };
    return Pokemon;
}());
