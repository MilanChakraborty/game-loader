const GAME_TITLE = process.argv[2];
const gameState = require(`./saved-games/${GAME_TITLE}.json`);

const main = () => {
  fetch('http://localhost:8000/test/1/game-state', {
    method: 'PATCH',
    body: JSON.stringify(gameState),
    headers: { 'content-type': 'application/json' },
  });
};

main();
