const loadQoute = () => {
fetch('https://api.kanye.rest/')
.then(res => res.json())
.then(data => displayQuotes(data))
}

const displayQuotes = quote => {
const blockQuote = document.getElementById('quote');
blockQuote.innerHTML = `
<h4> Quote: ${quote.quote}</h4>
`

} 

loadQoute();