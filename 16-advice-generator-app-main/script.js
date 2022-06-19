

let adviceId = document.getElementsByClassName("adviceId")[0]
let advice = document.getElementsByClassName("advice")[0]

const url = "https://api.adviceslip.com/advice"

async function fetchAdvice() {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);

    adviceId.innerHTML = `Advice #${data.slip.id}`
    advice.innerHTML = `"${data.slip.advice}"`
}

fetchAdvice()

// const fetchAdvice = async () => {
//     const res = await fetch("https://api.adviceslip.com/advice")
//     const data = await res.json()
//     console.log(data);

//     adviceId.innerHTML = `Advice #${data.slip.id}`
//     advice.innerHTML = `"${data.slip.advice}"`
// }
// fetchAdvice()

