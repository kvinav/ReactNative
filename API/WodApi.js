export function getWods () {
  const url = 'https://avignonkevin.com/api/public/index.php/api/wod/2'
  return fetch(url)
    .then((response) => response.text())
    .catch((error) => console.error(error))
}

