function scoreSentiment(){
    fetch(`https://rusty-sentiment.herokuapp.com/sentiment?phrase=${document.getElementById('phraseInput').value}`).then(data=>data.json()).then(
        d=>{
            d.phrases.forEach(s=>
                {
                    Object.entries(s).map(([k,v])=>
                    {
                        document.getElementById('output').innerText=v
                    }) 
                }
            )            
        }
    )
}