import React from 'react';

type ButtonType = {
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    onCLickSetHandler: () => void
    resetBtnStyle: string
    buttonNameMap: string
    setBtnStyle: string
    incBtnStyle: string
    btnReset: string
    btnInc: string
    btnSet: string
}

const Button = (p: ButtonType) => {

    if (p.buttonNameMap === p.btnInc) {
        return (
            <div onClick={p.onCLickIncHanlder} className={p.incBtnStyle}>
                <div>{p.buttonNameMap}</div>
            </div>
        )
    } else if (p.buttonNameMap === p.btnReset) {
        return (
            <div onClick={p.onCLickResHanlder} className={p.resetBtnStyle}>
                <div>{p.buttonNameMap}</div>
            </div>
        )
    } else if (p.buttonNameMap === p.btnSet) {
        return (
            <div onClick={p.onCLickSetHandler} className={p.setBtnStyle}>
                <div>{p.buttonNameMap}</div>
             </div>
        )
    } else {
        return <></>
    }


};

export default Button;