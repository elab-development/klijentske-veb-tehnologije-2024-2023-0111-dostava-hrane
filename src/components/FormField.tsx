import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hint?: string;
}

export default function FormField({ label, hint, ...rest }: Props) {
    return (
        <label style={{ display: "block", marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6 }}>
                {label}
            </div>
            <input className="input" {...rest} />
            {hint && (
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 6 }}>
                    {hint}
                </div>
            )}
        </label>
    );
}
