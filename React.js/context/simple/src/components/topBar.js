import React, { useContext } from 'react'
import "./topbar.css"
import CurrencyContext from '../store/store'
function TopBar() {
  const store=useContext(CurrencyContext);
  const {currencies}=store;
  const formatCurrency=(currency)=>{
    return (1/currencies[currency]).toFixed(4)
  };
  return (
    <header>
      <nav className='navbar'>
        <h3>ExChange</h3>
        <div>
          <div>$: {formatCurrency("USD")}</div>
          <div>€: {formatCurrency("EUR")}</div>
          <div>£: {formatCurrency("CHF")}</div>
        </div>
      </nav>
    </header>
  )
}

export default TopBar