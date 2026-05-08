import React from 'react'

type RadioOption = {
  label: string
  value: string
}

type Props = {
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  name: string
}

export default function Radio({ options, value, onChange, name }: Props) {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <label
          key={option.value}
          className={`radio-option ${value === option.value ? 'radio-option--selected' : ''}`}
        >
          <input
            className="radio-option__input"
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <span className="radio-option__label">{option.label}</span>
        </label>
      ))}
    </div>
  )
}