import 'babel-polyfill'
import 'whatwg-fetch'

const fetchAsync = async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();

    return data;
}

const main = async function main() {
    const API_KEY = 'be20a1b36b3a4ac78710b08becc7537e';
    const BASE_URL = `https://www.wanikani.com/api/user/${API_KEY}/`;
    const LEVEL_PROGRESSION = `${BASE_URL}level-progression`;
    const RECENT_UNLOCK = `${BASE_URL}recent-unlocks/1`;
    const KANJI = `${BASE_URL}kanji`;

    let progressionData, recentUnlockData, kanjiData;
    await fetchAsync(LEVEL_PROGRESSION)
        .then(data => progressionData = data)
        .catch(reason => console.log(reason));

    await fetchAsync(RECENT_UNLOCK)
        .then(data => recentUnlockData = data)
        .catch(reason => console.log(reason));

    await fetchAsync(KANJI)
        .then(data => kanjiData = data)
        .catch(reason => console.log(reason));

    console.log('done! here:', progressionData);
    document.querySelector('.current-level').innerHTML = progressionData.user_information.level;

    const recentKanji = recentUnlockData.requested_information[0];
    document.querySelector('.recent-kanji.kanji').innerHTML = recentKanji.character;
    document.querySelector('.recent-kanji.kana').innerHTML = recentKanji.kana;
    document.querySelector('.recent-kanji.meaning').innerHTML = recentKanji.meaning;
}

window.onload = () => main();
