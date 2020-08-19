const initialDecks = [];

export default function decksReducer (decks = initialDecks, action) {
    switch(action.type){
        case 'SELECT_DECK':
            return [...action.deck];
        case 'DESELECT_DECK':
            return [...action.deck];
        case 'DESELECT_ALL':
            return initialDecks;
        default:
            return decks;
    }
}