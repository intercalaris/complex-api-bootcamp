// Shows the word and the definition
document.querySelector('#search-button').addEventListener('click', searchWord);

function searchWord() {
    let word = document.querySelector('#word-input').value;
    document.querySelector('#word-name').innerHTML = word;
    
    document.querySelector('#german-translation').innerHTML = '?'; // Reset the ? symbol
    document.querySelector('#spanish-translation').innerHTML = '?'; 
    
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=APIKEY`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#word-definition').innerHTML = `Definition: ${data[0].shortdef[0]}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    
}

// Shows and translates the word in German
document.querySelector('#show-german-word').addEventListener('click', showGermanWord);

function showGermanWord() {
    let authKey = '097e233f-0941-4845-b46a-31f58c7a6700:fx';
    let text = document.querySelector('#word-name').innerHTML;
    fetch(`https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${text}&target_lang=de&formality=less`)
        .then(res => res.json())
        .then(data => {
            console.log(data.translations[0].text)
            document.querySelector('#german-translation').innerHTML = data.translations[0].text
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
};

// Shows and translates the word in Spanish
document.querySelector('#show-spanish-word').addEventListener('click', showSpanishWord);

function showSpanishWord() {
    let authKey = '097e233f-0941-4845-b46a-31f58c7a6700:fx';
    let text = document.querySelector('#word-name').innerHTML;
    fetch(`https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${text}&target_lang=es&formality=less`)
        .then(res => res.json())
        .then(data => {
            console.log(data.translations[0].text)
            document.querySelector('#spanish-translation').innerHTML = data.translations[0].text
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
};

// Gets random word
document.querySelector('#random-word-button').addEventListener('click', getRandomWord)
function getRandomWord() {
    fetch("https://random-word-api.herokuapp.com/word")
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            searchRandomWord(data[0])
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

// Search random word definition
function searchRandomWord(word) {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=2746d714-0448-476c-a27d-43544f77a767`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#word-definition').innerHTML = `Definition: ${data[0].shortdef[0]}`;
            document.querySelector('#word-name').innerHTML = word;

            document.querySelector('#german-translation').innerHTML = '?'; // Reset the ? symbol
            document.querySelector('#spanish-translation').innerHTML = '?'; // Reset the ? symbol
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

