import React from "react";

import './Form.scss'

type FormProps = {
    children?: React.ReactNode;
    className?: string;
    legend?: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({children, className, legend, onSubmit}: FormProps) {
    return (
        <form className={"form " + (className ? className : '')} onSubmit={onSubmit} noValidate>
            <fieldset className="form__fieldset">
                {legend ? <legend className="legend">{legend}</legend> : <></>}

                {children}
            </fieldset>
        </form>
    )
}