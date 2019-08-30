//I have no idea how to map through these shenanigans, my data is just json, ffff.

export const getCharacters = () => {
    return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
        .then(res => {
            if(!res.ok) throw 'SOMETHING IS ROTTEN IN DENMARK';
            return res.json();
        })
        .then(json => {
            return json;
        });
};

