const username = document.getElementById('name')
const email = document.getElementById('email')
const dob = document.getElementById('dob')
const phone = document.getElementById('phone-number')
const country = document.getElementById('country')
const button = document.getElementById('submit')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        name: username.value,
        email: email.value,
        dob: dob.value,
        telephone: phone.value,
        country: country.value
    }
    console.log("data")
    localStorage.setItem("user", JSON.stringify(data))
    document.location.assign("user.html")
})