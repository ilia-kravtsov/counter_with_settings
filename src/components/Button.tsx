import React from 'react';

type ButtonType = {
    onCLickIncHanlder: () => void
    onCLickResHanlder: () => void
    onCLickSetHandler: () => void
    incBtnStyle: string
    resetBtnStyle: string
    buttonNameMap: string
    btnInc: string
    btnReset: string
    btnSet: string
    setBtnStyle: string
}

const Button = (props: ButtonType) => {

    if (props.buttonNameMap === props.btnInc) {
        return (
            <div onClick={props.onCLickIncHanlder} className={props.incBtnStyle}>
                <div>{props.buttonNameMap}</div>
            </div>
        )
    } else if (props.buttonNameMap === props.btnReset) {
        return (
            <div onClick={props.onCLickResHanlder} className={props.resetBtnStyle}>
                <div>{props.buttonNameMap}</div>
            </div>
        )
    } else if (props.buttonNameMap === props.btnSet) {
        return (
            <div onClick={props.onCLickSetHandler} className={props.setBtnStyle}>
                <div>{props.buttonNameMap}</div>
             </div>
        )
    } else {
        return <></>
    }


};

export default Button;