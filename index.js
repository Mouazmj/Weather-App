const apiKey = '362aa7ded0637aff3ba48a23913511f5'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Stockholm'

async function checkWether () {
   const res = await fetch(apiUrl + `&appid=${apiKey}`)
   const data = await res.json()

   console.log(data)
}

checkWether()