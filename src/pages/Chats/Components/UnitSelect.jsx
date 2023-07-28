import React, { useState } from "react"
import Select from "react-select"

const UnitSelect = ({
  unit,
  placeholder,
  options,
  initialValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue)
  const customStylesSelect = {
    menu: base => ({
      ...base,
      marginTop: "0px !important",
    }),
    option: (provided, state) => ({
      ...provided,

      backgroundColor: state.isSelected ? "#556ee6" : "#fff",
      ":hover": {
        backgroundColor: "#556ee6",
        color: "#fff",
      },
    }),
  }
  const handleSelectChange = selectedOption => {
    setSelectedValue(selectedOption)
    onChange(selectedOption)
  }
  const pluralize = (num, wordForms) => {
    const cases = [2, 0, 1, 1, 1, 2]
    return wordForms[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : cases[Math.min(num % 10, 5)]
    ]
  }

  const formatOptionLabel = (option, { context }) => {
    if (context === "value") {
      const value = option.label

      const wordForms = {
        days: ["день", "дня", "дней"],
        hours: ["час", "часа", "часов"],
        minutes: ["минута", "минуты", "минут"],
        seconds: ["секунда", "секунды", "секунд"],
      }

      return `${value} ${pluralize(value, wordForms[unit])}`
    } else {
      return option.label
    }
  }

  return (
    <Select
      styles={customStylesSelect}
      placeholder={placeholder}
      options={options}
      formatOptionLabel={formatOptionLabel}
      onChange={handleSelectChange}
      value={selectedValue}
    />
  )
}

export default UnitSelect
