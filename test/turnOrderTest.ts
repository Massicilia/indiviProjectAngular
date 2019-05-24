import {turnOrder} from "../src/turnOrder";
import {pokemon} from '../src/pokemon';


let pikachu = new Pokemon('Pikachu', 5);
pikachu.showName();
let meowth = new  Pokemon('Meowth', 4);
meowth.showName();

test("Pikachu should be first", () =>{
    expect(turnOrder(pikachu, meowth)).toBe(pikachu);
});