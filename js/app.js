const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

//focus
changeLocation.city.focus()

//loader
function loader(state){
    if (state){
        overlay.classList.remove('d-none')
    }
    else {
        overlay.classList.add('d-none')
    }
}

//UpdateUI
const UpdateUI = (weather)=>{
    details.innerHTML = `
     <h5 class="mb-3">${weather.name} ${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
    `
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
    weatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}

//getWeather
const getWeather = async(city)=>{
    const data = await getData(city)
    return(data)
}

//getLocation
changeLocation.addEventListener('submit',(e)=>{
    e.preventDefault()
    const cityname = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityname).then((datas)=>UpdateUI(datas)).catch(()=>{
        console.log('xato')
    })
})