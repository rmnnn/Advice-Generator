// Selectors
let advice = document.querySelector('#advice');
let adviceID = document.querySelector('#advice-id');
let generateBtn = document.querySelector('#generate-btn');

generateAdviceFromAPI = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response=> response.json()
    .then(data =>{
        let generatedAdvice = data.slip;
        advice.innerHTML = generatedAdvice.advice;
        adviceID.innerHTML = generatedAdvice.id;
    })
);
}

window.addEventListener('load',generateAdviceFromAPI);
generateBtn.addEventListener('click',generateAdviceFromAPI)


