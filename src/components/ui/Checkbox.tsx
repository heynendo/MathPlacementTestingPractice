import React from 'react'

type CheckboxOption = {
  label: string
  value: string
}

type Props = {
  options: CheckboxOption[]
  value: string[]
  onChange: (value: string[]) => void
}

export default function Checkbox({ options, value, onChange }: Props) {
  function handleChange(optionValue: string) {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  return (
    <div className="checkbox-group">
      {options.map((option) => (
        <label
          key={option.value}
          className={`checkbox-option ${value.includes(option.value) ? 'checkbox-option--selected' : ''}`}
        >
          <input
            className="checkbox-option__input"
            type="checkbox"
            checked={value.includes(option.value)}
            onChange={() => handleChange(option.value)}
          />
          <span className="checkbox-option__label">{option.label}</span>
        </label>
      ))}
    </div>
  )
}