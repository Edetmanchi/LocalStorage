const username = document.getElementById('name')
const email = document.getElementById('email')
const dob = document.getElementById('dob')
const phone = document.getElementById('phone')
const country = document.getElementById('country')
const back = document.getElementById("back")

document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem('user'))
    username.innerText = data.name
    email.innerText = data.email
    dob.innerText = data.dob
    phone.innerText = data.phone
    country.innerText = data.country
    // console.log("data", data)
})

function clicked() {
    alert("Thank you");
}