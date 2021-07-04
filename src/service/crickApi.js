const API_KEY = "9sc2M4YZYHdJlZdhsjKuc8eLYr43" ;

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return  fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));

};

export const getMatchDetails = (id) => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}&unique_id=${id}`;
    
    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
}
