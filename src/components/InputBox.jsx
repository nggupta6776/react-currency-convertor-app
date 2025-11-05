export function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency,
  disabled
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={disabled}
        className="border p-2 rounded-md"
      />
      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        className="border p-2 rounded-md"
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}
