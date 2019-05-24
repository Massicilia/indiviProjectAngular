import {Pokemon} from './.'
export function turnOrder(poke1: Pokemon, poke2: Pokemon): Pokemon {
    if(poke1.getSpeed() > poke2.getSpeed()){
        return poke1;
    }
    return poke2;
}