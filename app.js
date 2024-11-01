let jokeTextEl=document.getElementById('jokeText')
let jokeBtn=document.getElementById('jokeBtn')
let spinnerEl=document.querySelector('#spinner')

jokeBtn.addEventListener('click',()=>{
    const options={
        method:"GET"
    }
    spinnerEl.classList.toggle('d-none')
    fetch('https://apis.ccbp.in/jokes/random',options)
    .then(response=>response.json())
    .then(jsonData=>{
        spinnerEl.classList.toggle('d-none')
        jokeTextEl.textContent=jsonData.value;
    })

})