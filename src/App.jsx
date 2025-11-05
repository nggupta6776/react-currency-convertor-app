import { useState } from 'react'
import { InputBox } from './components'
import { useCurrencyInfo } from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  // State variables
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // Fetch exchange rates using custom hook
  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo || {})

  // Swap currencies
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  // Convert currency
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  return (
    <div className="App">
      <h1 className="text-3xl bg-orange-500 text-white p-3 text-center">
        Currency Converter with Chai ☕
      </h1>

      <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        {/* From Currency Box */}
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={currencyOptions}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(value) => setAmount(value)}
          selectedCurrency={from}
        />

        {/* Swap Button */}
        <button
          onClick={swap}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Swap
        </button>

        {/* To Currency Box */}
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={currencyOptions}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          disabled
        />

        {/* Convert Button */}
        <button
          onClick={convert}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Convert
        </button>
      </div>
    </div>
  )
}

export default App


