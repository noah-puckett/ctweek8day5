
export const getQuote = () => {
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(res => {
            if(!res.ok) throw 'Ohhhhhdang something went wrong you can\'t get quotes!';
            return res.json();
        })
        .then(([json]) => {
            return { quote: json.quote, characterName: json.character, characterImage: json.image };
        });
};
