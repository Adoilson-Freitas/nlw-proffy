import React, { TextareaHTMLAttributes } from 'react';
import { TextareaForm } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}
 
const Textarea: React.FC<TextareaProps> = ({name, label, ...rest}) => {
  return (
     <TextareaForm>
       <div className="textarea-block">
       <label htmlFor={name}>{label}</label>
       <textarea  id={name} {...rest}/>
      </div>
     </TextareaForm>

  )
}

export default Textarea;