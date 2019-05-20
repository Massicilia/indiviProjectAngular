"use strict";
exports.__esModule = true;
function turnOrder(poke1, poke2) {
    if (poke1.getSpeed() > poke2.getSpeed()) {
        return poke1;
    }
    return poke2;
}
exports.turnOrder = turnOrder;
