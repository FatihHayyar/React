import React, { useEffect, useState } from 'react'
import { settings } from './constant/constant';
import CurrencyContext from './store/store';
import Exchance from './components/exchance';
const App = () => {
    const [currencies, setCurrencies] = useState({});

    const loadData = async () => {
        try {
            const response = await fetch(`${settings.API_URL}/latest?from=${settings.currency.default}`)
                .then((response) => response.json())
                .then((data) => setCurrencies(data.rates))
        } catch (error) {
            console.log(error)
        }
    }

    console.log(currencies)

    useEffect(() => {
        loadData();
    }, [])

    return (
        <CurrencyContext.Provider value={{currencies}}>
            <div>
                <Exchance/>
            </div>
        </CurrencyContext.Provider>
        
    )
}

export default App