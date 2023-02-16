import React from 'react';

type ButtonType = {
    onGeneralClick: () => void
    disabled: boolean
    btnStyle: string
    btnNames: string
}

const Button = (p: ButtonType) => {
    return (
        <div>
            <button onClick={p.onGeneralClick} disabled={p.disabled} className={p.btnStyle}>{p.btnNames}</button>
        </div>
    );
};

export default Button;