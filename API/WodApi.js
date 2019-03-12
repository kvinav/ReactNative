export function getWods() {
  return fetch('https://avignonkevin.com/api/public/index.php/api/wods')
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

