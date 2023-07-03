import React, { useContext, useState } from 'react'
import CurrencyContext from '../store/store';

function Content() {
  const [amount,setAmount]=useState(0);
  const [currency, setcurrency] = useState("EUR")
  const store=useContext(CurrencyContext);
  const {currencies}=store;
  const handleChange=(e)=>{
  const {name,value}=e.target;
  if(name==="amount"){
    setAmount(value);
  }
  if(name==="currency"){
    setcurrency(value);
  }
  }
  const result=amount?(amount/currencies[currency]).toFixed(2):0;
  return (
    <div>
      <form>
        <input type="text"
        name='amount'
        placeholder='enter Amount'
        value={amount}
        onChange={handleChange} />
        <select name="currency"
        value={currency}
        onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CHF">CHF</option>
        </select>
        <p>
          Result: {result} tl
        </p>
      </form>
    </div>
  )
}

export default Content