import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export default function Button({ label, ...rest }: Props) {
    return (
        <button className="btn" {...rest}>
            {label}
        </button>
    );
}
