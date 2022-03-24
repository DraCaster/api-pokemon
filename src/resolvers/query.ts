import { IResolvers } from 'graphql-tools';
import { database } from "../data/data.store";

const query : IResolvers = {
    Query: {
        pokemons(): any { return database.kanto },
        pokemon(__: void, { entry_number }): any {
            return database.kanto.filter(pokemon => pokemon.entry_number === entry_number) [0];
        }
    }
}

export default query