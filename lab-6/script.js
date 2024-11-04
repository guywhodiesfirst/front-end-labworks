const url = 'https://randomuser.me/api'
const submitBtn = document.getElementById("submit-btn")
const container = document.getElementById('user-info')
const fields = document.querySelectorAll('#user-info *')

async function getUser() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(JSON.stringify(data, null, 2));
    return data 
}

getUser()

document.addEventListener('DOMContentLoaded', () => {
    fields.forEach(element => {
        element.style.display = 'none'
    })
    container.style.display = 'none'
})

submitBtn.addEventListener('click', async () => {
    try {
        let data = await getUser()
        fields.forEach(element => {
            element.style.display = 'block'
        })

        container.style.display = 'flex'
        
        user = data.results[0]

        fields[0].innerHTML = `
        <img src=${user.picture.large} class="user-img">
        `

        fields[1].innerHTML = `
        <p>
            Phone: ${user.phone}
        </p>
        `
        fields[2].innerHTML = `
        <p>
            Country: ${user.location.country}
        </p>
        `
        fields[3].innerHTML = `
        <p>
            Email: ${user.email}
        </p>
        `
        fields[4].innerHTML = `
        <p>
            Latitude: ${user.location.coordinates.latitude}<br>
            Longitude: ${user.location.coordinates.longitude}
        </p>
        `
    } catch(err) {
        alert(err)
    }
})