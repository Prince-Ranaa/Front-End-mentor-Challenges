const bars = document.querySelectorAll(".bar");
const days = document.querySelectorAll(".day");
const barValues = document.querySelectorAll(".bar-value");
let total = 0





// bars[0].style.height = "100px"
// bars[1].style.height = "200px"
// bars[2].style.height = "120px"
// bars[3].style.height = "50px"
// bars[4].style.height = "180px"
// bars[5].style.height = "80px"
// bars[6].style.height = "10px"


fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        for (let i = 0; i < days.length; i++) {
            days[i].innerHTML = res[i].day
        }

        for (let i = 0; i < barValues.length; i++) {
            barValues[i].innerHTML = res[i].amount
        }

        for (let i = 0; i < barValues.length; i++) {
            bars[i].style.height = (res[i].amount) * 3 + "px"
            total += res[i].amount
        }

        document.getElementById("total-amt").innerHTML = "$" + total
    })
