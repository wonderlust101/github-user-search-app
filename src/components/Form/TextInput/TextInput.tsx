import React from "react";
import './TextInput.scss'

type TextInputProps = {
    id: string;
    type: string;
    className?: string;
    status?: string;
    label?: string;
    placeholder?: string;
    icon?: string;
    errorText: string;
    isRequired: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
                                      id, type, className, status, label, placeholder, icon, errorText, isRequired,
                                      value, onChange
                                  }: TextInputProps) {
    return (
        <div className="text-input">
            {label ?
                <label className="text-input__label" htmlFor={id}>{label}</label> :
                <label className="sr-only" htmlFor={id}>{label}</label>}

            <input className={"text-input__field " + (status === '' ? '': 'text-input__field--' + status) + ` ${className}`}
                   id={id}
                   type={type}
                   placeholder={placeholder}
                   aria-required={isRequired}
                   required={isRequired}
                   value={value}
                   onChange={onChange}/>
            
            {icon ? <img className="text-input__error-icon" src={icon} alt="" role="presentation"/> : null}

            {status === 'error' ? <p className="text-input__status">{errorText}</p> : null}
        </div>
    )
}