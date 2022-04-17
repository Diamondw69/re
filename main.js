const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", "297704");
encodedParams.append("currency", "USD");

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
        'X-RapidAPI-Key': '1a0af6b432msh8cae0ac1ae7bb79p157de3jsn998346a5fbdb'
    },
    body: encodedParams
};

fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));