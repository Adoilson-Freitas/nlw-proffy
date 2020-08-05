import React, { SelectHTMLAttributes } from 'react';
import { SelectForm } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
 
const Select: React.FC<SelectProps> = ({name, label, options,...rest}) => {
  return (
     <SelectForm>
       <div className="select-block">
       <label htmlFor={name}>{label}</label>
       <select defaultValue="" id={name} {...rest}>
         <option value="" disabled hidden>Selecione uma opção</option>
         {options.map(option => {
           return <option key={option.value} value={option.value}>{option.label}</option>
         })}
       </select>
      </div>
     </SelectForm>

  )
}

export default Select;