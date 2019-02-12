const API_TOKEN = 'cf00dbcc550fae09e33282c2277e3f55';

export function getFilmsFromApiWithSearchedText(text) {
	const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
	 return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}