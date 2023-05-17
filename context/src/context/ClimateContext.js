// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import {createContext, useContext, useState} from 'react';

export const useClimate = () =>
    useContext(ClimateContext)


export const ClimateContext = createContext();

export default function ClimateProvider({ children
}) {

    const [humidity, setHumidity] = useState('40')
    // console.log(humidity)






    const [temPerature, setTemperature ] = useState('50')
    // console.log(temPerature)
    return (
        <ClimateContext.Provider
        value={{
            temPerature,
            setTemperature,
            humidity,
            setHumidity
        }}
        >
            {children}
        </ClimateContext.Provider>
    );
}
