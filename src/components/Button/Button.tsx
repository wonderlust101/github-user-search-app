import React from "react";
import './Button.scss'

type ButtonProps = {
    children?: React.ReactNode;
    className: string;
    destination?: string;
    type?: string;
}

export default function Button({children, className, destination}: ButtonProps): React.JSX.Element {
    const Component = destination ? 'a' : 'button';

    return (
        <Component href={destination} className={'button ' + className}>
            {children}
        </Component>
    );
}
