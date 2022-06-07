const url = `https://goquotes-api.herokuapp.com/api/v1/random?count=1`;
const phrase = document.getElementById('phrase');
const author = document.getElementById('author');
const change = document.getElementById('btnChange');
const facebook = document.getElementById('facebook');
const twitter = document.getElementById('twitter');
const instagram = document.getElementById('instagram');

document.addEventListener('DOMContentLoaded', async() => {
    console.log('DOM loaded');

    await loadPrase();
});

change.addEventListener('click', async() => {
    await loadPrase();
});
facebook.addEventListener('click', () => {
    const text = encodeURIComponent(phrase.innerText);

    window.location.href = `http://facebook.com/sharer/sharer.php?u=${text}`;
});
twitter.addEventListener('click', () => {
    const text = encodeURIComponent(phrase.innerText);

    window.location.href = `https://twitter.com/intent/tweet?text=${text}`;
});
const loadPrase = async() => {
    try {
        const resp = await fetch(url);
        const { quotes } = await resp.json();
        const quote = quotes[0];
        console.log(quote);
        phrase.innerText = `"${quote.text}`;
        author.innerText = `${quote.author}`;
    } catch (err) {
        phrase.innerText = `"`;
        author.innerText = ``;
    }

}