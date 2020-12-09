"use strict";
const request = require(`request`);
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
module.exports = {
    searchTMDB: (type, searchQuery) => {
        const headers = {
            'content-type': 'application/json',
        };
        return new Promise((resolve, reject) => {
            const URL = `${BASE_URL}search/${type}/?query=${searchQuery}&api_key=${API_KEY}`;
            request.get(URL, {
                headers,
            }, (err, response, body) => {
                console.log(err, body, response);
                if (err) {
                    reject(err);
                }
                else if (response && response.statusCode === 200) {
                    resolve(body);
                }
                else {
                    reject(body);
                }
            });
        });
    },
};
//# sourceMappingURL=TMDBService.js.map