const apiKey = '362aa7ded0637aff3ba48a23913511f5'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const button = document.querySelector('.search button')
const input = document.querySelector('.search input')


async function checkWether (city) {
   const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
   const data = await res.json()

   console.log(data)

   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
   document.querySelector('.city').innerHTML = data.name
   document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
   document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
}

button.addEventListener('click', () => {
    checkWether(input.value)
})
