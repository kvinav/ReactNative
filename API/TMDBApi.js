const API_TOKEN = 'cf00dbcc550fae09e33282c2277e3f55';

export function getFilmsFromApiWithSearchedText(text, page) {
	const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text +'&page=' + page
	 return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function getFilmsFromApi() {
	const url = 'http://avignonkevin.com/api/public/index.php/api/wods'
	 return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
	return 'https://image.tmdb.org/t/p/w300' + name
}