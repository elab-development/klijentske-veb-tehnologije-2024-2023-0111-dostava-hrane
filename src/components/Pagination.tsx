import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    total: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (p: number) => void;
}

export default function Pagination({ total, pageSize, currentPage, onPageChange, ...rest }: Props) {
    const pages = Math.max(1, Math.ceil(total / pageSize));
    const go = (p: number) => onPageChange(Math.min(Math.max(1, p), pages));

    const numbers = Array.from({ length: pages }, (_, i) => i + 1);

    return (
        <div {...rest}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <button className="btn" onClick={() => go(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                {numbers.map(n => (
                    <button
                        key={n}
                        className="btn"
                        onClick={() => go(n)}
                        style={{ opacity: n === currentPage ? 1 : 0.6 }}
                    >
                        {n}
                    </button>
                ))}
                <button className="btn" onClick={() => go(currentPage + 1)} disabled={currentPage === pages}>Next</button>
            </div>
        </div>
    );
}
