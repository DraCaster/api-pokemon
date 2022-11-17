import query from '../resolvers/query';

describe('Query', () => {
    
    test('should be an array of pokemons', () => {
        const result = query.pokemons();
        expect(result).toBeInstanceOf(Array);
    });

    test('should return a pokemon by entry_number', () => {
        const result = query.getPokemon(undefined, { entry_number: 1 });
        expect(result).toHaveProperty('name', 'bulbasaur');
    }

    test('should return a pokemon by name', () => {
        const result = query.getPokemon(undefined, { name: 'bulbasaur' });
        expect(result).toHaveProperty('entry_number', 1);
    }
}
