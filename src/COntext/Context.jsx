import { createContext,useState, useEffect, Children } from "react";
// first step : cree un context, on va utiliser create context

const Context = createContext();
// second step = pour cree le provider on va definir un component provider 

const Provider = ({children}) => {
    const [position, setPosition] = useState({
        lat :0,
        long:0,
    });
    const [weather,setWeather] = useState('')
    let getWeatherData = async() =>{
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${position.lat}&longitude=${position.long}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&timezone=GMT&forecast_days=1`
        try{
            let response = await axios.get(url);
            setWeather(response.data);
        } catch (error){
            console.error('there is an error:' + error);
        }
    };
    let info ={
        position:position,
        setPosition: setPosition,
        weather: weather,
        setWeather: setWeather,
    };
    return <Context.Provider value={info}> {children} </Context.Provider>
}
export {Context , Provider};