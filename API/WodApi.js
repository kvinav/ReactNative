export function getWods () {
  const url = 'https://api.avignonkevin.com/public/index.php/api/wods'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

